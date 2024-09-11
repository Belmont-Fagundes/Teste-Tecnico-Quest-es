// Função para gerar a sequência de Fibonacci até o número informado
function fibonacciSequence(num) {
    let fib = [0, 1];
    
    // Gera a sequência de Fibonacci até que o último número seja maior ou igual ao número informado
    while (fib[fib.length - 1] < num) {
        const nextFib = fib[fib.length - 1] + fib[fib.length - 2];
        fib.push(nextFib);
    }

    return fib;
}

// Função para verificar se o número pertence à sequência de Fibonacci
function isFibonacci(num) {
    const fibSeq = fibonacciSequence(num);
    
    // Verifica se o número está na sequência gerada
    if (fibSeq.includes(num)) {
        return `O número ${num} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${num} não pertence à sequência de Fibonacci.`;
    }
}


const inputNumber = 21; // Defina o número desejado


console.log(isFibonacci(inputNumber));
