const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const exit = document.querySelector('.close');

button.addEventListener('click', () => {
    popup.style.display = 'block';
});

exit.addEventListener('click', () => {
    popup.style.display = 'none';
});

