function component(frase) {
    const element = document.createElement('div');

    element.innerHTML = frase;

    return element;
}

const CONDICAO_FUNCIONARIO = true;

if (CONDICAO_FUNCIONARIO) {
    import(
        /* webpackChunkName: "funcionario" */
        './funcionario'
    ).then(funcionario => {
        document.body.appendChild(component(funcionario.default()));
    });
} else {
    import(
        /* webpackChunkName: "administrador" */
        './administrador'
    ).then(administrador => {
        document.body.appendChild(component(administrador.default()));
    });
}
