/*Primeiro exercício 5 números mostrar como resultado o maior e menor número entre os números mostrados*/
function coletar_dados() {
    
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const numero3 = parseFloat(document.getElementById('numero3').value);
    const numero4 = parseFloat(document.getElementById('numero4').value);
    const numero5 = parseFloat(document.getElementById('numero5').value);
    console.log(numero1);

    const valores = [numero1, numero2, numero3, numero4, numero5];
    
    const maior = Math.max(...valores);
    const menor = Math.min(...valores);

    console.log(numero1)
    
    // Selecionar o elemento onde o resultado será exibido
    const resultado = document.getElementById('resultado');
    
    // Exibir o maior e o menor número
    resultado.textContent = `Maior: ${maior}, Menor: ${menor}`;

    limpar_inputs();
}

function limpar_inputs() {
    // Selecionar todos os inputs no formulário
    const inputs = document.querySelectorAll('#meu_formulario input');
    
    // Limpar o valor de cada input
    inputs.forEach(input => {
        input.value = '';
    });
}