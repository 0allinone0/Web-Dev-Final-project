const hero = document.querySelector('.hero');
const heroText = document.getElementById('heroText');

// Array of images and text
const slides = [
  { img: '../images/dinning.jpg', text: 'Enjoy Food,<br>with friends.' },
  { img: '../images/football_pic.jpg', text: 'Keep your body healthy,<br>with lifelong friends.' },
  { img: '../images/homecoming_logo.jpg', text: 'Your journey starts<br>right here.' }
];

let current = 0;

// Function to update the hero section
function updateHero() {
  hero.style.backgroundImage = `url('${slides[current].img}')`;
  heroText.innerHTML = slides[current].text;
}

// Buttons for navigation
document.getElementById('next').addEventListener('click', () => {
  current = (current + 1) % slides.length;
  updateHero();
});

document.getElementById('prev').addEventListener('click', () => {
  current = (current - 1 + slides.length) % slides.length;
  updateHero();
});

// Optional: automatically change image every 5 seconds
setInterval(() => {
  current = (current + 1) % slides.length;
  updateHero();
}, 5000);

