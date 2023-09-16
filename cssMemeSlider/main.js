'use strict'

const slider = document.querySelector('.one-slide-div');
const buttons = document.querySelectorAll('.pag-button');
const slideSize = 475;

let offset = 0;
let buttonIndex = 0;

function updateSlider() {
    if (offset > - ((buttons.length -1) * slideSize)) {
        offset -= slideSize;
        slider.style.left = offset + 'px';
        buttonIndex++;
        index = buttonIndex;
    };
};

function returnSlider() {
    if (offset < 0) {
        offset += slideSize;
        slider.style.left = offset + 'px';
        buttonIndex--;
        index = buttonIndex;
    };
};

function disableButton(index) {
    for (let button of buttons) {
        button.removeAttribute('disabled', '');
    };
    index = buttonIndex;
    buttons[index].setAttribute('disabled', '');
};

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        offset = - slideSize * index;
        slider.style.left = offset + 'px';
        buttonIndex = index;
        }
    );
});

for (let button of buttons) {
    button.addEventListener('click', disableButton);
};