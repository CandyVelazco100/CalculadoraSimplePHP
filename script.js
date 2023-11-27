function calculate(operation) {
    var number = document.getElementById('number').value;

    if (number === '') {
        alert('Por favor, ingrese un número.');
        return;
    }

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('result').innerHTML = this.responseText;
        }
    };

    if (operation === 'sum') {
        xhr.open('GET', 'calculator.php?operation=sum&number=' + number, true);
    } else if (operation === 'fib') {
        xhr.open('GET', 'calculator.php?operation=fib&number=' + number, true);
    } else if (operation === 'factorial') {
        xhr.open('GET', 'calculator.php?operation=factorial&number=' + number, true);
    }
    xhr.send();
}

function calculateAll() {
    var number = document.getElementById('number').value;

    if (number === '') {
        alert('Por favor, ingrese un número.');
        return;
    }

    var xhrSum = new XMLHttpRequest();
    var xhrFib = new XMLHttpRequest();
    var xhrFactorial = new XMLHttpRequest();

    xhrSum.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('result').innerHTML = "";
            document.getElementById('resultSum').innerHTML = 'Sumatoria: ' + this.responseText;
        }
    };

    xhrFib.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('resultFib').innerHTML = 'Fibonacci: ' + this.responseText;
        }
    };

    xhrFactorial.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('resultFactorial').innerHTML = 'Factorial: ' + this.responseText;
        }
    };

    xhrSum.open('GET', 'calculator.php?operation=sum&number=' + number, true);
    xhrSum.send();

    xhrFib.open('GET', 'calculator.php?operation=fib&number=' + number, true);
    xhrFib.send();

    xhrFactorial.open('GET', 'calculator.php?operation=factorial&number=' + number, true);
    xhrFactorial.send();
}