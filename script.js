var container = document.querySelector('.container');
var copyBtn = document.querySelector('.copy');
var cssCode = document.getElementById('css-code');
var firstInput = document.getElementById('first-input');
var secondInput = document.getElementById('second-input');
var thirdInput = document.getElementById('third-input');
var fourthInput = document.getElementById('fourth-input');

firstInput.addEventListener('input', () => {
    container.style.borderRadius = `${firstInput.value}px ${thirdInput.value}px ${fourthInput.value}px ${secondInput.value}px`;
    cssCode.value = `border-radius: ${container.style.borderRadius}`;
})

secondInput.addEventListener('input', () => {
    container.style.borderRadius = `${firstInput.value}px ${thirdInput.value}px ${fourthInput.value}px ${secondInput.value}px`;
    cssCode.value = `border-radius: ${container.style.borderRadius}`;
})

thirdInput.addEventListener('input', () => {
    container.style.borderRadius = `${firstInput.value}px ${thirdInput.value}px ${fourthInput.value}px ${secondInput.value}px`;
    cssCode.value = `border-radius: ${container.style.borderRadius}`;
})

fourthInput.addEventListener('input', () => {
    container.style.borderRadius = `${firstInput.value}px ${thirdInput.value}px ${fourthInput.value}px ${secondInput.value}px`;
    cssCode.value = `border-radius: ${container.style.borderRadius}`;
})

copyBtn.addEventListener('click', (event) => {
    cssCode.select();
    navigator.clipboard.writeText(`${cssCode.value};`);
    alert(`Скопирован CSS-код: ${cssCode.value};`)
})