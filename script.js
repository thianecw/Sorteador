document.addEventListener("DOMContentLoaded", function() {
    const inputMin = document.querySelector(".input-min");
    const inputMax = document.querySelector(".input-max");
    const alertResult = document.getElementById("alert-result");

    function clearResult() {
        alertResult.style.display = 'none';
        alertResult.innerText = '';
    }

    inputMin.addEventListener("input", clearResult);
    inputMax.addEventListener("input", clearResult);
});

function generatenumber() {
    const min = Math.ceil(parseFloat(document.querySelector(".input-min").value));
    const max = Math.floor(parseFloat(document.querySelector(".input-max").value));
    const alertMessage = document.getElementById("alert-message");
    const alertResult = document.getElementById("alert-result");

    if (isNaN(min) || isNaN(max) || min >= max) {
        alertMessage.style.display = 'block';
        alertResult.style.display = 'none'; // Ocultar resultado anterior se houver erro
        return;
    } else {
        alertMessage.style.display = 'none';
        const result = Math.floor(Math.random() * (max - min + 1) + min); // O máximo é inclusivo e o mínimo é inclusivo
        alertResult.innerText = `Número sorteado: ${result}`;
        alertResult.style.display = 'block';
    }

    inputMax.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            generatenumber();
        }
    })
}

