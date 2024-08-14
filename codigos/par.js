function verificar_par_impar() {
    const entrada = document.getElementById('par_ou_impar').value;
    const resultados_impares_pares = document.getElementById('resultados_impares_pares');
    
    
    const valor = parseFloat(entrada);
    
    if (isNaN(valor) || valor % 1 !== 0) {
        resultados_impares_pares.innerHTML = '<br> <div class="alert  alert-danger">Por favor, insira um valor inteiro válido.</div>';
    } else {
        
        if (valor % 2 === 0) {
            '<br>';
            resultados_impares_pares.innerHTML= `True. O número ${valor} é par`;
        } else {
            '<br>';
            resultados_impares_pares.innerHTML = `False. O número ${valor} é ímpar`;
        }
        limpar_pares();
    }

}

function limpar_pares() {
    document.getElementById('par_ou_impar').value = '';
    
}