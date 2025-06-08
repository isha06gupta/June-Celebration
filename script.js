// === Fun Facts Array ===
const funFacts = [
  "June is named after Juno, the Roman goddess of marriage.",
  "June has more daylight hours than any other month in the Northern Hemisphere.",
  "The pearl is the birthstone for June.",
  "June is LGBTQ+ Pride Month in many countries.",
  "June hosts the summer solstice, the longest day of the year!"
];

// === Trivia Questions Array ===
const triviaQuestions = [
  {
    question: "Which birthstone is associated with June?",
    options: ["Emerald", "Pearl", "Ruby", "Sapphire"],
    answer: "Pearl"
  },
  {
    question: "What event is celebrated globally in June to support the LGBTQ+ community?",
    options: ["Earth Day", "Pride Month", "Labor Day", "Women's Day"],
    answer: "Pride Month"
  },
  {
    question: "Which day in June is usually the longest in the Northern Hemisphere?",
    options: ["June 1", "June 10", "June 21", "June 30"],
    answer: "June 21"
  }
];

// === Celebrations Array ===
const celebrations = [
  {
    name: "National Nail Polish Day",
    icon: "palette",
    color: "card-pink",
    date: "June 1st",
    emoji: "💅",
    description: "A day to celebrate colorful nails and creative nail art! Originated to recognize the joy and creativity behind nail polish.",
    howTo: "Paint your nails in your favorite colors, try a new nail art design, or host a mini-manicure party with friends.",
    funFact: "Nail polish dates back to 3000 BCE in China, where royalty wore gold and silver on their nails.",
    related: ["National Pink Day", "National Selfie Day"]
  },
  {
    name: "National Hazelnut Cake Day",
    icon: "cake",
    color: "card-orange",
    date: "June 2nd",
    emoji: "🍰",
    description: "A perfect excuse to indulge in delicious hazelnut cakes, loved worldwide for their nutty flavor.",
    howTo: "Bake or buy a hazelnut cake, share with friends, or post a photo of your treat online.",
    funFact: "Hazelnuts are one of the main ingredients in the famous spread Nutella.",
    related: ["National Chocolate Ice Cream Day", "National Cheese Day"]
  },
  {
    name: "National Go Barefoot Day",
    icon: "sun",
    color: "card-yellow",
    date: "June 1st",
    emoji: "🦶",
    description: "Encourages people to go barefoot and feel the earth beneath their feet.",
    howTo: "Take off your shoes and walk barefoot in a park or your backyard.",
    funFact: "Going barefoot can help strengthen your feet and improve balance.",
    related: ["World Environment Day"]
  },
  {
    name: "National Rocky Road Day",
    icon: "ice-cream",
    color: "card-amber",
    date: "June 2nd",
    emoji: "🍦",
    description: "A sweet day dedicated to the rocky road ice cream flavor.",
    howTo: "Enjoy a bowl of rocky road ice cream or make your own at home.",
    funFact: "Rocky road was one of the first ice cream flavors to include mix-ins.",
    related: ["National Chocolate Ice Cream Day"]
  },
  {
    name: "National Leave the Office Early Day",
    icon: "calendar",
    color: "card-green",
    date: "June 2nd",
    emoji: "🏃‍♂️",
    description: "A day to recognize employees' hard work and give them a break.",
    howTo: "Wrap up your work early and treat yourself to a relaxing activity.",
    funFact: "Studies show that taking breaks can boost productivity.",
    related: ["National Best Friends Day"]
  },
  {
    name: "National Egg Day",
    icon: "sun",
    color: "card-yellow",
    date: "June 3rd",
    emoji: "🥚",
    description: "Celebrates the versatility and nutritional value of eggs.",
    howTo: "Try a new egg recipe or make your favorite style of eggs.",
    funFact: "Eggs contain all nine essential amino acids.",
    related: ["National Cheese Day"]
  },
  {
    name: "World Bicycle Day",
    icon: "bike",
    color: "card-blue",
    date: "June 3rd",
    emoji: "🚴‍♀️",
    description: "Promotes cycling for health and environmental benefits.",
    howTo: "Go for a bike ride or join a local cycling group.",
    funFact: "The first bicycles were called 'velocipedes.'",
    related: ["World Environment Day"]
  },
  {
    name: "National Cheese Day",
    icon: "chef-hat",
    color: "card-amber",
    date: "June 4th",
    emoji: "🧀",
    description: "A day for cheese lovers everywhere to celebrate their favorite dairy treat.",
    howTo: "Host a cheese tasting or try a new cheese recipe.",
    funFact: "There are over 1,800 different kinds of cheese worldwide.",
    related: ["National Egg Day"]
  },
  {
    name: "World Environment Day",
    icon: "leaf",
    color: "card-green",
    date: "June 5th",
    emoji: "🌍",
    description: "Raises awareness and encourages action for environmental protection.",
    howTo: "Plant a tree, start recycling, or clean up your local park.",
    funFact: "World Environment Day has been celebrated every year since 1974.",
    related: ["World Oceans Day"]
  },
  {
    name: "National Chocolate Ice Cream Day",
    icon: "ice-cream",
    color: "card-amber",
    date: "June 7th",
    emoji: "🍫",
    description: "A day to enjoy the classic chocolate ice cream.",
    howTo: "Treat yourself to a scoop (or two) of chocolate ice cream.",
    funFact: "Chocolate ice cream was invented before vanilla.",
    related: ["National Rocky Road Day"]
  },
  {
    name: "National Best Friends Day",
    icon: "heart",
    color: "card-pink",
    date: "June 8th",
    emoji: "👯‍♀️",
    description: "A day to celebrate friendships and appreciate your best friends.",
    howTo: "Spend time with your best friend or send them a heartfelt message.",
    funFact: "Friendships can boost happiness and reduce stress.",
    related: ["National Leave the Office Early Day"]
  },
  {
    name: "World Oceans Day",
    icon: "droplets",
    color: "card-blue",
    date: "June 8th",
    emoji: "🌊",
    description: "Highlights the importance of oceans and the need to protect them.",
    howTo: "Participate in a beach cleanup or learn about ocean conservation.",
    funFact: "Oceans cover over 70% of the Earth's surface.",
    related: ["World Environment Day"]
  },
  {
    name: "National Ballpoint Pen Day",
    icon: "pen-tool",
    color: "card-indigo",
    date: "June 10th",
    emoji: "✍️",
    description: "Commemorates the invention of the ballpoint pen.",
    howTo: "Write a letter or draw something creative.",
    funFact: "The first ballpoint pen was patented in 1888.",
    related: ["National Selfie Day"]
  },
  {
    name: "World Blood Donor Day",
    icon: "heart",
    color: "card-red",
    date: "June 14th",
    emoji: "❤️",
    description: "Thanks voluntary blood donors and raises awareness for the need of blood.",
    howTo: "Donate blood or encourage others to donate.",
    funFact: "One blood donation can save up to three lives.",
    related: ["Nature Photography Day"]
  },
  {
    name: "Nature Photography Day",
    icon: "camera",
    color: "card-teal",
    date: "June 15th",
    emoji: "📸",
    description: "Celebrates the art of capturing nature's beauty.",
    howTo: "Take a photo of your favorite natural scene and share it online.",
    funFact: "Nature photography helps raise awareness about environmental issues.",
    related: ["World Environment Day"]
  },
  {
    name: "National Selfie Day",
    icon: "camera",
    color: "card-pink",
    date: "June 21st",
    emoji: "🤳",
    description: "Encourages people to take and share selfies.",
    howTo: "Snap a creative selfie and share it with friends.",
    funFact: "The first use of the word 'selfie' was in 2002.",
    related: ["National Ballpoint Pen Day"]
  },
  {
    name: "National Pink Day",
    icon: "sparkles",
    color: "card-pink",
    date: "June 23rd",
    emoji: "💖",
    description: "A fun day to wear and celebrate the color pink.",
    howTo: "Wear pink clothing or decorate with pink accessories.",
    funFact: "Pink was once considered a color for boys in the 19th century.",
    related: ["National Nail Polish Day"]
  },
  {
    name: "National Camera Day",
    icon: "camera",
    color: "card-gray",
    date: "June 29th",
    emoji: "📷",
    description: "Celebrates photography and the invention of the camera.",
    howTo: "Take photos throughout the day or learn about the history of cameras.",
    funFact: "The first photograph ever taken was in 1826.",
    related: ["Nature Photography Day"]
  }
];

// === DOMContentLoaded and Initializers ===
document.addEventListener('DOMContentLoaded', () => {
    if (typeof lucide !== 'undefined') lucide.createIcons();
    createFloatingElements();
    createCelebrationsGrid();
    addScrollAnimations();
    document.addEventListener('mousemove', parallaxEffect);

    // Fun Fact Button
    if (document.getElementById('randomFunFactBtn')) {
      document.getElementById('randomFunFactBtn').onclick = () => {
        const idx = Math.floor(Math.random() * funFacts.length);
        document.getElementById('funFactDisplay').innerText = funFacts[idx];
      };
    }

    // Trivia Quiz
    if (document.getElementById('triviaQuestion')) showTriviaQuestion();
    if (document.getElementById('nextTriviaBtn')) {
      document.getElementById('nextTriviaBtn').onclick = () => {
        currentTrivia++;
        showTriviaQuestion();
      };
    }
});

// === Trivia Quiz Logic ===
let currentTrivia = 0;
function showTriviaQuestion() {
  if (currentTrivia >= triviaQuestions.length) currentTrivia = 0;
  const q = triviaQuestions[currentTrivia];
  document.getElementById('triviaQuestion').innerText = q.question;
  document.getElementById('triviaOptions').innerHTML = '';
  document.getElementById('triviaResult').innerText = '';
  q.options.forEach(option => {
    const btn = document.createElement('button');
    btn.innerText = option;
    btn.onclick = () => {
      if (option === q.answer) {
        document.getElementById('triviaResult').innerHTML = "<span style='color:#22c55e'>Correct! 🎉</span>";
      } else {
        document.getElementById('triviaResult').innerHTML = `<span style='color:#ef4444'>Incorrect. The correct answer is "${q.answer}".</span>`;
      }
      document.getElementById('nextTriviaBtn').style.display = 'inline-block';
    };
    document.getElementById('triviaOptions').appendChild(btn);
  });
  document.getElementById('nextTriviaBtn').style.display = 'none';
}

// === Floating background elements ===
function createFloatingElements() {
    const container = document.querySelector('.floating-elements');
    if (!container) return;
    for (let i = 0; i < 8; i++) {
        const el = document.createElement('div');
        el.className = 'floating-element';
        el.style.left = Math.random() * 100 + '%';
        el.style.top = Math.random() * 100 + '%';
        el.style.animationDelay = i * 0.5 + 's';
        el.style.animationDuration = (3 + Math.random() * 4) + 's';
        container.appendChild(el);
    }
}

// === Celebrations grid ===
function createCelebrationsGrid() {
    const grid = document.getElementById('celebrationsGrid');
    if (!grid) return;
    celebrations.forEach((celebration, idx) => grid.appendChild(celebrationCard(celebration, idx)));
    if (typeof lucide !== 'undefined') lucide.createIcons();
    addCardClicks();
}

function celebrationCard(celebration, idx) {
    const card = document.createElement('div');
    card.className = 'celebration-card';
    card.style.animationDelay = (idx * 150) + 'ms';
    card.innerHTML = `
        <div class="card-content ${celebration.color}">
            <div class="card-background-effects">
                <div class="bg-effect-ping"></div>
                <div class="bg-effect-triangle"></div>
            </div>
            <div class="card-morph-shapes">
                <div class="morph-circle-1"></div>
                <div class="morph-circle-2"></div>
                <div class="morph-circle-3"></div>
            </div>
            <div class="card-particles">${cardParticles()}</div>
            <div class="card-header">
                <div class="card-icon-container">
                    <i data-lucide="${celebration.icon}" class="card-icon"></i>
                    <span class="card-emoji">${celebration.emoji}</span>
                </div>
                <span class="card-date">${celebration.date}</span>
            </div>
            <h3 class="card-title">
                ${celebration.name}<div class="card-title-underline"></div>
            </h3>
            <div class="card-description">
                <span>Tap to celebrate!</span>
                <i data-lucide="sparkles" class="card-description-icon"></i>
            </div>
            <div class="card-hover-content">
                <div class="hover-content-box">
                    <div class="hover-content-dot"></div>
                    <span>Join the celebration! 🎉</span>
                </div>
            </div>
            <div class="card-glow"></div>
        </div>
    `;
    return card;
}

function cardParticles() {
    return Array.from({length: 6}).map((_, i) => {
        const left = 20 + Math.random() * 60;
        const top = 20 + Math.random() * 60;
        const delay = i * 0.2;
        const duration = 1 + Math.random();
        return `<div class="particle" style="left:${left}%;top:${top}%;animation-delay:${delay}s;animation-duration:${duration}s;"></div>`;
    }).join('');
}

// === Card click handler - opens modal ===
function addCardClicks() {
    document.querySelectorAll('.celebration-card').forEach((card, idx) => {
        card.addEventListener('click', () => {
            card.style.transform = 'scale(0.95)';
            setTimeout(() => card.style.transform = '', 150);
            showDetailsModal(celebrations[idx]);
        });
    });
}

// === Modal logic ===
function showDetailsModal(celebration) {
    const modal = document.getElementById('celebrationModal');
    document.getElementById('modalEmoji').textContent = celebration.emoji;
    document.getElementById('modalTitle').textContent = celebration.name;
    document.getElementById('modalDate').textContent = celebration.date;
    document.getElementById('modalDescription').textContent = celebration.description || '';
    document.getElementById('modalHowTo').textContent = celebration.howTo || '';
    document.getElementById('modalFunFact').textContent = celebration.funFact || '';
    const relatedList = document.getElementById('modalRelated');
    relatedList.innerHTML = '';
    if (celebration.related && celebration.related.length) {
        celebration.related.forEach(name => {
            const li = document.createElement('li');
            li.textContent = name;
            li.className = 'related-link';
            li.style.cursor = 'pointer';
            li.onclick = () => {
                const rel = celebrations.find(c => c.name === name);
                if (rel) showDetailsModal(rel);
            };
            relatedList.appendChild(li);
        });
        document.getElementById('modalRelatedSection').style.display = '';
    } else {
        document.getElementById('modalRelatedSection').style.display = 'none';
    }
    // Share buttons
    const url = window.location.origin + window.location.pathname + `#${encodeURIComponent(celebration.name.replace(/\s+/g, '-'))}`;
    document.getElementById('shareCopy').onclick = () => {
        navigator.clipboard.writeText(url);
        document.getElementById('shareCopy').textContent = 'Copied!';
        setTimeout(()=>{document.getElementById('shareCopy').textContent='Copy Link';},1200);
    };
    document.getElementById('shareTwitter').href =
        `https://twitter.com/intent/tweet?text=I'm%20celebrating%20${encodeURIComponent(celebration.name)}!%20${encodeURIComponent(url)}`;
    document.getElementById('shareWhatsApp').href =
        `https://wa.me/?text=I'm celebrating ${encodeURIComponent(celebration.name)}! ${encodeURIComponent(url)}`;
    modal.classList.add('active');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}
function closeModal() {
    const modal = document.getElementById('celebrationModal');
    modal.classList.remove('active');
    modal.style.display = 'none';
    document.body.style.overflow = '';
}
document.getElementById('modalCloseBtn').onclick = closeModal;
document.querySelector('.modal-backdrop').onclick = closeModal;
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// === Animate on scroll ===
function addScrollAnimations() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => entry.isIntersecting && (entry.target.style.animationPlayState = 'running'));
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('[class*="animate-"], .celebration-card').forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
}
// === Parallax mouse move ===
function parallaxEffect(e) {
    const x = e.clientX / window.innerWidth, y = e.clientY / window.innerHeight;
    document.querySelectorAll('.floating-element').forEach((el, idx) => {
        const speed = (idx + 1) * 0.5;
        el.style.transform = `translate(${(x - 0.5) * speed}px, ${(y - 0.5) * speed}px)`;
    });
}

// === Add fadeOut animation (for popup) ===
document.head.insertAdjacentHTML("beforeend", `
    <style>
    @keyframes fadeOut {0%{opacity:1;transform:translateY(0);}100%{opacity:0;transform:translateY(-20px);}}
    </style>
`);