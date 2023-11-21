const upBtn = document.querySelector('.up-btn');
const downBtn = document.querySelector('.down-btn');
const leftBlock = document.querySelector('.left-block');
const rightBlock = document.querySelector('.right-block');
const countSlide = rightBlock.querySelectorAll('div').length;
const container = document.querySelector('.container');

let activeSlidesIndex = 0

leftBlock.style.top = `-${(countSlide - 1) * 100}vh`;

upBtn.addEventListener('click', () => {
    clickSlider('up');
})

downBtn.addEventListener('click', () => {
    clickSlider('down');
})

function clickSlider(desc) {
    if (desc === 'up') {
        activeSlidesIndex++
        if (activeSlidesIndex === countSlide) {
            activeSlidesIndex = 0
        }


    } else if (desc === 'down') {
        activeSlidesIndex--;
        if (activeSlidesIndex < 0) {
            activeSlidesIndex = countSlide - 1;
        }
    }

    const height = container.clientHeight;

    rightBlock.style.transform = `translateY(-${activeSlidesIndex * height}px)`;
    leftBlock.style.transform = `translateY(${activeSlidesIndex * height}px)`;
}


