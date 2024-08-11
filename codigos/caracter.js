function verificador_de_caracter(){
    const caracter = document.getElementById('caracter').value;
    let entradas = caracter.toLowerCase();

    const caracteresEspeciais = `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \\ ] ^ _ \` { | } ~`;
    const resultado = document.getElementById('resultado_caracter');

    if(entradas === 'a' || entradas === 'e' || entradas === 'i' || entradas === 'o' || entradas === 'u'){
        resultado.textContent = `${true}. O caracter "${caracter}" é uma vogal`;
    } else if(entradas=="0"||entradas=='1'||entradas=='2'||entradas=='3'||entradas=='4'||entradas=='5'||entradas=='6'||entradas=='7'||entradas=='8'||entradas=='9'){
        resultado.textContent = `${false}. O caracter "${caracter}" é um número`;
    } else if(caracteresEspeciais.includes(entradas)){
        resultado.textContent = `${false}. O caracter "${caracter}" é um caracter especial`;
    }else{
        resultado.textContent = `${false}. O caracter "${caracter}" é uma caracter consoante`;
    }
    
    limpar_caracter();
}

function limpar_caracter(){
    document.getElementById('caracter').value ="";
}
