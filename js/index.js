'use strict'

const refs = {
controls: document.querySelector('.controls'),
fruits: document.querySelector('.fruits'),
}

refs.controls.addEventListener('click', function (e) {

    if(e.target.nodeName !== 'A'){
        return
    }

    const control = e.target;

    const currentActiveControl = document.querySelector('.control--active');

    if(currentActiveControl){
        currentActiveControl.classList.remove('control--active');

        const fruitId = currentActiveControl.getAttribute('href').slice(1);

        const fruit = document.querySelector(`#${fruitId}`);
    
        fruit.classList.remove('visible')
    }

    control.classList.add('control--active')

    const fruitId = control.getAttribute('href').slice(1);

    const fruit = refs.fruits.querySelector(`#${fruitId}`);

    fruit.classList.add('visible')
    
});

