
const emailInput = document.querySelector('.hero-buttons input');
const getStartedBtn = document.querySelector('.hero-buttons .btn-red');

getStartedBtn.addEventListener('click', () => {
  const email = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === '') {
    alert('Please enter your email address.');
  } else if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
  } else {
    alert(`Thank you! We received: ${email}`);
  }
});
const languageBtn = document.querySelector('.language-btn');
const languageOptions = document.querySelector('.language-options');

languageBtn.addEventListener('click', (e) => {
  e.stopPropagation(); 
  languageOptions.classList.toggle('show');
});

document.addEventListener('click', () => {
  languageOptions.classList.remove('show');
});

const languageItems = document.querySelectorAll('.language-options div');

languageItems.forEach(item => {
  item.addEventListener('click', () => {
    languageBtn.textContent = `${item.textContent} ▾`;
    alert(`Language switched to: ${item.textContent}`);
    languageOptions.classList.remove('show');
  });
});
