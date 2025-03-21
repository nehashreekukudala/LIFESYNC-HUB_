// Quotes Array
const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
    "Your time is limited, don't waste it living someone else's life. – Steve Jobs",
    "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
];

// Affirmations Array
const affirmations = [
    "I am capable of achieving my goals.",
    "I am worthy of success and happiness.",
    "I am confident in my abilities.",
    "I am resilient and strong.",
    "I am constantly growing and improving.",
];


// Get DOM Elements
const quoteText = document.getElementById('quote-text');
const affirmationText = document.getElementById('affirmation-text');
const videoFrame = document.getElementById('video-frame');
const quoteBtn = document.getElementById('quote-btn');
const affirmationBtn = document.getElementById('affirmation-btn');
const videoBtn = document.getElementById('video-btn');

// Display Random Quote
quoteBtn.addEventListener('click', () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteText.textContent = randomQuote;
    quoteText.style.display = 'block';
    affirmationText.style.display = 'none';
    videoFrame.style.display = 'none';
});

// Display Random Affirmation
affirmationBtn.addEventListener('click', () => {
    const randomAffirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
    affirmationText.textContent = randomAffirmation;
    affirmationText.style.display = 'block';
    quoteText.style.display = 'none';
    videoFrame.style.display = 'none';
});

// Display Random Motivational Video
videoBtn.addEventListener('click', () => {
    const randomVideo = videos[Math.floor(Math.random() * videos.length)];
    videoFrame.src = randomVideo;
    videoFrame.style.display = 'block';
    quoteText.style.display = 'none';
    affirmationText.style.display = 'none';
});