



/*Primeiro exercício 5 números mostrar como resultado o maior e menor número entre os números mostrados*/
function coletar_dados() {
    
    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const numero3 = parseFloat(document.getElementById('numero3').value);
    const numero4 = parseFloat(document.getElementById('numero4').value);
    const numero5 = parseFloat(document.getElementById('numero5').value);

    
    const valores = [numero1, numero2, numero3, numero4, numero5];
    
    const valoresValidos = valores.filter(valor => !isNaN(valor));
    
    const maior = Math.max(...valoresValidos);
    const menor = Math.min(...valoresValidos);

    const resultado = document.getElementById('resultado');
    
    resultado.textContent = `Maior: ${maior}, Menor: ${menor}`;

    limpar_inputs();

}

function limpar_inputs() {
    document.getElementById('numero1').value = '';
    document.getElementById('numero2').value = '';
    document.getElementById('numero3').value = '';
    document.getElementById('numero4').value = '';
    document.getElementById('numero5').value = '';
    
}