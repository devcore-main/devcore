// ============================================
// CYBERSECURITY PRESENTATION - DAY 1
// ============================================

const slides = [
    {
        type: "welcome",
        content: {
            icon: "🛡️",
            title: "Cybersecurity for Everyone",
            subtitle: "Day 1: The Digital Foundation",
            tagline: "Welcome, Future Cyber Heroes! 🦸‍♂️"
        }
    },
    {
        type: "concept",
        content: {
            icon: "❓",
            title: "Question: What is Cyber Security?",
            description: "Search about it! What do you know?",
            arabic: "ابحث عن: ما هو الأمن السيبراني؟"
        }
    },
    {
        type: "concept",
        content: {
            icon: "🔐",
            title: 'What is "Cybersecurity"?',
            description: "Imagine it's like a <strong>Personal Bodyguard</strong> 🕴️ but for your computer and phone! It protects you from the bad guys on the internet.",
            arabic: "تخيل إنه \"حارس شخصي\" بس للكمبيوتر والموبايل بتاعك"
        }
    },
    {
        type: "activity",
        content: {
            title: "🎮 Activity: Real vs Digital",
            rounds: [
                {
                    scenario: "🏠 Locking your house door at night.",
                    question: "Is this Physical Security or Cybersecurity?",
                    options: ["Physical Security 🏠", "Cybersecurity 💻"],
                    correct: 0,
                    explanation: "Correct! Locking a real door is Physical Security. 🏠"
                },
                {
                    scenario: "📱 Locking your phone with a passcode.",
                    question: "Is this Physical Security or Cybersecurity?",
                    options: ["Physical Security 🏠", "Cybersecurity 💻"],
                    correct: 1,
                    explanation: "Correct! Protecting your digital device is Cybersecurity! 💻"
                }
            ]
        }
    },
    {
        type: "concept",
        content: {
            icon: "🌐",
            title: "Question: Why is it Important?",
            description: "Search about it! What are its benefits?",
            arabic: "ابحث عن: لماذا هو مهم؟ وما هي فوائده؟"
        }
    },
    {
        type: "concept",
        content: {
            icon: "🌐",
            title: "Why is it Important?",
            description: "Our whole life is now <strong>ONLINE</strong>! Photos 📸, Games 🎮, School work 📚. We need to protect these things to stay safe!",
            arabic: "حياتنا كلها بقت أونلاين - لازم نحميها!"
        }
    },
    {
        type: "terms",
        content: {
            title: "Important Words to Know",
            terms: [
                {
                    icon: "💎",
                    name: "Asset",
                    arabic: "الكنز",
                    description: "Anything valuable to you (Your phone, photos, gaming account)"
                },
                {
                    icon: "🦹",
                    name: "Attacker",
                    arabic: "اللص",
                    description: "The person who wants to steal your treasure!"
                }
            ]
        }
    },
    {
        type: "activity",
        content: {
            title: "🎮 Activity: Asset or Not?",
            rounds: [
                {
                    scenario: "📸 Your favorite family photo.",
                    question: "Is this an Asset?",
                    options: ["Yes, protect it! 💎", "No, it's trash 🗑️"],
                    correct: 0,
                    explanation: "Yes! Photos are personal and valuable assets. 💎"
                },
                {
                    scenario: "🗑️ An empty candy wrapper.",
                    question: "Is this an Asset?",
                    options: ["Yes, protect it! 💎", "No, it's trash 🗑️"],
                    correct: 1,
                    explanation: "Correct! Trash is not an asset worth protecting. 🗑️"
                }
            ]
        }
    },
    {
        type: "terms",
        content: {
            title: "How Do They Get In?",
            terms: [
                {
                    icon: "🪟",
                    name: "Vulnerability",
                    arabic: "الثغرة",
                    description: "An open window or broken door in your device"
                },
                {
                    icon: "⚔️",
                    name: "Attack",
                    arabic: "الهجوم",
                    description: "When the thief uses that open window to get in!"
                }
            ]
        }
    },
    {
        type: "activity",
        content: {
            title: "🎮 Activity: Spot the Weakness",
            rounds: [
                {
                    scenario: "🔓 You left your phone unlocked on the bus.",
                    question: "Is this a Vulnerability or an Attack?",
                    options: ["Vulnerability 🪟", "Attack ⚔️"],
                    correct: 0,
                    explanation: "The unlocked phone is a Weakness (Vulnerability). Nothing bad happened... yet! 😱"
                },
                {
                    scenario: "😈 Someone stole your unlocked phone!",
                    question: "Is this a Vulnerability or an Attack?",
                    options: ["Vulnerability 🪟", "Attack ⚔️"],
                    correct: 1,
                    explanation: "Now it is an Attack! They used the weakness to steal from you. ⚔️"
                }
            ]
        }
    },
    {
        type: "activity",
        content: {
            title: "🧠 Activity: Linked Concepts",
            rounds: [
                {
                    scenario: "Create a scenario linking: Asset, Vulnerability, Attacker, Attack.",
                    question: "Give an example describing these 4 concepts together.",
                    options: ["I'm ready! 🎤"],
                    correct: 0,
                    explanation: "Excellent! Understanding how they link is key to defense! 🛡️"
                }
            ]
        }
    },
    {
        type: "concept",
        content: {
            icon: "🛡️",
            title: "Implementation Challenge",
            description: "Mention 3 things to implement strong and complete security.",
            arabic: "اذكر 3 أشياء لتطبيق أمان قوي وكامل"
        }
    },
    {
        type: "cia-intro",
        content: {
            title: "The 3 Pillars of Protection",
            subtitle: "CIA Triad",
            description: "To protect our data, we need to achieve 3 things (like a triangle!)"
        }
    },
    {
        type: "cia-detail",
        content: {
            letter: "C",
            title: "Confidentiality",
            arabic: "السرية 🤫",
            icon: "🔒",
            description: '"No one can see your messages except you and your friend"',
            example: "Only allowed people can see!"
        }
    },
    {
        type: "cia-detail",
        content: {
            letter: "I",
            title: "Integrity",
            arabic: "النزاهة / السلامة ✅",
            icon: "✅",
            description: '"No one can change your grades at school"',
            example: "Data is correct and not changed!"
        }
    },
    {
        type: "cia-detail",
        content: {
            letter: "A",
            title: "Availability",
            arabic: "الإتاحة ⏱️",
            icon: "⏱️",
            description: '"The game works whenever you want to play"',
            example: "Data is there when you need it!"
        }
    },
    {
        type: "activity",
        content: {
            title: "🎮 Activity: Spot the Concept!",
            rounds: [
                {
                    scenario: "😱 Your friend knows your password and reads your private chat!",
                    question: "Is this a problem with Confidentiality or Availability?",
                    options: ["Confidentiality", "Availability"],
                    correct: 0,
                    explanation: "Someone saw what they shouldn't see = Confidentiality problem! 🔒❌"
                },
                {
                    scenario: "😭 A hacker deleted Fortnite from your device!",
                    question: "Is this a problem with Integrity or Availability?",
                    options: ["Integrity", "Availability"],
                    correct: 1,
                    explanation: "You can't access your game anymore = Availability problem! ⏱️❌"
                },
                {
                    scenario: "🤡 Someone logged into your Facebook and changed your name to 'Silly Boy'!",
                    question: "Which pillar is affected?",
                    options: ["Confidentiality", "Integrity", "Availability"],
                    correct: 1,
                    explanation: "Your data was changed/modified = Integrity problem! ✅❌"
                },
                {
                    scenario: "🤫 You tell your friend a secret, and they post it on Instagram!",
                    question: "Which pillar is broken?",
                    options: ["Confidentiality", "Integrity", "Availability"],
                    correct: 0,
                    explanation: "Confidentiality! A secret should stay secret. 🤫"
                },
                {
                    scenario: "🚫 Youtube is down and you can't watch videos!",
                    question: "Which pillar is broken?",
                    options: ["Confidentiality", "Integrity", "Availability"],
                    correct: 2,
                    explanation: "Availability! The service is not available. ⏱️"
                },
                {
                    scenario: "🎨 Someone edited your drawing and made it ugly!",
                    question: "Which pillar is broken?",
                    options: ["Confidentiality", "Integrity", "Availability"],
                    correct: 1,
                    explanation: "Integrity! The original work was changed. ✅"
                }
            ]
        }
    },
    {
        type: "activity",
        content: {
            title: "📝 Day 1 Quiz",
            rounds: [
                {
                    scenario: "🤔 What do we call a 'hidden treasure' like your photos or data?",
                    question: "Choose the correct term:",
                    options: ["Asset 💎", "Vulnerability 🪟", "Attack ⚔️"],
                    correct: 0,
                    explanation: "Asset! It's something valuable we want to protect. 💎"
                },
                {
                    scenario: "🚪 Leaving your house door wide open is a...",
                    question: "Choose the correct term:",
                    options: ["Asset 💎", "Vulnerability 🪟", "Attack ⚔️"],
                    correct: 1,
                    explanation: "Vulnerability! It's a weakness that allows bad guys in. 🪟"
                },
                {
                    scenario: "🤫 Keeping secrets safe from prying eyes is...",
                    question: "Which C-I-A letter?",
                    options: ["Confidentiality", "Integrity", "Availability"],
                    correct: 0,
                    explanation: "Confidentiality! Keeping things secret. 🤫"
                }
            ]
        }
    },
    {
        type: "questions",
        content: {
            title: "Any Questions?",
            icon: "🤔"
        }
    },
    {
        type: "thankyou",
        content: {
            title: "See You Tomorrow!",
            message: "Thank you for today! 🎉",
            preview: "Tomorrow: We'll discover who hackers are and how they think! 🦹‍♂️"
        }
    }
];

// State Management
let currentSlide = 0;
let activityRound = 0;

// DOM Elements
const presentationContainer = document.getElementById('presentationContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const slideDots = document.getElementById('slideDots');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const activityModal = document.getElementById('activityModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');
const confettiContainer = document.getElementById('confettiContainer');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderSlide();
    updateProgress();
    setupEventListeners();
});

// Event Listeners
function setupEventListeners() {
    // Navigation buttons
    prevBtn.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            renderSlide();
            updateProgress();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentSlide < slides.length - 1) {
            currentSlide++;
            renderSlide();
            updateProgress();
        }
    });

    // Modal close
    closeModal.addEventListener('click', () => {
        activityModal.classList.remove('show');
    });

    activityModal.addEventListener('click', (e) => {
        if (e.target === activityModal) {
            activityModal.classList.remove('show');
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            nextBtn.click();
        } else if (e.key === 'ArrowLeft') {
            prevBtn.click();
        }
    });
}

// Update progress
function updateProgress() {
    const progress = ((currentSlide + 1) / slides.length) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `${currentSlide + 1}/${slides.length}`;

    // Update navigation buttons
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === slides.length - 1;

    // Update dots
    renderDots();
}

// Render dots
function renderDots() {
    slideDots.innerHTML = '';
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.className = `slide-dot ${index === currentSlide ? 'active' : ''}`;
        dot.addEventListener('click', () => {
            currentSlide = index;
            renderSlide();
            updateProgress();
        });
        slideDots.appendChild(dot);
    });
}

// Render slide
function renderSlide() {
    const slide = slides[currentSlide];
    let html = '';

    switch (slide.type) {
        case 'welcome':
            html = renderWelcomeSlide(slide.content);
            break;
        case 'concept':
            html = renderConceptSlide(slide.content);
            break;
        case 'terms':
            html = renderTermsSlide(slide.content);
            break;
        case 'cia-intro':
            html = renderCIAIntroSlide(slide.content);
            break;
        case 'cia-detail':
            html = renderCIADetailSlide(slide.content);
            break;
        case 'activity':
            html = renderActivitySlide(slide.content);
            break;
        case 'questions':
            html = renderQuestionsSlide(slide.content);
            break;
        case 'thankyou':
            html = renderThankYouSlide(slide.content);
            break;
        case 'hackers':
            html = renderHackersSlide(slide.content);
            break;
        case 'sharing':
            html = renderSharingSlide(slide.content);
            break;
        case 'password-weak':
            html = renderPasswordWeakSlide(slide.content);
            break;
        case 'password-strong':
            html = renderPasswordStrongSlide(slide.content);
            break;
        case 'tips':
            html = renderTipsSlide(slide.content);
            break;
        case 'takeaways':
            html = renderTakeawaysSlide(slide.content);
            break;
        case 'final':
            html = renderFinalSlide(slide.content);
            break;
        default:
            html = '<div class="slide active">Unknown slide type</div>';
    }

    presentationContainer.innerHTML = html;

    // Reset activity round for activity slides
    if (slide.type === 'activity') {
        activityRound = 0;
        setupActivityListeners(slide.content);
    }
}

// Slide Renderers
function renderWelcomeSlide(content) {
    return `
        <div class="slide slide-welcome active">
            <div class="hero-icon">${content.icon}</div>
            <h1>${content.title}</h1>
            <p class="subtitle">${content.subtitle}</p>
            <p class="description">${content.tagline}</p>
        </div>
    `;
}

function renderConceptSlide(content) {
    return `
        <div class="slide active">
            <div class="content-card">
                <span class="card-icon">${content.icon}</span>
                <h2>${content.title}</h2>
                <p class="description">${content.description}</p>
                ${content.arabic ? `<p class="subtitle" style="margin-top: 1rem; font-size: 1rem; color: var(--primary-purple);">${content.arabic}</p>` : ''}
            </div>
        </div>
    `;
}

function renderTermsSlide(content) {
    return `
        <div class="slide active">
            <h2 style="margin-bottom: 2rem;">${content.title}</h2>
            <div class="terms-grid">
                ${content.terms.map(term => `
                    <div class="term-card">
                        <span class="term-icon">${term.icon}</span>
                        <div class="term-name">${term.name}</div>
                        <div class="term-arabic">(${term.arabic})</div>
                        <p class="term-desc">${term.description}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderCIAIntroSlide(content) {
    return `
        <div class="slide active">
            <h2>${content.title}</h2>
            <p class="subtitle">${content.subtitle}</p>
            <div class="cia-container">
                <div class="cia-triangle">
                    <div class="cia-point c" title="Confidentiality">🔒</div>
                    <div class="cia-point i" title="Integrity">✅</div>
                    <div class="cia-point a" title="Availability">⏱️</div>
                </div>
                <p class="description">${content.description}</p>
            </div>
        </div>
    `;
}

function renderCIADetailSlide(content) {
    const colorClass = content.letter === 'C' ? 'confidentiality' :
        content.letter === 'I' ? 'integrity' : 'availability';
    return `
        <div class="slide active">
            <div class="cia-card ${colorClass}">
                <span class="cia-icon">${content.icon}</span>
                <h2 class="cia-title">${content.title}</h2>
                <p class="cia-arabic">${content.arabic}</p>
                <p class="cia-desc">${content.description}</p>
                <p style="margin-top: 1rem; color: var(--text-muted);">${content.example}</p>
            </div>
        </div>
    `;
}

function renderActivitySlide(content) {
    const round = content.rounds[0];
    return `
        <div class="slide active">
            <div class="activity-container">
                <div class="activity-header">
                    <span class="activity-badge">Interactive Activity</span>
                    <h2>${content.title}</h2>
                </div>
                <div class="scenario-card" id="scenarioCard">
                    <span class="scenario-icon">📋</span>
                    <p class="scenario-text" id="scenarioText">${round.scenario}</p>
                    <p class="scenario-question" id="scenarioQuestion">${round.question}</p>
                </div>
                <div class="answer-options" id="answerOptions">
                    ${round.options.map((option, index) => `
                        <button class="answer-btn" data-index="${index}">${option}</button>
                    `).join('')}
                </div>
                <div class="answer-reveal" id="answerReveal">
                    <span class="answer-icon">✅</span>
                    <p class="answer-text" id="answerText"></p>
                </div>
                <button class="next-round-btn" id="nextRoundBtn">Next Question ➡️</button>
                <div style="margin-top: 1.5rem; text-align: center;">
                    <span id="roundIndicator" style="color: var(--text-muted);">Round 1 of ${content.rounds.length}</span>
                </div>
            </div>
        </div>
    `;
}

function setupActivityListeners(content) {
    const answerBtns = document.querySelectorAll('.answer-btn');
    const answerReveal = document.getElementById('answerReveal');
    const answerText = document.getElementById('answerText');
    const scenarioText = document.getElementById('scenarioText');
    const scenarioQuestion = document.getElementById('scenarioQuestion');
    const answerOptions = document.getElementById('answerOptions');
    const roundIndicator = document.getElementById('roundIndicator');
    const nextRoundBtn = document.getElementById('nextRoundBtn');

    // Helper to setup next button listener
    const setupNextButton = () => {
        // Remove old listener to prevent duplicates
        const newBtn = nextRoundBtn.cloneNode(true);
        nextRoundBtn.parentNode.replaceChild(newBtn, nextRoundBtn);

        newBtn.addEventListener('click', () => {
            activityRound++;
            if (activityRound < content.rounds.length) {
                const nextRound = content.rounds[activityRound];
                scenarioText.textContent = nextRound.scenario;
                scenarioQuestion.textContent = nextRound.question;

                answerOptions.innerHTML = nextRound.options.map((option, index) => `
                    <button class="answer-btn" data-index="${index}">${option}</button>
                `).join('');

                roundIndicator.textContent = `Round ${activityRound + 1} of ${content.rounds.length}`;
                answerReveal.classList.remove('show');
                newBtn.classList.remove('show');

                // Re-setup listeners for new buttons
                setupActivityListeners(content);
            } else {
                answerReveal.classList.add('show');
                answerText.textContent = "🎉 Great job! You completed all rounds!";
                triggerConfetti();
                newBtn.classList.remove('show');
            }
        });
    };

    answerBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const selectedIndex = parseInt(btn.dataset.index);
            const round = content.rounds[activityRound];

            // Disable all buttons
            answerBtns.forEach(b => b.disabled = true);

            // Show result
            if (selectedIndex === round.correct) {
                btn.classList.add('correct');
                triggerConfetti();
            } else {
                btn.classList.add('wrong');
                // Highlight correct answer
                const correctBtn = document.querySelector(`.answer-btn[data-index="${round.correct}"]`);
                if (correctBtn) correctBtn.classList.add('correct');
            }

            // Show explanation
            answerText.textContent = round.explanation;
            answerReveal.classList.add('show');

            // Show Next Button instead of auto-advance
            setupNextButton(); // Ensure listener is attached
            const currentNextBtn = document.getElementById('nextRoundBtn');
            currentNextBtn.textContent = activityRound < content.rounds.length - 1 ? "Next Question ➡️" : "Finish Activity 🎉";
            currentNextBtn.classList.add('show');
        });
    });
}

function renderQuestionsSlide(content) {
    return `
        <div class="slide question-slide active">
            <div class="question-icon">${content.icon}</div>
            <h1>${content.title}</h1>
            <p class="description">Raise your hand if you have any questions! 🙋‍♂️🙋‍♀️</p>
        </div>
    `;
}

function renderThankYouSlide(content) {
    return `
        <div class="slide thankyou-slide active">
            <div class="emoji-row">🎉 🌟 🎊</div>
            <h1>${content.title}</h1>
            <p class="description">${content.message}</p>
            <div class="next-day-preview">
                <h3>Coming Up Next...</h3>
                <p>${content.preview}</p>
            </div>
        </div>
    `;
}

// Unused renderers for Day 1 but kept for consistency if needed, though they are not called by Day 1 data.
function renderHackersSlide(content) { return ''; }
function renderSharingSlide(content) { return ''; }
function renderPasswordWeakSlide(content) { return ''; }
function renderPasswordStrongSlide(content) { return ''; }
function renderTipsSlide(content) { return ''; }
function renderTakeawaysSlide(content) { return ''; }
function renderFinalSlide(content) { return ''; }

// Confetti Effect
function triggerConfetti() {
    const colors = ['#00f5ff', '#9d4edd', '#ff006e', '#00ff88', '#ffea00'];

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            confetti.style.animationDelay = Math.random() * 0.5 + 's';

            if (Math.random() > 0.5) {
                confetti.style.width = '8px';
                confetti.style.height = '16px';
                confetti.style.borderRadius = '4px';
            }

            confettiContainer.appendChild(confetti);

            setTimeout(() => confetti.remove(), 4000);
        }, i * 30);
    }
}
