document.getElementById('churrasco-form').addEventListener('submit', function(event) {
    event.preventDefault();

    calcular();
});

function calcular() {
    const homens = parseInt(document.getElementById('homens').value) || 0;
    const mulheres = parseInt(document.getElementById('mulheres').value) || 0;
    const criancas = parseInt(document.getElementById('criancas').value) || 0;

    const carneHomem = 500;
    const carneMulher = 300;
    const carneCrianca = 200;
    const frangoHomem = 200;
    const frangoMulher = 200;
    const frangoCrianca = 100;
    const linguicaHomem = 200;
    const linguicaMulher = 200;
    const linguicaCrianca = 200;
    const refrigeranteHomem = 300;
    const refrigeranteMulher = 400;
    const refrigeranteCrianca = 200;
    const cervejaHomem = 800;
    const cervejaMulher = 500;
    const cervejaCrianca = 0;

    const totalCarne = (homens * carneHomem) + (mulheres * carneMulher) + (criancas * carneCrianca);
    const totalFrango = (homens * frangoHomem) + (mulheres * frangoMulher) + (criancas * frangoCrianca);
    const totalLinguica = (homens * linguicaHomem) + (mulheres * linguicaMulher) + (criancas * linguicaCrianca);
    const totalRefrigerante = (homens * refrigeranteHomem) + (mulheres * refrigeranteMulher) + (criancas * refrigeranteCrianca);
    const totalCerveja = (homens * cervejaHomem) + (mulheres * cervejaMulher) + (criancas * cervejaCrianca);

    const totalCarneKg = totalCarne / 1000;
    const totalFrangoKg = totalFrango / 1000;
    const totalLinguicaKg = totalLinguica / 1000;
    const totalRefrigeranteL = totalRefrigerante / 1000;
    const totalCervejaL = totalCerveja / 1000;

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `
        <ul>
            <li>${totalCarneKg.toFixed(2)} kg <strong>de carne bovina</strong><br></li>
            <li>${totalFrangoKg.toFixed(2)} kg <strong>de frango</strong><br></li>
            <li>${totalLinguicaKg.toFixed(2)} kg <strong>de linguiça</strong><br></li>
            <li>${totalRefrigeranteL.toFixed(2)} l <strong>de refrigerante</strong><br></li>
            <li>${totalCervejaL.toFixed(2)} l <strong>de cerveja</strong></li>
        </ul>
    `;

    document.querySelector('.resultado-container').style.display = 'block';
}