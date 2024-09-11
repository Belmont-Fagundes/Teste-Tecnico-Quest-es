// Função para encontrar o próximo elemento da sequência
function nextElement(sequence) {
    // a) Sequência de números ímpares consecutivos
    if (sequence.length > 1 && sequence.every((val, i) => i === 0 || val === sequence[i - 1] + 2)) {
        return sequence[sequence.length - 1] + 2;
    }

    // b) Sequência de potências de 2
    if (sequence.every((val, i) => val === Math.pow(2, i + 1))) {
        return Math.pow(2, sequence.length + 1);
    }

    // c) Sequência de quadrados de números inteiros
    if (sequence.every((val, i) => val === i * i)) {
        return (sequence.length) * (sequence.length);
    }

    // d) Sequência de quadrados de números pares
    if (sequence.every((val, i) => val === (2 * (i + 1)) ** 2)) {
        return (2 * (sequence.length + 1)) ** 2;
    }

    // e) Sequência de Fibonacci
    if (sequence.length > 2 && sequence.every((val, i) => i === 0 || i === 1 || val === sequence[i - 1] + sequence[i - 2])) {
        return sequence[sequence.length - 1] + sequence[sequence.length - 2];
    }

    // f) Sequência contínua com saltos (especialmente para a sequência fornecida)
    if (sequence.length > 1) {
        const lastElement = sequence[sequence.length - 1];
        const nextElement = lastElement + 1;
        
        // Verifica se o próximo número é válido na sequência observada
        if (sequence.includes(nextElement)) {
            return nextElement + 1; // Caso o próximo número seja repetido, salta para o próximo
        }
        
        return nextElement;
    }

    return null;
}

// Sequências fornecidas
const sequences = [
    [1, 3, 5, 7],     // a
    [2, 4, 8, 16, 32, 64], // b
    [0, 1, 4, 9, 16, 25, 36], // c
    [4, 16, 36, 64],  // d
    [1, 1, 2, 3, 5, 8], // e
    [2, 10, 12, 16, 17, 18, 19] // f
];

// Calcula e exibe o próximo elemento para cada sequência
sequences.forEach((seq, index) => {
    console.log(`Próximo elemento para a sequência ${String.fromCharCode(97 + index)}: ${nextElement(seq)}`);
});
