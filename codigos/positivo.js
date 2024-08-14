function verificar_posit_neg(){
    let valor = parseFloat(document.getElementById('positivo_negativo').value);
    const resultado = document.getElementById('resultado_positivo_negativo');
    if(valor >= 0){
        resultado.innerHTML = `True. O número ${valor} é positivo`;
    }else{
        resultado.innerHTML = `False. O número ${valor} é negativo`;
    }

    limpar_positivos();
}
function limpar_positivos() {
    document.getElementById('positivo_negativo').value = '';
    
}