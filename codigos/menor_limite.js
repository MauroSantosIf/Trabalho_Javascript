document.getElementById('intervalo_dados').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário para processamento via JavaScript

    const menor_limite = parseInt(document.getElementById('menor_limite').value);
    const maior_valor = parseInt(document.getElementById('maior_valor').value);
    const mostrar_resultados = document.getElementById('resultados_pares');

    // verificamos os limites de entrada 
    if (isNaN(menor_limite) || isNaN(maior_valor) || menor_limite >= maior_valor) {
        mostrar_resultados.innerHTML = '<div class="alert alert-danger">Por favor, insira limites válidos. O limite inferior deve ser menor que o limite superior.</div>';
        return;
    }

    function mostrar_numeros_pares(menor, maior) {
        let numeros_pares = [];
        let soma = 0;

        for (let i = menor; i <= maior; i++) {
            if (i % 2 === 0) {
                numeros_pares.push(i);
                soma += i;
            }
        }

        return { numeros_pares, soma };
    }

    const { numeros_pares, soma } = mostrar_numeros_pares(menor_limite, maior_valor);

    let mostrar_resultado_html = '<h4>Números Pares:</h4>';
    mostrar_resultado_html += '<p>' + numeros_pares.join(', ') + '</p>';
    mostrar_resultado_html += '<h4>Soma dos Números Pares:</h4>';
    mostrar_resultado_html += '<p>' + soma + '</p>';

    mostrar_resultados.innerHTML = mostrar_resultado_html;
});