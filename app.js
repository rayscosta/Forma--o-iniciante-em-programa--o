alert('Bem vindo ao jogo do número secreto');]
let limite = 100;
let numeroSecreto = parseInt(Math.random() * limite + 1, 10);
let tentativas = 1;
while (true) {
    let chute = prompt(`Escolha um número entre 1 e ${limite}`);
    if (chute == numeroSecreto) {
        break;
    } else {
        tentativas++;
        if (numeroSecreto > chute) {
            alert(`O número secreto é maior que ${chute}`);
        } else {
            alert(`O número secreto é menor que ${chute}`);
        }
    }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Você acertou!!! O número secreto é ${numeroSecreto}. Você usou ${tentativas} ${palavraTentativa}`);
