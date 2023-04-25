//Buscando a lista de um arrays usando for

let msg=document.getElementById('msg')

const usuarios=[
    {nome:"Huguinho", idade:18},
    {nome:"Zezinho", idade:19},
    {nome:"Luizinho", idade:20},
];

const Users = usuarios.length;

for(let i=0; i<Users; i++){
    msg.innerHTML += `<p> ${usuarios[i].nome} ${usuarios[i].idade} </p>`
}

/*Criando um array de imagens*/
var imagens=[
    'img/1.jpg',
    'img/2.png',
    'img/3.png',
];

/*Declarando variáveis*/
var Index = 0;
var time = 2000;

/*Criando uma função*/
function slideShow(){
    document.getElementById('image').src = imagens[Index]; /*Pega id e o caminho */
    Index++; /*Incrementa*/
    if (Index == imagens.length){Index = 0;} /*Verifica se tem imagens e conta*/
    setTimeout("slideShow()", time); /*Definindo o tempo de 2 milesegundos*/
}

slideShow(); /*Chamando a função*/



