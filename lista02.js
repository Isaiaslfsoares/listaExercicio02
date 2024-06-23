const prompt = require('prompt-sync')();

/*Ex. 1: Escreva um programa para calcular a redução do tempo de vida de um fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de vida um fumante perderá e exiba o total em dias. */

// let cigFumados = parseInt(prompt("Quantos cigarros você fuma por dia?"));
// let diasFumados = (parseInt(prompt("Há quantos anos você fuma?"))*365);
// let diasPerdidos = Math.round(((10*cigFumados)*(diasFumados))/1440);
// console.log(`Expectativa de vida diminuída em ${diasPerdidos} dias.`);

/*Ex. 2: Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.  */

// let velocidade = prompt("Qual velocidade do carro (Km/h)? ");
// let excesso = (velocidade-80);
// velocidade>80 ? prompt(` Velocidade acima do permitido! Usuário multado no valor de: R$ ${(5*excesso).toFixed(2)}`) : prompt("Limite de velocidade permitido.");

/*Ex. 3: Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em Km. 
Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e R$ 0.45 para viagens mais longas. */

// let distancia = (prompt("Insira a distância da viagem pretendida (Km)?"));
// console. clear()
// console.log("---------- Orçamento:----------");
// (distancia<=200) ? console.log(`Valor da passagem: R$ ${(0.5*distancia)}`) : console.log(`O Valor da passagem: R$ ${(0.45*distancia)}`);
// console.log("-------------------------------");

/*Ex. 4: Crie um programa que leia o tamanho de três segmentos de reta. Analise seus comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada lado deve ser menor que a soma dos outros dois. */

// let l1 = parseInt(prompt("Insira o valor do primeiro segmento:"));
// let l2 = parseInt(prompt("Insira o valor do segundo segmento:"));
// let l3 = parseInt(prompt("Insira o valor do terceiro segmento:"));
// ((l3 < l2+l1) && (l2 < l1+l3) && (l1 < l2+l3)) ? console.log("É possível formar um triângulo.") : console.log("Não é possível formar um triângulo com esses segmentos.");

/*Ex. 5: Crie um jogo de JoKenPo (Pedra-Papel-Tesoura)*/

// const menu = (modo) => {
//     console.log("------------- MENU -------------");
//     console.log("Digite 1: Jogador 1 vs Computador");
//     console.log("Digite 2: Jogador 1 vs Jogador 2");
//     console.log("--------------------------------");
//     modo = parseInt(prompt(" "));  
//     return escolhaModoJogo(modo)
// }

// const menuJ = () => {
//     console.log("----------- ESCOLHA -----------"); 
//     console.log("Digite 1: Pedra.")
//     console.log("Digite 2: Papel.")
//     console.log("Digite 3: Tesoura.")
//     console.log("------------------------------"); 
// }

// const nErro = () => {
//     console.log("******************************"); 
//     console.log("Erro! Escolha um valor válido.");
//     console.log("******************************");
//     return; 
// }

// const escolhaModoJogo = (modo) => {
// if (modo === 1){   

// menuJ();
// let escolha = parseInt(prompt("Jogador 1: "));
// console.log("------------------------------");
// let escolhaPc = (Math.floor(Math.random()*(3))+1);
// console.log(`Computador: ${escolhaPc}`);
// console.log("------------------------------"); 
    
//     if(escolha === escolhaPc){
//         console.log("******************************"); 
//         console.log("          Empate!");
//         console.log("******************************"); 
//     } else if (((escolha === 1) && (escolhaPc === 3)) || ((escolha === 2) && (escolhaPc === 1)) || ((escolha === 3) && (escolhaPc === 2))){
//         console.log("******************************"); 
//         console.log("       Você venceu!");
//         console.log("******************************"); 
//     } else if (((escolha === 1) && (escolhaPc === 2)) || ((escolha === 2) && (escolhaPc === 3)) || ((escolha === 3) && (escolhaPc === 1))){
//         console.log("******************************"); 
//         console.log("       Você perdeu!");
//         console.log("******************************"); 
//     } else {
//         nErro(); 
//     }

// } else if (modo === 2){
//     console.log("--------- JOGADOR 1 ---------");   
//     menuJ();
//     let jog1 = parseInt(prompt(" "));
//     console.clear()
//     console.log("--------- JOGADOR 2 ---------");  
//     menuJ();
//     let jog2 = parseInt(prompt(" "));
//     console.clear()
//     console.log("-----------ESCOLHAS-----------");
//     console.log(`Jogador 1:     ${jog1}`);  
//     console.log(`Jogador 2:     ${jog2}`);  
//     console.log("------------------------------"); 
    
//     if(jog1 === jog2){
//         console.log("******************************"); 
//         console.log("          Empate!");
//         console.log("******************************"); 
//     } else if (((jog1 === 1) && (jog2 === 3)) || ((jog1 === 2) && (jog2 === 1)) || ((jog1 === 3) && (jog2 === 2))){
//         console.log("******************************"); 
//         console.log("    Jogador 1 venceu!");
//         console.log("******************************"); 
//     } else if (((jog1 === 1) && (jog2 === 2)) || ((jog1 === 2) && (jog2 === 3)) || ((jog1 === 3) && (jog2 === 1))){
//         console.log("******************************"); 
//         console.log("    Jogador 2 venceu!");
//         console.log("******************************"); 
//     } else {
//         nErro();  
//     }

// } else {
//     nErro(); 
// }
// }
// menu()

/*Ex. 6: Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai tentar descobrir qual foi o valor sorteado */ 

// const nRandom = (Math.floor(Math.random()*5)+1);
// let cont = 1;

// do{
// let guess = parseInt(prompt("Insira um palpite no intervalo de 1 a 5.    Palpite:"));

// if (guess === nRandom){
//     return console.log(`Parabéns! Você acertou o número correto com ${cont} tentativa(s).`)    
// } else {
//     console.log("Você errou! Tente novamente.")
//     cont++;
// }
// }while(true);

/*Ex. 7: Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. 
Além disso, o cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. 
No final, mostre o preço a ser pago de acordo com os dados a seguir:
Carros populares
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km
Carros de luxo
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km */

// console.log("----------ALUGUEL DE CARROS----------");
// console.log("Tipo de carro alugado:");
// console.log("Digite 1 para carro de luxo.");
// console.log("Digite 2 para carro popular.");
// console.log("-------------------------------------")
// const car = parseInt(prompt("Tipo: "));
// console.clear;
// let dias = parseInt(prompt("Quantidade de diárias: "))
// let km = parseInt(prompt("Quilômetros percorridos: "))
// let diaria = 0;
// let kmetragem = 0;

// if(car === 1){
//     diaria = 150*dias;
//     if(km<=200){
//         kmetragem = (0.3*km);
//         valorT = (0.3*km)+(dias*150);
//     } else {
//         kmetragem = (0.25*km);
//         valorT = (0.25*km)+(dias*150);
//     }
    
// } else if(car === 2){
//     diaria = 90*dias;
//     if(km<=100){
//         kmetragem = (0.2*km);
//         valorT = (0.2*km)+(dias*90);
//     } else {
//         kmetragem = (0.1*km);
//         valorT = (0.1*km)+(dias*90);
//     }

// } else
// return console.log("Digite um tipo válido.");

// console.log("---------- TABELA DE PREÇOS ---------");
// console.log(`Diárias R$: ${(diaria.toFixed(2))}`);
// console.log(`Quilometragem R$: ${(kmetragem.toFixed(2))}`);
// console.log(`Total R$: ${(valorT).toFixed(2)}`);
// console.log("-------------------------------------");

/*Ex. 8: Um programa de vida saudável quer dar pontos por atividades físicas realizadas que podem ser trocados por dinheiro. Cada hora de atividade física no 
mês vale pontos. O sistema funciona assim:
- até 10 h de atividade no mês: ganha 2 pontos por hora
- de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
- acima de 20 h de atividade no mês: ganha 10 pontos por hora
- A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar. */

// console.log("------------ VIDA SAUDÁVEL -----------");
// console.log("Quanto tempo de atividade física você praticou no mês (em horas)?")
// let horas = parseInt(prompt(""));
// console.log("--------------------------------------");
// if (horas <= 10){
//     pontos = horas*2;
// } else if ((horas > 10)&&(horas <= 20)){
//     pontos = horas*5;
// } else {
//     pontos = horas*10
// }
// console.log(`Total de pontos: ${pontos}`);
// console.log(`Pontos em  dinheiro: R$ ${(pontos*0.05).toFixed(2)}`);
// console.log("--------------------------------------");

/*Ex. 9: Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final, mostre o total de salário pago aos homens e o total pago às mulheres. 
O programa vai perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um funcionário. */

// let siga
// let salarioF = 0; 
// let salarioM = 0; 

// do{
// let salario = parseInt(prompt("Insira o salário: "));
// let genero = prompt("Qual gênero? [M/F]");

//     if ((genero === "F")||(genero === "f")){
//         salarioF += salario
//     } else if ((genero === "M")||(genero === "m")){
//         salarioM += salario
//     } else {
//         return console.log("Erro. Digite um valor válido.")
//     }

// siga = prompt("Deseja continuar? [S/N]");
// console.clear();

// }while ((siga === "S")||(siga === "s"))

// console.log("------------------TABELA SALARIAL--------------------");
// console.log(`Salário total pago para os homens: R$ ${(salarioM).toFixed(2)}`);
// console.log(`Salário total pago para as mulheres: R$ ${(salarioF).toFixed(2)}`);
// console.log("-----------------------------------------------------")

/*Ex. 10: Crie um programa usando a estrutura “faça enquanto” que leia vários números. A cada laço, pergunte se o usuário quer continuar ou não. 
No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares. */

// let cont = 0;
// let resp;
// let soma = 0;
// let par = 0;
// let menor = Infinity;

// do{ 
// console.log(`Insira o ${(cont)+1}º valor:`)
// let valor = parseInt(prompt(""));
// cont++;
// resp = prompt("Deseja continuar? [S/N] ")
// console.clear();
// soma += valor;

//     if(valor<menor){
//         menor = valor;
//     }
//     if(valor%2===0)
//         par++;

// }while((resp === "S")||(resp === "s"))
// let media =(soma/cont);

// console.log(`Soma total: ${soma}`);
// console.log(`Menor valor digitado: ${menor}`);
// console.log(`Média dos valores: ${media}`);
// console.log(`Quantidade de valores pares: ${par}`);

/*Ex. 11: Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão Aritmética), mostrando na tela os 
10 primeiros elementos da PA e a soma entre todos os valores da sequência. */

// let soma = 0;
// const progA = (termo, razao) => {
    
//     for (let i = 0; i<10; i++){
//         console.log(`${(i+1)}º termo: ${termo}`);
//         soma += termo;
//         termo += razao;  
//     }
// };
// let termo = parseInt(prompt("Insira o primeiro termo da Progressão Aritmética (PA): "));
// let razao = parseInt(prompt("Insira a razao da PA: "));
// progA(termo, razao);
// console.log(`A soma dos 10 primeiros termos da PA é de: ${soma}`);

/*Ex. 12: Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
Ex.: 1, 1, 2, 3, 5, 8, 13, 21. */

// const fibonacci = () => {
//     let n1 = 1;
//     let n2 = 1; 
//     console.log(`1º Termo: ${n1}`);
//     console.log(`2º Termo: ${n2}`);
//     for (let i = 2; i < 10; i++) {
//        let n3 = n1+n2;
//        console.log(`${(i)+1}º Termo: ${n3}`);
//        n1 = n2;
//        n2 = n3;
//     }
// };

// fibonacci();

/*Ex. 13: Crie um programa que preencha automaticamente (usando lógica, não apenas atribuindo diretamente) um vetor numérico com 15 posições com 
os primeiros elementos da sequência de Fibonacci. */

// let arrayFib = [];
// const fibonacci = () => {
//     let n1 = 1;
//     let n2 = 1; 
//     arrayFib.push(n1, n2);

//     for (let i = 2; i < 15; i++) {
//        let n3 = n1+n2;
//        n1 = n2;
//        n2 = n3;
//        arrayFib.push(n3);
//     }
// };
// fibonacci();
// console.log(arrayFib)

/*Ex. 14: Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final, mostre uma listagem com todos os nomes informados, 
na ordem inversa daquela em que eles foram informados */

// const nomes = [];
// let j = 1;
// for (let i=6; i>=0; i--){
//     nomes[i] = prompt(`Insira o ${j}º nome: `)
//     j++;
// }
// console.clear();
// console.log("Listagem de Nomes:")
// for(let i=0; i<7; i++) {
//     console.log(nomes[i]);
// }

/*Ex. 15: Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No final, mostre quais são os números pares que foram digitados 
e em que posições eles estão armazenados. */

// const nInteiro = [];
// for (let i = 0; i<10; i++){
//     nInteiro[i] = parseInt(prompt(`Insira o ${(i)+1}º número: `))
// }
// console.log("------------------------------");
// const parIndex = (valor, index) => {
//     if(valor%2===0){
//         console.log(`O valor ${valor} é par e está na posição ${index} do array.`)
//     }
// };
// nInteiro.forEach(parIndex)
// console.log("------------------------------");

/*Ex. 16: Crie uma lógica que preencha um vetor de 20 posições com números aleatórios (entre 0 e 99) gerados pelo computador. 
Logo em seguida, mostre os números gerados e depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados. */

// const nAleatorio = [];
// for (let i = 0; i<20; i++){
//     nAleatorio[i] = Math.floor(Math.random()*100);
// }
// console.log(`Array aleatório: [${nAleatorio}]`);

// const ordenacaoArray = (vetor) => {
    
//     for(let i = 0; i < vetor.length; i++){
//         for(let j = 0; j < vetor.length; j++){
//             if(vetor[j] > vetor[j+1]){
//                 let aux;
//                 aux = vetor[j];
//                 vetor[j] = vetor[j+1];
//                 vetor[j+1] = aux;
//             }
//         }
//     }
// return vetor
// }
// ordenado = ordenacaoArray(nAleatorio);
// console.log(`Array ordenado:  [${nAleatorio}]`);

/*Ex. 17: Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em dois vetores, em posições relacionadas. 
No final, mostre uma listagem contendo apenas os dados das pessoas menores de idade. */

// const nomes = [];
// const idades = [];
// let j = 0;

// for(let i = 0; i < 9; i++){
//     nomes[i] = prompt(`Insira o ${i+1}º nome: `);
//     idades[i] = prompt(`Insira a idade de ${nomes[i]}: `);
//     console.clear();
// };
// console.log("Pessoas menores de idade: ")
// for(let i = 0; i < 9; i++){ 
    
//     if(idades[i]<18){ 
//         j++;
//        console.log(`${j}. ${nomes[i]}, com ${idades[i]} anos.`);
//     }
// };

/*Ex. 18: Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para um funcionário e ao final escreva o conteúdo do registro. */

// const registro = { 
//     Nome: "",
//     Cargo: "",
//     Salario: 0
// }
// registro.Nome = prompt("Escreva o nome do funcionário: ");
// registro.Cargo = prompt(`Qual o cargo de ${registro.Nome}? `);
// registro.Salario = prompt(`Qual o salário de ${registro.Nome}? `);

// console.clear();

// console.log("----------FUNCIONÁRIO----------")
// for(let chave in registro){
//     console.log(`${chave}: ${registro[chave]}.`)
// }
// console.log("-------------------------------")

/*Ex.19: Escrever um programa para ler 5 horários. Validar cada horário fornecendo através de repetição. Escrever cada um deles no formato HH.MM.SS. */

// function validaH(hor){
//     if((hor<0)||(hor>24)){
//         console.log("Horário inválido, tente novamente!");
//         hor = parseInt(prompt(`Insira a(s) hora(s): `));
//         return validaH(hor);   
//     }
//     return hor;
// }
// function validaM(min){
//     if((min < 0)|| (min > 60)){
//         console.log("Horário inválido, tente novamente!");
//         min = parseInt(prompt(`Insira o(s) minuto(s): `));
//         return validaM(min);
//     }
//     return min;
// }
// function validaS(seg){
//     if((seg < 0)|| (seg > 60)){
//         console.log("Horário inválido, tente novamente!");
//         seg = parseInt(prompt(`Insira o(s) segundo(s): `));
//         return validaS(seg);
//     }
//     return seg;
// }

// const horarios = [];

// for(let i = 0; i < 5; i++) {

//     let hor = parseInt(prompt(`${i+1}º Horário| Insira a(s) hora(s): `));
//     hor = validaH(hor);
//     let min = parseInt(prompt(`${i+1}º Horário| Insira os) minuto(s): `));
//     min = validaM(min);
//     let seg = parseInt(prompt(`${i+1}º Horário| Insira o(s) segundos(s): `));
//     seg = validaS(seg);
//     horarios.push(`${i+1}º Horário| ${hor}:${min}:${seg}`);
// }
// console.log(horarios)

/*Ex. 20: Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada no seguinte: existe uma tabela com os dados de cada funcionalidade: 
matrícula, nome e salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na tela), cada funcionário, seu contracheque, cujo formato 
é dado a seguir:
Matrícula:
Nome:
Salário bruto:
Dedução INSS:
Salário líquido:
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do INSS). */                                        //******REVER

// const tabela = {
//         matricula: 0,
//         nome: "",
//         salario_bruto: 0, 
// };
// tabela.deducao = function() {
//         deducao_inss = ((this.salario_bruto)*(0.12)),
//         salario_liquido = ((this.salario_bruto)-(deducao_inss))        
//        return `Dedução INSS: R$ ${(deducao_inss.toFixed(2))} \nSalário Líquido: R$ ${(salario_liquido.toFixed(2))}`;    
// };

// tabela.matricula = prompt(`Funcionário | Matrícula: `);
// tabela.nome = prompt(`Funcionário | Nome : `);
// tabela.salario_bruto = prompt(`Funcionário | Salário Bruto: `);

// console.clear();
// console.log("---------- CONTRA CHEQUE ----------");
// console.log(`Matrícula: ${tabela.matricula}`);
// console.log(`Nome: ${tabela.nome}`);
// console.log(`Salário Bruto: R$${tabela.salario_bruto}.00`);
// console.log(tabela.deducao());
// console.log("-----------------------------------");

/*Ex. 21: Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e retorna o seu peso ideal. 
Para homens, calcular o peso ideal usando a fórmula: peso ideal = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7. */

// const pesoIdealT = function(sexo, alt) { 

//         let pesoIdeal = 0;
//         if((sexo === "M")||(sexo === "m")) {
//                 pesoIdeal = ((72.7*alt)-58);                           
//         } else if ((sexo === "F")||(sexo === "f")) {
//                 pesoIdeal = ((62.1*alt)-44.7);               
//         } else {
//                return `Erro, tente novamente.`;
//         }

//         return `Seu peso ideal é: ${(pesoIdeal.toFixed(1))} kilos.`
// };

// let altura = parseFloat(prompt(`Insira sua altura (metros): `));
// let sexo = prompt(`Sexo [M/F]: `);

// console.log(pesoIdealT(sexo, altura));

/*Ex. 22: A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando dados sobre o salário e número de filhos. 
Faça uma função que leia esses dados para um número não determinado de pessoas e retorne a média de salário da população, a média do número de filhos, 
o maior salário e o percentual de pessoas com salário até R$ 350,00. */                                                                             

// pesquisaCidade = function() {
// const salarios = [];
// const filhos = []; 
// let resp = "";
// let somaSalarios = 0;
// let somaFilhos = 0;
// let maiorSalario = 0;
// let cont=0;

// do{ 
//     salarios.push(parseInt(prompt(`Qual a sua renda familiar? R$:`)));
//     filhos.push(parseInt(prompt(`Quantos filhos? `)));
//     resp = prompt(`Deseja continuar? [S/N]`)
// }while ((resp === "S")||(resp === "s"));

//     for(let i = 0; i < salarios.length; i++){
//         somaSalarios += salarios[i];

//         if(salarios[i]<350){
//             cont++;
//         }

//         if(salarios[i]>maiorSalario) {
//             maiorSalario = salarios[i];
//         }
//     }
// let mediaSalario = (somaSalarios/salarios.length);
// let minPercentual = ((cont*100)/salarios.length)

//     for(let i = 0; i < filhos.length; i++) {
//         somaFilhos += filhos[i];
//     }
// let mediaFilhos =(Math.ceil(somaFilhos/filhos.length));

// return {
//     mediaSalario: mediaSalario,
//     mediaFilhos: mediaFilhos,
//     minPercentual: minPercentual,
//     maiorSalario: maiorSalario
// };
// };
// resultado = pesquisaCidade();
// console.clear();

// console.log(`------------------------ RESULTADOS DA PESQUISA ----------------------`);
// console.log(`Média salarial da população: R$ ${resultado.mediaSalario.toFixed(2)}.`);
// console.log(`Média de ${resultado.mediaFilhos} filhos por família.`);
// console.log(`O maior salário registrado: R$ ${resultado.maiorSalario.toFixed(2)}.`);
// console.log(`Um total de ${resultado.minPercentual}% da população, recebe menos que R$ 350,00.`);
// console.log(`----------------------------------------------------------------------`);

/* Funções recorrentes usadas nos exercícios abaixo: */

// const mPrint = (matriz, linha, coluna) => {
//     for(let i = 0; i < linha; i++){
//         let matrizPrint = "";
//         for(let j = 0; j < coluna; j++){
//             matrizPrint += ` ${matriz[i][j]}  `;
//         }
//         console.log(matrizPrint)
//     }
// }

// const mFactory = (linha, coluna) => { 
//     let matrizRand = [];

//     for(let i = 0; i < linha; i++){
//         matrizRand[i] = [];
//     }

//     for(let i = 0; i < linha; i++){
//         for(let j = 0; j < coluna; j++){
//             matrizRand[i][j] = Math.floor(Math.random()*31);
//         }
//     }

//     return matrizRand; 
// }

/*Ex. 23: Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da diagonal principal são iguais a 1 e os demais são nulos. */

// const matrizId = (ordem) => {
//     let matriz = [];

//     for(let i = 0; i < ordem; i++){
//         matriz[i] = [];
//     }
    
//     for(let i = 0; i < ordem; i++){ 
    
//         for(let j = 0; j < ordem; j++){
    
//             if( i === j) {
//                 matriz[i][j] = 1; 
//              } else {
//                 matriz[i][j] = null;
//              }
//         }
//     }

//     for(let i = 0; i < ordem; i++){
//         let linha = "";
//         for(let j = 0; j < ordem; j++){
//             linha += `${matriz[i][j]}   `
//         }
//         console.log(linha);
//     }
// };

// matrizId(7);

/*Ex. 24: Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a quantidade de elementos negativos da linha correspondente de M. */

// contaNegativosM = function() { 
    
// let matrizM = [];
// let vetorC = [];
// negativosC = 0;
// for(let i = 0; i < 6; i++) {
//     matrizM[i] = [];
// }

// for (let i = 0; i < 6; i++){
    
//     for(let j = 0; j < 8; j++){
//         matrizM[i][j] = (Math.floor(Math.random()*(100)-50));
//         if(matrizM[i][j] < 0){
//             negativosC++;
//         }
//     }
//     vetorC.push(negativosC)
//     negativosC = 0;
// }

// for(let i = 0; i < 6; i++){
//     let linha = "";

//     for(j = 0; j < 8; j++){
//         linha += `${matrizM[i][j]}   `
//     }
//     console.log(linha);
// };
// console.log(`Elementos negativos por linha da matriz: [${vetorC}]`);
// };

// contaNegativosM();

/*Ex. 25: Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma de cada coluna separadamente. */


// factoryM = function(linha, coluna) {
    
//     let matrizRand = [];
//     let somaColunas = 0;
//     let resultado = [];

//     for(let i = 0; i < linha; i++){
//         matrizRand[i] = [];
//     }
    
//     for(let i = 0; i < linha; i++){
//         for(let j = 0; j < coluna; j++){
//             matrizRand[i][j] = Math.floor(Math.random()*(51));
//         }
//     }

//     console.log("--------- MATRIZ ----------")
//     for(let i = 0; i < linha; i++){
//         let printM = "";
//         for(let j = 0; j < coluna; j++){
//             printM += `${matrizRand[i][j]}  `
//         }
//         console.log(printM);
//     }
//     console.log("---------------------------")

//     for(let j = 0; j < coluna; j++){
//         for(let i = 0; i < linha; i++){
//             somaColunas += matrizRand[i][j];
//         }
//         resultado.push(somaColunas);
//         somaColunas = 0;
//     }

// console.log(`A soma dos numeros de cada coluna é:`);
// for(let j = 0; j < coluna; j++){
//     console.log(`Coluna ${j+1}: ${resultado[j]}`)
// }
// }

// factoryM(15, 20);

/*Ex. 26: Dadas duas matrizes numéricas A[1..3,1..5] e B[1..5,1..3], calcular a matriz produto P[1..3,1..3]. */

// printM = function(matrizPrint, linha, coluna){

//     for(let i = 0; i < linha; i++){
//         let printM = " ";
        
//         for(let j = 0; j < coluna; j++){
//             printM += `${matrizPrint[i][j]}   `;
//         }
//         console.log(printM)
//     }
// }

// factoryM = function(linha, coluna) {
//     let matrizRand = [];
    
//     for(let i = 0; i < linha; i++){
//         matrizRand[i] = [];
//     }
    
//     for(let i = 0; i < linha; i++){
        
//         for(let j = 0; j < coluna; j++){
//             matrizRand[i][j] = Math.floor(Math.random()*50);
//         }
//     }

//     printM(matrizRand, linha, coluna)
    
//     return matrizRand
// }

// multiplicacaoM = function(matrizA, linhaA, colunaA, matrizB, linhaB, colunaB){
//     let matrizResult = [];

//     if(colunaA === linhaB) {
            
//         for(let i = 0; i < linhaA; i++){
//                 matrizResult[i] = [];          
//             for(let j = 0; j < colunaB; j++){
//                 matrizResult[i][j] = 0;
//                 for(let k = 0; k < colunaA; k++){
//                     matrizResult[i][j] += matrizA[i][k]*matrizB[k][j] ;
//                 }
//             }
//         } 

//             printM(matrizResult, linhaA, colunaB)
//             return matrizResult

//     } else {
//         return `Matrizes não correspondem a condição de multiplicação!`
//     };
// };

// console.log("-----------MATRIZ A-----------")
// let matrizA = factoryM(3,5);
// console.log("-----------MATRIZ B-----------")
// let matrizB = factoryM(5,3);
// console.log("------ MATRIZ RESULTANTE ------")
// let matrizR = multiplicacaoM(matrizA, 3, 5, matrizB, 5, 3)
// console.log("------------------------------")


/*Ex. 27: Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura, multiplicar a matriz M pelo valor A 
e colocar os valores da matriz multiplicados por A em um vetor V(36). Escrever o vetor V no final. */

// const printM = (matriz, linha, coluna) => {

//     for(i = 0; i < linha; i++){
//         let matrizPrint = "";
//         for(j = 0; j < coluna; j++){
//             matrizPrint += `${matriz[i][j]}   `
//         }
//         console.log(matrizPrint)
//     }
// }

// const factoryM = (linha, coluna) => {    
//     let matrizRand = [];
    
//     for(i = 0; i < linha; i++) {
//         matrizRand[i]=[];
//     }; 

//     for(i = 0; i < linha; i++){
//         for(j = 0; j < coluna; j++){
//             matrizRand[i][j] = prompt(`Insira o valor da ${i+1}ª linha e ${j+1}ª coluna: `);
//         }
//     }
//     printM(matrizRand, linha, coluna)
//     return matrizRand;
// };

// const multMatriz = (matriz, razao) => {
// let resultado = [];
    
//     matriz.forEach(function(linha){
//         linha.forEach(function(elemento){
//             resultado.push(elemento*razao)
//         })
//     })
  
//     return `[${resultado}]`;
// }

// let matrizA = factoryM(6,6);
// let razao = parseInt(prompt(`Insira a razão (A): `));
// console.log()
// console.log("V[36] resultante:")
// console.log(multMatriz(matrizA, razao));

/*Ex. 28: Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no item:
a) a soma dos elementos acima da diagonal principal;
b) a soma dos elementos abaixo da diagonal principal; */

// const mPrint = (matriz, linha, coluna) => {
//     for(let i = 0; i < linha; i++){
//         let matrizPrint = "";
//         for(let j = 0; j < coluna; j++){
//             matrizPrint += `${matriz[i][j]}   `
//         }
//         console.log(matrizPrint)
//     }
// }

// const mFactory = (linha, coluna) => {
//     let matrizRand = [];
    
//     for (let i = 0; i < linha; i++){
//         matrizRand[i] = [];
//     }

//     for (let i = 0; i < linha; i++){
//         for (let j = 0; j < coluna; j++){
//             matrizRand[i][j] = Math.floor(Math.random()*51)
//         }
//     }
//     mPrint(matrizRand, linha, coluna)
//     return matrizRand;
// }

// const somaMatriz = (matriz, linha, coluna) => {
//     let somaSup = 0;
//     let somaInf = 0;
    
//     for (let i = 0; i < linha; i++){
//         for (let j = 0; j < coluna; j++){
//             if (i < j){
//                 somaSup += matriz[i][j];
//             } else if (i > j){
//                 somaInf += matriz[i][j];
//             };
//         };
//     };
//     return `a) a soma dos elementos acima da diagonal principal: ${somaSup}\nb) a soma dos elementos abaixo da diagonal principal: ${somaInf}`
    
// };

// let matrizA = mFactory(10, 10);
// console.log(somaMatriz(matrizA, 10, 10));

/*Ex. 29 Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
a) da linha 4 de M;
b) da coluna 2 de M;
c) da diagonal principal;
d) todos os elementos da matriz M.
Escrever essas somas e a matriz. */

// const mPrint = (matriz, linha, coluna) => {
    
//     for(let i = 0; i < linha; i++){    
//         matrizPrint ="";
//         for(let j = 0; j < coluna; j++){
//             matrizPrint += `${matriz[i][j]}   `
//         }
//         console.log(matrizPrint)
//     }
// }

// const mFactory = (linha, coluna) => {
//     matrizRand = [];
    
//     for(let i = 0; i < linha; i++){
//         matrizRand[i] = [];
//     }

//     for(let i = 0; i < linha; i++){
//         for(let j = 0; j < coluna; j++){
//             matrizRand[i][j] = Math.floor(Math.random()*10);
//         }
//     }

//     mPrint(matrizRand, linha, coluna);
//     return matrizRand;
// }

// const somaMatriz = (matriz, linha, coluna) => {
//     somaL4 = 0;
//     somaC2 = 0; 
//     somaDP = 0; 
//     somaTot = 0;

//     for(let i = 0; i < linha; i++){
//         for(let j = 0; j < coluna; j++){
//             somaTot += matriz[i][j];
//             if(i===j){
//                 somaDP += matriz[i][j];
//             } 
//             if (i===3){
//                 somaL4 += matriz[i][j];
//             } 
//             if (j===1){
//                 somaC2 += matriz[i][j];
//             }
//         }
//     }
//     return `a) Soma da linha 4: ${somaL4}\nb) Soma da coluna 2: ${somaC2}\nc) Soma da diagonal principal: ${somaDP}\nd) Soma todos os elementos: ${somaTot}\n`
// }

// matrizA = mFactory(5, 5);
// console.log(somaMatriz(matrizA, 5, 5));

/*Ex. 30: Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que contenham, respectivamente, as somas das linhas e 
das colunas de M. Escrever a matriz e os vetores criados. */

// const mPrint = (matriz, linha, coluna) => {
//         for(let i = 0; i < linha; i++){
//            let matrizPrint = "";
//            for(let j = 0; j < coluna; j++){
//             matrizPrint += `${matriz[i][j]}   `
//            }
//            console.log(matrizPrint)
//         }
// }

// const mFactory = (linha, coluna) => {
//     let matrizRand = [];

//     for(let i = 0; i < linha; i++){
//         matrizRand[i] = [];
//     }

//     for(let i = 0; i < linha; i++){
//         for(let j = 0; j < coluna; j++){
//             matrizRand[i][j] = Math.floor(Math.random()*10);
//         }
//     }
//     mPrint(matrizRand, linha, coluna);
//     return matrizRand;
// }; 

// const somaLC = (matriz, linha, coluna) => {
//     let SL = [];
//     let SC = [];
    

//     for(let i = 0; i < linha; i++){
//        let somaL = 0;
//         for(let j = 0; j < coluna; j++){
//                 somaL += matriz[i][j];
//         }
//             SL.push(somaL)
//     }
    
//     for(let j = 0; j < coluna; j++){
//         let somaC = 0;
//         for(let i = 0; i < linha; i++){
//             somaC += matriz[i][j];
//         }
//             SC.push(somaC)
//     }
    
//     return `Vetor soma das linhas: SL[${SL}]\nVetor soma das colunas: SC[${SC}]`
// }

// matrizA = mFactory(5, 5);
// console.log(somaLC(matrizA, 5, 5));

/*Ex. 31: Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros. Conte quantos valores iguais a A estão na matriz. 
Crie, a seguir, uma matriz X contendo todos os elementos de V diferentes de A. Mostre os resultados. */

// const mPrint = (matriz, linha, coluna) => {
//     for(let i = 0; i < linha; i++){
//         let matrizPrint = "";
//         for(let j = 0; j < coluna; j++){
//             matrizPrint += ` ${matriz[i][j]}  `;
//         }
//         console.log(matrizPrint)
//     }
// }

// const mFactory = (linha, coluna) => { 
//     let matrizRand = [];

//     for(let i = 0; i < linha; i++){
//         matrizRand[i] = [];
//     }

//     for(let i = 0; i < linha; i++){
//         for(let j = 0; j < coluna; j++){
//             matrizRand[i][j] = Math.floor(Math.random()*31);
//         }
//     }

//     mPrint(matrizRand, linha, coluna)
//     return matrizRand; 
// }

// let numberA = parseInt(prompt(`Insira um valor (A) inteiro no intervalo entre 0 e 30       A:`));
// matrizA = mFactory(30, 30)

// const ocorrenciaA = (matriz, linha, coluna, numberA) => {
//     let countA = 0;
//     let matrizSemA = [];

//     for(let i = 0; i < linha; i++){
//         matrizSemA[i] = [];

//         for(let j = 0; j < coluna; j++){
            
//             if(matriz[i][j] === numberA){
//                 countA++;
//                 matrizSemA[i].push("[ ]")
//             } else {
//                 matrizSemA[i].push(matriz[i][j]);
//             }
//         }
//     }
//     mPrint(matrizSemA, matrizSemA.length, matrizSemA[0].length);
//     return countA;
// }
// console.log("-----------------------------------------------------------------------------------------------");
// console.log();
// console.log(`Nova Matriz sem o elemento ${numberA}:`);
// console.log(ocorrenciaA(matrizA, 30, 30, numberA));

/*Ex. 32: Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha.
Escrever a matriz lida e a modificada. */

// const mPrint = (matriz, linha, coluna) => {
//     for(let i = 0; i < linha; i++){
//         let matrizPrint = "";
//         for(let j = 0; j < coluna; j++){
//             matrizPrint += `${matriz[i][j]}  `
//         }
//         console.log(matrizPrint)
//     }
// };

// const mFactory = (linha, coluna) => {
//     let matrizRand = [];
    
//     for(let i = 0; i < linha; i++) {
//         matrizRand[i]= [];
//     }    

//     for(let i = 0; i < linha; i++){
//         for(let j = 0; j < coluna; j++){
//             matrizRand[i][j] = (Math.floor(Math.random()*(150)-50))
//         }
//     }
//     mPrint(matrizRand, linha, coluna);
//     return(matrizRand);
// };

// const maiorN = (linha) => {

// let maiorN = Math.abs(linha[0]);

//     for(let i = 0; i < linha.length; i++){ 
//         let atualN = Math.abs(linha[i]);
//         if(atualN > maiorN) {
//             maiorN = atualN
//         }
//     }
//     return maiorN;
// }

// const divMaiorN = (linha, maiorN) => {
//     let linhaDivMaiorN = []

//     for(let i = 0; i < linha.length; i++){
//         linhaDivMaiorN[i] = (linha[i]/maiorN).toFixed(2); 
//     }
//     return linhaDivMaiorN;
// }

// console.log("Matriz original: ");
// let matrizM = mFactory(12, 13);
// console.log();

// console.log("Matriz dividida pelo maior módulo da linha: ");
// let matrizMod = [];
// for(let i = 0; i < matrizM.length; i++){
//     let moduloMaior = maiorN(matrizM[i]);
//     matrizMod[i] = divMaiorN(matrizM[i], moduloMaior);
// }
// mPrint(matrizMod, 12, 13);

/*Ex. 33: Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os elementos da diagonal principal com a média dos elementos da diagonal secundária. */

// const mQFactory = (ordem) => {
//     let matrizRand = [];

//     for(let i = 0; i < ordem; i++){
//         matrizRand[i] = [];
//     }

//     for(let i = 0; i < ordem; i++){
//         for(let j = 0; j < ordem; j++){
//             matrizRand[i][j] = Math.floor(Math.random()*10)
//         }
//     }
//     return matrizRand;
// }

// const mPrint = (matriz, ordem) => {
      
//     for(let i = 0; i < ordem; i++){
//         let matrizPrint = "";
//         for(let j = 0; j < ordem; j++){
//             matrizPrint += `${matriz[i][j]}  `;
//         }
//         console.log(matrizPrint);
//     }
// }

// const mediaDS = (matriz, ordem) => {
//     let totSec = 0;
//     let mediaSec = 0;
//     for(let i = 0; i < ordem; i++){
//         for(let j = 0; j < ordem; j++){
//             if(((i+1)+(j+1))===(ordem+1))
//                 totSec += matriz[i][j];
//         }
//     }
//     mediaSec = (totSec/ordem).toFixed(2);
//     return mediaSec;
// }

// const multDPporDS = (matriz, ordem, ds) => {
//     let matrizMulti = []

//     for(let i = 0; i < ordem; i++){
//         matrizMulti[i] = [];
//     }

//     for(let i = 0; i < ordem; i++){
//         for(let j = 0; j < ordem; j++){
//             if(i===j){
//                 matrizMulti[i].push((ds)*matriz[i][j]);
//             } else {
//                 matrizMulti[i].push(matriz[i][j])
//             }
//         }
//     }
//     return matrizMulti;
// }

// console.log(`Matriz:`)
// matrizA = mQFactory(3);
// mPrint(matrizA, 3);
// console.log()
// ds = mediaDS(matrizA, 3);
// console.log(`Média da diagonal secundária: ${ds}`)
// console.log()

// matrizB = multDPporDS(matrizA, 3, ds);
// mPrint(matrizB, 3)

/*Ex. 34: Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as multiplicações. */

// const mQFactory = (ordem) => {
//     let matrizRand = [];

//     for(let i = 0; i < ordem; i++){
//         matrizRand[i]=[];
//     }

//     for(let i = 0; i < ordem; i++){
//         for(let j = 0; j < ordem; j++){
//             matrizRand[i][j] = Math.floor(Math.random()*51)
//         }
//     }
//     return matrizRand;
// }

// const mPrint = (matriz, ordem) => {

//     for(let i = 0; i < ordem; i++){
//         let printM = "";
//         for(let j = 0; j < ordem; j++){ 
//             printM += `${matriz[i][j]}  `;
//         }
//      console.log(printM)
//     }        
// }

// const diagPrincipal = (matriz, ordem) => {
//     let dp = [];

//     for(let i = 0; i < ordem; i++){
//         for(let j = 0; j < ordem; j++){
//             if(i===j){
//                 dp.push(matriz[i][j])
//             }
//         }
//     }
//     return dp;
// }

// const dpMultMatriz = (matriz, ordem, dp) => {
//     let matrizMult = [];
    
//     for(let i = 0; i < ordem; i++){
//         matrizMult[i] = [];
//     }

//     for(let i = 0; i < ordem; i++){
//         for(let j = 0; j < ordem; j++){
//             matrizMult[i].push((matriz[i][j])*(dp[i]));
//         }
//     }
//     return matrizMult;
// }

// matrizA = mQFactory(5, 5);
// console.log("Matriz Principal:")
// mPrint(matrizA, 5);
// dp = diagPrincipal(matrizA, 5)
// console.log(`Valores da Diagonal Principal: ${dp}`)

// console.log("Matriz com linhas multiplicadas pelos valores da Diagonal Principal:")
// matrizB = dpMultMatriz(matrizA, 5, dp);
// mPrint(matrizB, 5);

/*Ex. 35: Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada vetor pode ser preenchido quantas vezes forem necessárias. */

// let parV = [];
// let imparV = [];
// let valores =[];

// const printV = (vetor, tipo, status) => {
//     console.log(`Vetor ${tipo} ${status}: [${vetor}]`)
// }

// for(let i = 0; i < 30; i++){
//     valores.push(prompt(`Insira o ${i+1}º valor: `));
// }    
// console.clear();
// console.log(`Conjunto de valores: [${valores}]`)

//     for(let i = 0; i < valores.length; i++){
//         if(valores[i]%2===0){
//             parV.push(valores[i]);
//             if(parV.length === 5){
//                 printV(parV, "par", "cheio")
//                 parV = [];}
//         } else {
//             imparV.push(valores[i]);
//             if(imparV.length === 5){
//                 printV(imparV, "impar", "cheio")
//                 imparV = [];}
//         }
//     }

//     if (parV.length > 0) {
//         printV(parV, "par", "incompleto");
//     }
//     if (imparV.length > 0) {
//         printV(imparV, "impar", "incompleto");
//     }

/*Ex. 36: Escreva um algoritmo que leia um vetor de 13 elementos inteiros, que é o Gabarito de um teste da loteria esportiva. Leia, a seguir, para cada um dos 100 apostadores, o número do seu cartão e um vetor de Respostas de 13 posições. Verifique para cada apostador o número de acertos, comparando o vetor de Gabarito com o vetor de Respostas. Escreva o número do apostador e o número de acertos. Se o apostador tiver 13 acertos, mostrar a mensagem "Parabéns, tu foi o GANHADOR". */

// const gabarito = () => {
//     let valor = 0;
//     let valores = [];

//     for(let i = 0; i < 13; i++){
//         valor = parseInt(prompt(`Insira o ${i+1}º número sorteado (Intervalo entre 0 e 60): `));
//             if(!valores.includes(valor)){
//                 valores.push(valor);
//             } else {
//                 console.log("Valor já cadastrado!");
//                 i--;
//             }
//     }
//     return valores;
// }

// const betFactory = () => {
//     let bet = new Set();
//     while(bet.size < 13) {
//         bet.add(Math.floor(Math.random()*61));
//     }
//     return Array.from(bet);
// }

// const compareApostas = () => {
    
//    const gabaritoN = gabarito();
//    console.log(`Gabarito: ${gabaritoN}`)

//    for(let i = 0; i < 100; i++){
//        const aposta = betFactory();
//        console.log(`Aposta do ${i+1}º: ${aposta}`);
//        let hit = 0;
                
//         aposta.forEach(numero => {
//             if(gabaritoN.includes(numero)){
//                 hit++;
//             }
//         });

//         console.log(`${i+1}º apostador: ${hit} acertos.`)
//         if(hit === 13){
//             console.log("*******Parabéns, você ganhou!**********")
//         }
//     }
// }
// compareApostas();

/*Ex.37: Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12; e mostre uma mensagem de “REPROVADO”, caso contrário. */

// const gabarito = () => {
//     let gabaritoG = [];
//     for(let i = 0; i < 20; i++){
//         gabaritoG.push(prompt(`Insira a ${i+1} resposta (a, b, c, d ou e):`))
//     }
//     return gabaritoG
// }

// const letraRand = () => {
//     const opcoes = "abcde";
//     const opcaoRand = Math.floor(Math.random()*5);
//     return opcoes[opcaoRand];
// }

// const respostasFactory = () => {
//     let resposta = [];
//     for(let i = 0; i < 20; i++){
//         resposta.push(letraRand())
//     }
//     return resposta;
// }

// const resolucao = () => {
    
//     let gabaritoOf = gabarito();
//     console.log(`Gabarito: ${gabaritoOf}`)
    
//     for(let i = 0; i < 50; i++){
//         respostaV = respostasFactory();
//         console.log(`Resposta do aluno ${i+1}: ${respostaV}`)
        
//         let acertos = 0;
//         respostaV.forEach((elemento, index) => {
//             if(elemento === gabaritoOf[index])
//                 acertos++;
//         });

//         console.log(`Aluno ${i+1}: ${acertos} acertos.`)
//         if(acertos >= 12){
//             console.log(`Aluno ${i+1}: APROVADO`);
//         } else {
//             console.log(`Aluno ${i+1}: REPROVADO`);
//         }
//     }
// }

// resolucao();

/*Ex. 38: Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra variável identificadora que calcule a operação conforme a informação contida nesta variável:
1- soma dos elementos;
2- produto dos elementos;
3- média dos elementos;
4- ordene os elementos em ordem crescente;
5- mostre o vetor.
 */

// const vFactory = () => {
//     let vetor = [];
//     for(let i = 0; i < 6; i++){
//         vetor.push(parseInt(prompt(`Insira o ${i+1}º elemento do vetor: `)))
//     }
//     console.log(`Vetor de entrada: [${vetor}]`);
//     return vetor;
// }

// const menu = () => {
//     console.log("------OPERAÇÕES------\n1- soma dos elementos;\n2- produto dos elementos;\n3- média dos elementos;\n4- ordene os elementos em ordem crescente;\n5- mostre o vetor.")
//     console.log("---------------------")
//     let escolha = parseInt(prompt(`Escolha uma das operações acima através do índice de 1 a 5:`))
//     return escolha;
// }

// const operacoes = (indice, vetor) => {
    
//     let resultado;
//     switch (indice) {

//         case 1:
//             resultado = 0;
//             vetor.forEach(elemento => {
//                 resultado += elemento;
//             });
//             return resultado;
               
//         case 2:
//             resultado = 1;
//             vetor.forEach(elemento => {
//                 resultado *= elemento;
//             }) 
//             return resultado;
        
//         case 3:
//             soma = 0;
//             vetor.forEach(elemento => {
//                 soma += elemento;
//             })
//             resultado = (soma/vetor.length);
//             return resultado;
        
//         case 4:
//             resultado = vetor.sort((a, b) => a -b);
//             return resultado;
        
//         case 5:
//             return console.log(`Vetor: [${vetor}]`);
                
//         default:
//             return "Insira um índice válido.";
//     }
// }

// let vetorV = vFactory();
// let indice = menu();
// let resultFim = operacoes(indice, vetorV);

//     if(resultFim !== null){
//         if(indice !== 5) {
//             console.log(`Resultado da operação: ${resultFim}`);
//         }

//     } else {
    //         console.log(resultFim);
    //     }
    
/*Ex. 39: Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B.  */

// const vFactory = () => {
//     // let entrada = prompt("Insira 100 elementos separados por vírgulas:");
//     // let vetor = entrada.split(',').map(Number);
                    //auto
//     let vetor = [];    
//     for(let i = 0; i < 20; i++){
//         vetor.push(Math.floor(Math.random()*150)-100)
//     }
    
//     console.log(`Vetor de entrada: [${vetor}]`);
//     return vetor;
// }

// const vCompress = () => {
//     let vetorA = vFactory();
//     let vetorB = [];
//     vetorA.forEach(numero => {
//         if((numero > 0) && (numero !== null))
//             vetorB.push(numero);
//     })
//     console.log();
//     console.log(`VetorB compactado: [${vetorB}].`)
//     return vetorB
// }

// vCompress();


/*Ex. 40: Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros cada), representando as apostas feitas. Compare os números das apostas com o resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos e quadras, apenas por quinas.) */

// const vFactory = () => {
//     let bet = new Set();
//     while (bet.size < 5){
//         bet.add(Math.floor(Math.random()*61));
//     }
//     return Array.from(bet);
// }

// const gabarito = () => {
//     let gabarito = [];
//     for(let i = 0; i < 5; i++){
//         let valor = parseInt(prompt(`Escreva o ${i+1}º valor sorteado:`));
//         if(valor !== null) {
//             gabarito.push(valor);
//         } else {
//             console.log("Escreva um valor válido.")
//         }
//     }
//     console.log(`Quinta sorteada: ${gabarito}`);
//     return gabarito;
// }

// const checkResult = () => {
//     const resultado = gabarito ();
    
//     for(let i = 0; i < 50; i++){
//         let aposta = vFactory();
//         let acertos = 0;
        
//         console.log(`Pessoa ${i+1} - Aposta: ${aposta}`)
        
//         aposta.forEach(numero => {
//                 if(resultado.includes(numero)){
//                 acertos++;
//             }
//             });
//         console.log(`Pessoa ${i+1} - Acertos: ${acertos}`)

//         if(acertos === 5){
//             console.log("**********PREMIADA!!!**********")
//         }
//     }
// } 

// checkResult();

/*Ex. 41: Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
nome e idade. */

// let pessoa = {
//     nome:"Isaias",
//     idade: 33,
// }
// console.log(`A idade de ${pessoa.nome} é ${pessoa.idade} anos.`);

// pessoa.email = "";
// console.log(pessoa);

/*Ex. 42: Crie um objeto chamado dados que contém várias propriedades, incluindo números, strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
propriedades que são arrays. */

// let dados = {

//     evento: "Happy Hour",
//     endereco: "Rua José Maria",
//     CEP: 99999-99,
//     convidados: ["João", "Maria", "Carlos", "José", "Joaquim"],
//     comidas: ["Salada", "Tropeiro", "Arroz", "Frango assado", "maionese"],
    
// }

// const filtrarObj = (obj) => {
//     let novoObj = {};

//     for(let chave in obj) {
//         if(Array.isArray(obj[chave])){
//             novoObj[chave] = obj[chave];
//         }
//     }
//     return novoObj;
// }

// let resultado = filtrarObj(dados);
// console.log(resultado);

/*Ex. 43: Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
sobre as do obj1 em caso de conflitos. */

// let obj1 = {
    
//     turma: "2AM",
//     periodo: "2 Série do Ensino Médio",
//     alunos: 42,
//     professor: "Renato"

// }

// let obj2 = {

//     turma: "2AM",
//     periodo: "2 Série do Ensino Médio",
//     professor: "Carlos",
//     alunos: 43,

// }

// const juncaoObj = (obj1, obj2) => {
//     let juncao = {};

//     for(let chave in obj1){
//         juncao[chave] = obj1[chave];
//     }

//     for(let chave in obj2){
//         juncao[chave] = obj2[chave];
//     }

//     return juncao
// }

// let resultado = juncaoObj(obj1, obj2);
// console.log(resultado);

/*Ex. 44: Escreva uma função que conte quantas propriedades do tipo string existem em um objeto e retorne esse número. */

// let obj = { 

//     escola: "Colegio Maria",
//     turmas: ['1AM', '1BM', '1CM', '2AM', '2BM', '3AM'],
//     professores: ['Carlos', 'Jose', 'Renato', 'Marcia', 'Carol'],
//     direcao: "Eloa (direcao) e Monica (vice)",
//     alunos: 520,
//     concursados: 14,
//     terceirizados: 25

// }

// const propCont = (obj) => {
//     let stringT = 0; 

//     for(chave in obj){

//         if (typeof (obj[chave]) === 'string'){
//             stringT++;
//         }
//     }

//     return stringT;
// }

// let resultado = propCont(obj);
// console.log(`O objeto analisado apresenta ${resultado} propriedades do tipo string`);

/*Ex. 45: Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é o número de vezes que a string aparece no array. */

// let arrayS = ['Bom dia', 'Boa tarde', 'Boa noite', 'Boa sorte', 'Bom dia', 'Boa tarde', 'Boa noite', 'Boa sorte','Bom dia', 'Boa tarde', 'Boa noite', 'Boa sorte', 'Bom dia', 'Boa tarde', 'Bom dia', 'Boa tarde', 'Boa sorte','Bom dia', 'Boa sorte','Bom dia' ];

// const oFactory = (arr) => {
//     let obj = {};
    
//     for(let i = 0; i < arr.length; i++){
//         let stringA = arr[i];
//         if(obj[stringA]) {
//             obj[stringA]++;          
//         } else {
//             obj[stringA] = 1;
//         }
//     }
//     return obj
// }

// let resultado = oFactory(arrayS);
// console.log(resultado);

/*Ex. 46: Suponha que você tem um array de objetos onde cada objeto representa uma venda com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total de vendas por vendedor. */

// const vendaTot = (arr) => {
//     let objTotal = {};
    
//     for(let i = 0; i < arr.length; i++){
//         let venda = arr[i];
//         let vendedor = venda.vendedor;
//         let valor = venda.valor;
        
//         if(objTotal[vendedor]) {
//             objTotal[vendedor] += valor;
//         } else {
//             objTotal[vendedor] = valor;
//         }
//     }
//     return objTotal;
// };
    
// let arr = [
//     {venda: 'tenis', vendedor: 'Adão', valor: 150.00},
//     {venda: 'camisa', vendedor: 'Bruno', valor: 50.00},
//     {venda: 'tenis', vendedor: 'Bruno', valor: 350.00},
//     {venda: 'calça', vendedor: 'Adão', valor: 150.00},
//     {venda: 'meia', vendedor: 'Adão', valor: 40.00}
//     ];
    
// let resultado = vendaTot(arr);
// console.log(resultado)

/*Ex. 47: Crie uma função que transforme um objeto de entrada aplicando uma função fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
resultados. */

// obj1 = {
//     a: 2,
//     b: 3,
//     c: 5,
//     d: 15,
//     e: 28
// }

// const duplicacao = (valor) => {
//     return valor*2
// }

// const operacaoObj = (obj, funcao) => {
//     let obj2 = {};
           
//     for(let chave in obj){
//          if(obj[chave]){
//             obj2[chave] = funcao(obj[chave]);
//          }
//     }

//     return obj2;
// };

// let resultado = operacaoObj(obj1, duplicacao);
// console.log(resultado);

/*Ex. 48: Você recebe dois objetos que representam o inventário de duas lojas diferentes: inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse item em estoque. Escreva uma função que combine os inventários em um único objeto. Se um item aparecer em ambas as lojas, some as quantidades. */

// let inventarioLojaA = {
//     balao: 100,
//     guarnanapo: 98,
//     vela: 130,
//     confete: 345,
//     formaBrigadeiro: 145,
//     copoTematico: 230,
//     boloFalso: 50,
//     kitPintura: 20,
//     luzLed: 123
// }

// let inventarioLojaB = {

//     balao: 390,
//     guarnanapo: 45,
//     formaBrigadeiro: 32,
//     copoTematico: 90,
//     boloFalso: 0,
//     kitPintura: 90,
//     luzLed: 12

// }

// const somaInventario = (obj1, obj2) => {
//     let inventarioSoma = {};

//     for(let item in obj1){
//         inventarioSoma[item] = obj1[item];
//     }

//     for(let item in obj2) {
//         if(obj2[item]){
//             if(inventarioSoma[item]){
//                 inventarioSoma[item] += obj2[item];
//             } else {
//                 inventarioSoma[item] = obj2[item];
//             }
//         }
//     }
//     return inventarioSoma;
// }
// let resultado = somaInventario(inventarioLojaA, inventarioLojaB);
// console.log(resultado)

/*Ex. 49: Você recebe um array de objetos representando transações financeiras. Cada transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto onde as chaves são as categorias, e os valores são arrays de transações pertencentes a essa categoria. Adicionalmente, inclua um subtotal de valores por categoria. */

// let transacoesFin = [
//     {id: 1, valor: 1000, data: "20/06/2024", categoria: "insumos"},
//     {id: 2, valor: 485, data: "20/06/2024", categoria: "insumos"},
//     {id: 3, valor: 442, data: "20/06/2024", categoria: "consumiveis"},
//     {id: 4, valor: 1020, data: "20/06/2024", categoria: "insumos"},
//     {id: 5, valor: 1854, data: "20/06/2024", categoria: "consumiveis"},
//     {id: 6, valor: 10000, data: "20/06/2024", categoria: "aluguel"},
//     {id: 7, valor: 1520, data: "20/06/2024", categoria: "pessoal"}
// ];

// const objFin = (arr) => {
//     let financeiro = {}

//     for(let i = 0; i < arr.length; i++){
//         let transacao = arr[i];
//         let categoria = transacao.categoria;
//         let valor = transacao.valor;

//         if(!financeiro[categoria]) {
//             financeiro[categoria] = { transacoes: [], subtotal: 0};
//         } 

//             financeiro[categoria].transacoes.push(transacao);
//             financeiro[categoria].subtotal += valor;

//     }
//     return financeiro;
// };

// let resultado = objFin(transacoesFin);
// console.log(resultado);

/*Ex. 50: Desenvolva um pequeno sistema de reserva de hotéis usando JavaScript. O sistema deverá ser capaz de interagir com o usuário através do console do navegador e manter um registro das reservas e hotéis disponíveis. Utilize objetos e arrays para gerenciar as informações. Não é necessário interface gráfica, apenas funcionalidade lógica. 

        1. Estrutura de Dados:
○ Hotel: Cada hotel deve ser um objeto com propriedades para id, nome, cidade, quartos totais e quartos disponiveis.
○ Reservas: Cada reserva deve ser um objeto contendo idReserva, idHotel, e nomeCliente.
        2. Funcionalidades:
○ Adicionar hotéis: Permitir que o usuário adicione novos hotéis ao sistema.
○ Buscar hotéis por cidade: Permitir que o usuário liste todos os hotéis disponíveis em uma cidade específica.
○ Fazer reserva: Permitir que um usuário faça uma reserva em um hotel. Isso deve diminuir o número de quartos disponiveis do hotel.
○ Cancelar reserva: Permitir que um usuário cancele uma reserva. Isso deve aumentar o número de quartos disponiveis no hotel correspondente.
○ Listar reservas: Mostrar todas as reservas, incluindo detalhes do hotel e do cliente.
        3. Regras de Negócio:
○ Um hotel só pode aceitar reservas se houver quartos disponíveis.
○ As reservas devem ser identificadas por um ID único e associadas a um único hotel.
        4. Desafios Adicionais (Opcionais):
○ Implementar uma função de check-in e check-out que atualize a disponibilidade de quartos.
○ Gerar relatórios de ocupação para um hotel.
○ Permitir que o usuário avalie o hotel após a estadia, e armazenar essas avaliações dentro do objeto do hotel.

*/

