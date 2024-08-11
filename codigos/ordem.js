function ordenador() {
    let valor1 = parseFloat(document.getElementById('valor1').value);
    let valor2 = parseFloat(document.getElementById('valor2').value);
    let valor3 = parseFloat(document.getElementById('valor3').value);
    
    const listar_valores = [valor1, valor2, valor3];


    listar_valores.sort((a, b) => a - b);

    
    let mostrar_ordem = '<h4>Números ordenados</h4>';
    mostrar_ordem += '<p>' + listar_valores.join(' - ') + '</p>';

    
    document.getElementById('resultado_ordenado').innerHTML = mostrar_ordem;

    limpar_ordem();
}

function limpar_ordem() {
    document.getElementById('valor1').value = "";
    document.getElementById('valor2').value = "";
    document.getElementById('valor3').value = "";
}