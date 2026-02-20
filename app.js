const greetings = [
    "Hello, World!",
    "Welcome!",
    "Good Day!",
    "Greetings!",
    "Hi There!"
];

let currentIndex = 0;

const greetingElement = document.getElementById('greeting');
const changeBtn = document.getElementById('changeBtn');

changeBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % greetings.length;
    greetingElement.textContent = greetings[currentIndex];
    greetingElement.style.color = getRandomColor();
});

function getRandomColor() {
    const colors = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#43e97b'];
    return colors[Math.floor(Math.random() * colors.length)];
}