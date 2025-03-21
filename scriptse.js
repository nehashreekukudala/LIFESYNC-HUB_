// Quotes Array
const quotes = [
    "Peace begins with a smile. – Mother Teresa",
    "In the midst of movement and chaos, keep stillness inside of you. – Deepak Chopra",
    "The present moment is filled with joy and happiness. If you are attentive, you will see it. – Thich Nhat Hanh",
    "Calm mind brings inner strength and self-confidence. – Dalai Lama",
    "Nature does not hurry, yet everything is accomplished. – Lao Tzu",
];

// Get DOM Elements
const quoteText = document.getElementById('quote-text');
const quoteBtn = document.getElementById('quote-btn');
const meditationBtn = document.getElementById('meditation-btn');
const meditationGuide = document.getElementById('meditation-guide');
const closeGuideBtn = document.getElementById('close-guide-btn');

// Display Random Quote
quoteBtn.addEventListener('click', () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteText.textContent = randomQuote;
});

// Show Meditation Guide
meditationBtn.addEventListener('click', () => {
    meditationGuide.style.display = 'block';
});

// Hide Meditation Guide
closeGuideBtn.addEventListener('click', () => {
    meditationGuide.style.display = 'none';
});