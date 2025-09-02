function calcular() {
    const dolares = parseFloat(document.getElementById('dolares').value);
    const bolivaresOfrecidos = parseFloat(document.getElementById('bolivares').value);
    const tasaParalela = parseFloat(document.getElementById('tasa').value);

    const resultadoDiv = document.getElementById('resultado');

    if (isNaN(dolares) || isNaN(bolivaresOfrecidos) || isNaN(tasaParalela)) {
        resultadoDiv.innerHTML = 'Por favor, ingrese todos los valores válidos.';
        resultadoDiv.className = 'resultado';
        return;
    }

    const valorDivisasEnBolivares = dolares * tasaParalela;
    let mensaje = '';
    let clase = '';

    if (bolivaresOfrecidos < valorDivisasEnBolivares) {
        const sobranteBs = valorDivisasEnBolivares - bolivaresOfrecidos;
        const sobranteDivisas = sobranteBs / tasaParalela;
        mensaje = `
            <p><strong>✅ ¡Mejor pagar en Bolívares!</strong></p>
            <p>Si vendes tus divisas, obtendrás <strong>Bs ${valorDivisasEnBolivares.toFixed(2)}</strong>. Como el precio en bolívares del producto es de <strong>Bs ${bolivaresOfrecidos.toFixed(2)}</strong>, te sobrarán <strong>Bs ${sobranteBs.toFixed(2)}</strong>.</p>
            <p>Este sobrante equivale a <strong>$${sobranteDivisas.toFixed(2)}</strong>.</p>
        `;
        clase = 'resultado mejor-bolivares';
    } else {
        const ahorroPorDolar = bolivaresOfrecidos / dolares;
        mensaje = `
            <p><strong>🔴 ¡Mejor pagar en Divisas!</strong></p>
            <p>Si pagas con tus divisas directamente, el comercio te está ofreciendo una tasa implícita de <strong>Bs ${ahorroPorDolar.toFixed(2)}</strong> por dólar, que es mayor que la tasa que proporcionaste de <strong>Bs ${tasaParalela.toFixed(2)}</strong>. Al pagar en divisas, tus dólares valen más para esta transacción.</p>
        `;
        clase = 'resultado mejor-dolares';
    }

    resultadoDiv.innerHTML = mensaje;
    resultadoDiv.className = clase;
}

function clearInputs() {
    document.getElementById('dolares').value = '';
    document.getElementById('bolivares').value = '';
    document.getElementById('tasa').value = '';
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('resultado').className = 'resultado';
}
