'use strict'

const slider = document.querySelector('.slider-div');
const oneSlide = document.querySelector('.one-slide-div');
const images = document.querySelectorAll('img');
const buttons = document.querySelectorAll('button');

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

document.addEventListener('DOMContentLoaded', updateSlider);
window.addEventListener('resize', updateSlider);

for (let button of buttons) {
    button.addEventListener('click', disableButton);
};

// make text visible for a mem
const paragraphs = document.querySelectorAll('.text-p');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', ( event ) => {
        for (let x = 0; x < paragraphs.length; x++) {
            paragraphs[x].classList.remove('active');
        };
        paragraphs[i].classList.add('active');
    });
};