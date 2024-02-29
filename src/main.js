import { filterData, sortData } from './dataFunctions.js';
//, sortData, computeStats
import { renderItems } from './view.js';

import data from './data/dataset.js';

//console.log(example, renderItems(data), data);

//      renderiza os cards pelo root/html
const listaCards = document.querySelector('#root');
let dadosRenderizados = data; // Variável para armazenar os dados renderizados

const mostraCards = (dados) => {
  listaCards.innerHTML = renderItems(dados);
};

mostraCards(dadosRenderizados);

//      filtro nacionalidade - mostrando opções - funcionando corretamente
const filtroNacionalidade = document.getElementById('filtroNacionalidade');
filtroNacionalidade.addEventListener('change', (event) => {
  const valorDoFiltro = event.target.value;
  const cardsFiltrados = filterData(data, 'nacionalidade', valorDoFiltro);
  dadosRenderizados = cardsFiltrados; // Atualiza os dados renderizados
  mostraCards(dadosRenderizados);
});

//      filtro ordem - mostrando opções - funcionando corretamente
const filtroOrdem = document.getElementById('filtroOrdem');
filtroOrdem.addEventListener('change', () => {
  const valorDaOrdem = filtroOrdem.value;
  dadosRenderizados = sortData(dadosRenderizados, 'name', valorDaOrdem); // Ordena os dados renderizados
  mostraCards(dadosRenderizados);
});

//      botão de limpar / definindo valor índece zero
const limparSelecoes = document.getElementById('botaoLimpar');
limparSelecoes.addEventListener('click', () => {

  // // Define o valor selecionado como a primeira opção (índice 0)
  filtroNacionalidade.selectedIndex = 0;
  filtroOrdem.selectedIndex = 0;
  // Chamamos manualmente o evento 'change' para atualizar a lista de cartões
  filtroNacionalidade.dispatchEvent(new Event('change'));
  filtroOrdem.dispatchEvent(new Event('change'));

  //rever e corrigir essa segunda parte, de acordo com o filtro ordem
  //limpa e renderiza todos os cards, porém mantem a última configuração
  dadosRenderizados = data; // Reinicia os dados renderizados
  //listaCards.innerHTML = renderItems(data)
  mostraCards(dadosRenderizados);
});

//      filtro ordem - depois do filtro nacionalidade pronto
// const filtroOrdem = document.getElementById('filtroOrdem');
// filtroOrdem.addEventListener('change', (event) => {
//   const valorDoFiltro = event.target.value;
//   const cardsOrdenados = sortData(data, 'name', valorDoFiltro);
//   mostraCards(cardsOrdenados);
// });


// const filtroOrdem = document.getElementById('filtroOrdem');
// filtroOrdem.addEventListener('change', () => {
//   const valorDoFiltro = filtroNacionalidade.value;
//   const cardsFiltrados = filterData(data, 'nacionalidade', valorDoFiltro);
//   const valorDaOrdem = filtroOrdem.value;
//   const cardsOrdenados = sortData(cardsFiltrados, 'name', valorDaOrdem);
//   mostraCards(cardsOrdenados);
// });






//      segundo botão de limpar
// const limparSelecoes = document.getElementById('botaoLimpar');
// limparSelecoes.addEventListener('click', () => {
//   document.getElementById("todos").selected = "true";
//   //
// });


//      primeiro botão de limpar - zera o valor de todo select
// const limparSeleções = document.getElementById('botaoLimpar');
// limparSeleções.addEventListener('click', () => {
//     const valorDoFiltro = event.target.value;
//     listaCards.innerHTML = "";
//     filtroOrdem.innerHTML = "";
//     filtroNacionalidade.innerHTML = "brasileira";
//     listaCards.innerHTML = renderItems(data)
// });


//          modificar para pop-up
// let button = document.querySelector('#button');
// let msg = document.querySelector('#message');

// button.addEventListener('click', () => {
//     msg.classList.toggle('reveal');
// })

// target: elemento HTML com id='button'
// function: função anônima (arrow function) que configura o código necessário para revelar/ocultar a mensagem
// useCapture: deixado com o valor padrão de false

//usando o métoto addEventListener:
//object.addEventListener("mouseover", myScript);