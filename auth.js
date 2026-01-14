// Authentication and Validation JavaScript

// Configuration - load from injected runtime config to avoid hardcoded secrets
const CONFIG = window.__DEVCORE_CONFIG__ || {};
const API_BASE_URL = CONFIG.API_BASE_URL || (window.location.protocol === 'https:' || window.location.hostname !== 'localhost' ? window.location.origin.replace(/\/\$/, '') + '/api' : 'http://localhost:5000/api');
const ADMIN_EMAIL = CONFIG.ADMIN_EMAIL || null; // keep admin email in config if needed

// Utility Functions
const utils = {
  // Check if user is logged in
  isLoggedIn: () => {
    return !!localStorage.getItem('authToken');
  },

  // Get current user (safe parse)
  getCurrentUser: () => {
    try {
      const userStr = localStorage.getItem('user');
      return userStr ? JSON.parse(userStr) : null;
    } catch (e) {
      console.error('Failed to parse user from storage', e);
      return null;
    }
  },

  // Set user session: token and user object (password not stored)
  setSession: (token, user) => {
    try {
      localStorage.setItem('authToken', token);
      // Remove sensitive fields before storing
      const safeUser = Object.assign({}, user);
      if (safeUser.password) delete safeUser.password;
      localStorage.setItem('user', JSON.stringify(safeUser));
    } catch (e) {
      console.error('Failed to save session', e);
    }
  },

  // Clear session
  clearSession: () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  },

  // Get Authorization header for requests
  getAuthHeader: () => {
    const token = localStorage.getItem('authToken');
    return token ? { 'Authorization': `Bearer ${token}` } : {};
  }
};

// Basic client-side validation helpers (keep minimal; enforce on server)
const validators = {
  isEmail: (email) => /^(?:[a-zA-Z0-9_'^&\\/+\-])+(?:\\.(?:[a-zA-Z0-9_'^&\\/+\-])+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,}$/.test(email),
  isPasswordStrong: (p) => typeof p === 'string' && p.length >= 8,
  isUsername: (u) => typeof u === 'string' && /^[a-zA-Z0-9_\-]{3,30}$/.test(u)
};

// Login flow: sends credentials to API, handles response, stores token
async function submitLogin(email, password) {
  if (!validators.isEmail(email)) throw new Error('Invalid email format');
  if (!validators.isPasswordStrong(password)) throw new Error('Password must be at least 8 characters');

  const url = `${API_BASE_URL.replace(/\/\$/, '')}/Auth/login`;
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    if (!res.ok) {
      const err = await res.json().catch(() => ({ message: 'Login failed' }));
      throw new Error(err.message || 'Authentication failed');
    }

    const data = await res.json();
    // Expected: { token: '...', user: { ... } }
    if (!data.token) throw new Error('Missing token in response');

    utils.setSession(data.token, data.user || { email });
    return data.user || { email };
  } catch (e) {
    console.error('Login error', e);
    throw e;
  }
}

// Logout flow
function logout() {
  utils.clearSession();
  // Optionally redirect to login page
  if (window.location.pathname.indexOf('login.html') === -1) {
    window.location.href = 'login.html';
  }
}

// Attach simple form handlers when applicable
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', async (ev) => {
      ev.preventDefault();
      const email = (document.getElementById('email') || {}).value || '';
      const password = (document.getElementById('password') || {}).value || '';
      const errorEl = document.getElementById('loginError');
      if (errorEl) errorEl.textContent = '';

      try {
        await submitLogin(email.trim(), password);
        // Redirect after successful login
        window.location.href = 'dashboard.html';
      } catch (err) {
        if (errorEl) errorEl.textContent = err.message || 'Login failed';
      }
    });
  }

  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) logoutBtn.addEventListener('click', logout);
});