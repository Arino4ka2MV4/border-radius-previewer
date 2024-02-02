var container = document.querySelector('.container');
var applyBtn = document.querySelector('.apply');
var copyBtn = document.querySelector('.copy');
var cssCode = document.getElementById('css-code');
var firstInput = document.getElementById('first-input');
var secondInput = document.getElementById('second-input');
var thirdInput = document.getElementById('third-input');
var fourthInput = document.getElementById('fourth-input');

applyBtn.addEventListener('click', (event) => {
    container.style.borderRadius = `${firstInput.value}px ${thirdInput.value}px ${fourthInput.value}px ${secondInput.value}px`;
    cssCode.value = `border-radius: ${container.style.borderRadius}`;
})

copyBtn.addEventListener('click', (event) => {
    cssCode.select();
    navigator.clipboard.writeText(`${cssCode.value};`);
    alert(`Скопирован CSS-код: ${cssCode.value};`)
})