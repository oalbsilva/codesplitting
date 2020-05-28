const lodash = require('lodash');

function component(frase) {
    const element = document.createElement('div');

    element.innerHTML = frase;

    return element;
}

document.body.appendChild(component('This is a form with webpack! '+ lodash));