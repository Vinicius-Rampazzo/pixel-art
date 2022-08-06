// aqui algumas variaveis que criei para
// poder fazer o quadrado com 5 de largura e 5 da altura.
// adicionando readme.

const divPai = document.querySelector('#pixel-board');
const divFilho1 = document.createElement('div');
const divFilho2 = document.createElement('div');
const divFilho3 = document.createElement('div');
const divFilho4 = document.createElement('div');
const divFilho5 = document.createElement('div');
divPai.appendChild(divFilho1) && divPai.appendChild(divFilho2) && divPai.appendChild(divFilho3) && divPai.appendChild(divFilho4) && divPai.appendChild(divFilho5);
// aqui criei mais variaveis, para facilitar
// o uso delas em qualquer funçao
const cor1 = document.getElementById('cor1');
const cor2 = document.getElementById('cor2');
const cor3 = document.getElementById('cor3');
const cor4 = document.getElementById('cor4');
const cor5 = document.getElementById('cor5');

const arrayDeDivs = [divFilho1, divFilho2, divFilho3, divFilho4, divFilho5];

function coresDasPaletas() {
  cor1.style.backgroundColor = 'black';
  cor2.style.backgroundColor = 'rgb(214, 11, 11)';
  cor3.style.backgroundColor = 'rgb(102, 68, 17)';
  cor4.style.backgroundColor = 'rgb(224, 167, 81)';
  cor5.style.backgroundColor = 'white';
}
coresDasPaletas();

function criandoQuadradoDivs() {
  for (let index = 0; index < arrayDeDivs.length; index += 1) {
    arrayDeDivs[index].classList.add('pixel');
  }
  for (let index = 1; index <= 220; index += 1) {
    divPai.innerHTML += '<div class="pixel"></div>';
  }
}
criandoQuadradoDivs();

function criandoClasseSelected() {
  const minhaClasseSelected = document.getElementById('cor1');
  minhaClasseSelected.classList.add('selected');
}
criandoClasseSelected();

function clicandoParaSelecionar2() {
  cor2.classList.add('selected');
  cor1.classList.remove('selected');
  cor3.classList.remove('selected');
  cor4.classList.remove('selected');
}
cor2.addEventListener('click', clicandoParaSelecionar2);

function clicandoParaSelecionar3() {
  cor3.classList.add('selected');
  cor1.classList.remove('selected');
  cor2.classList.remove('selected');
  cor4.classList.remove('selected');
}
cor3.addEventListener('click', clicandoParaSelecionar3);

function clicandoParaSelecionar4() {
  cor4.classList.add('selected');
  cor1.classList.remove('selected');
  cor2.classList.remove('selected');
  cor3.classList.remove('selected');
}
cor4.addEventListener('click', clicandoParaSelecionar4);


function clicandoParaSelecionar1() {
  cor1.classList.add('selected');
  cor2.classList.remove('selected');
  cor3.classList.remove('selected');
  cor4.classList.remove('selected');
}
cor1.addEventListener('click', clicandoParaSelecionar1);

function clicandoParaSelecionar5() {
  cor5.classList.add('selected');
  cor1.classList.remove('selected');
  cor2.classList.remove('selected');
  cor3.classList.remove('selected');
  cor4.classList.remove('selected');
}
cor5.addEventListener('click', clicandoParaSelecionar5);


// esse .target é para descobrir o alvo,
// sem ele nada acontece porque precisamos saber onde
// está o objeto para o tipo do evento, colocando o
// .target
function pintandoPixels(objeto) {
  objeto.target.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
}

const pixels = document.getElementsByClassName('pixel');

const ativandoFuncaoPintandoPixels = () => {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].addEventListener('click', pintandoPixels);
  }
};

ativandoFuncaoPintandoPixels();

function apagandoCores() {
  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].style.backgroundColor = 'white';
  }
}

const botao = document.querySelector('#clear-board');
botao.addEventListener('click', apagandoCores);

const quantidadePixels = () => {
  divPai.style.width = '500px';
  divPai.style.height = '500px';

  for (let index = 1; index <= 45; index += 1) {
    divPai.innerHTML += '<div class="pixel"></div>';
  }
};

const buttonVQV = document.querySelector('#generate-board');
buttonVQV.addEventListener('click', quantidadePixels);
