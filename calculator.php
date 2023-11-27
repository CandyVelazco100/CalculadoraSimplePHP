<?php
if (isset($_GET['operation']) && isset($_GET['number'])) {
    $operation = $_GET['operation'];
    $number = (int)$_GET['number'];

    switch ($operation) {
        case 'sum':
            $result = array_sum(range(1, $number));
            break;

        case 'fib':
            $result = fibonacci($number);
            break;

        case 'factorial':
            $result = factorial($number);
            break;

        default:
            $result = 'Operación no válida.';
            break;
    }
    echo $result;
}

function fibonacci($n) {
    if ($n <= 1) {
        return $n;
    } else {
        return fibonacci($n - 1) + fibonacci($n - 2);
    }
}

function factorial($n) {
    if ($n <= 1) {
        return 1;
    } else {
        return $n * factorial($n - 1);
    }
}
?>