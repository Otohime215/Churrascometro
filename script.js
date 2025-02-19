// Carne - gr por pessoa + de 6 horas - 650
// Cerveja - 1200ml por pessoa + 6 horas - 2000ml
// Refrigerante/agua - 1000ml por pessoa + 6 horas - 1500ml
//crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado");


function calcular() {
    console.log("Calculando...");

    // Adicionado parseInt() para converter os valores dos inputs em números e tendo o valor padrão de "0" em campos vazios.
    let adultos = parseInt(inputAdultos.value) || 0;
    let criancas = parseInt(inputCriancas.value) || 0;
    let duracao = parseInt(inputDuracao.value) || 0;


    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

    document.getElementById("botao").addEventListener("click", calcular);

    resultado.innerHTML = `<p>${qtdTotalCarne / 1000} kg de Carne</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} Latas de Cerveja</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas / 2000)} Pet's de 2L de Bebida</p>`;
}

// funções para realizar o cálculo da quantidade dos itens para o churrasco, sendo realizado o calculo para eventos com duração menor que 6h a base de calculos dos valores mínimos.
function carnePP(duracao) {
    return duracao >= 6 ? 650 : 400;
}

function cervejaPP(duracao) {
    return duracao >= 6 ? 2000 : 1200;
}

function bebidasPP(duracao) {
    return duracao >= 6 ? 1500 : 1000;
}


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("botao").addEventListener("click", calcular);
});


