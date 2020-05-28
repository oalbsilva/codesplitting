const funcionario = require('./funcionario');
const administrador = require('./administrador');

function component(frase) {
    const element = document.createElement('div');

    element.innerHTML = frase;

    return element;
}

const CONDICAO_FUNCIONARIO = true;

if (CONDICAO_FUNCIONARIO) {
    document.body.appendChild(component(funcionario.default()));
} else {
    document.body.appendChild(component(administrador.default()));
}
