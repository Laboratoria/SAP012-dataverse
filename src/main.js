import { filterBy, sortBy } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

let dadosExibidos = data;

const listaCartao = document.querySelector('#root');

document.addEventListener("DOMContentLoaded", () => {
  listaCartao.appendChild(renderItems(data))
})

// filtrar os dados
const botaoFiltra = document.getElementById('streaming');

botaoFiltra.addEventListener('change', (event) => {

  const valorFiltro = event.target.value;

  dadosExibidos = filterBy(data, 'streaming', valorFiltro)
  listaCartao.innerHTML = ""
  listaCartao.appendChild(renderItems(dadosExibidos))
})

// limpar  area filtrada
const limparBotao = document.getElementById('limpar-filtro');

limparBotao.addEventListener('click', () => {
  listaCartao.innerHTML = ""
  listaCartao.appendChild(renderItems(data))
})

// codigo de ordenação

const ordenacao = document.getElementById('ordenacao');

ordenacao.addEventListener('change', (event) => {
  const valorOrdenacao = event.target.value;
  const valorOrdenado = sortBy(dadosExibidos,'name',valorOrdenacao)
  listaCartao.innerHTML = ""
  listaCartao.appendChild(renderItems(valorOrdenado))
  // console.log(data,'name',valorOrdenacao, dadosExibidos)
})

// console.log(example, renderItems(data), data);
