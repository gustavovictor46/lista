let salário = 2030;
let valorDescontado1 = (salário * desconto1);
let valorDescontado2 = (salário * desconto2);
let desconto1 = 0.10;
let desconto2 = 0.05;

if (salário >2000) {
    console.log(`O valor a ser descontado é de ${valorDescontado1}reais`);
} else{
    console.log(`O valor a ser descontado é de ${salário * 0.05 - salário} reais`)
}
