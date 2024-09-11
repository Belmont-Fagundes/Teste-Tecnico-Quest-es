// Função para contar a ocorrência de 'a' e 'A' na string
function countLetterA(str) {
    let count = 0;
    
    // Itera pela string e conta quantas vezes 'a' ou 'A' aparecem
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'A') {
            count++;
        }
    }

    if (count > 0) {
        return `A letra 'a' ocorre ${count} vezes na string.`;
    } else {
        return `A letra 'a' não está presente na string.`;
    }
}

// Aqui define-se a string manualmente ou pedir a entrada do usuário
const inputString = "Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre";

// Exibe o resultado
console.log(countLetterA(inputString));
