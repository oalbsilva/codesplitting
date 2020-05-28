function component(frase) {
    const element = document.createElement('div');

    element.innerHTML = frase;

    return element;
}

document.body.appendChild(component('Hello Webpack!'));