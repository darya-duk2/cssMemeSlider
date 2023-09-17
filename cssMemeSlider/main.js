'use strict'

const slider = document.querySelector('.slider-div');
const oneSlide = document.querySelector('.one-slide-div');
const images = document.querySelectorAll('img');
const buttons = document.querySelectorAll('.pag-button');

let sliderSize;
let index = 0;
let buttonIndex = 0;

function updateSlider() {
    sliderSize = slider.offsetWidth;
    oneSlide.style.width = sliderSize * images.length + 'px';
    images.forEach(mem => mem.style.width = sliderSize + 'px');
    oneSlide.style.transform = `translateX(${-buttonIndex * sliderSize}px)`;
};

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        sliderSize = slider.offsetWidth;
        buttonIndex = index;
        oneSlide.style.transform = `translateX(${-index * sliderSize}px)`;
        }
    );
});

function disableButton(index) {
    for (let button of buttons) {
        button.removeAttribute('disabled', '');
    };
    index = buttonIndex;
    buttons[index].setAttribute('disabled', '');
};

window.addEventListener('load', updateSlider);
window.addEventListener('resize', updateSlider);

for (let button of buttons) {
    button.addEventListener('click', disableButton);
};