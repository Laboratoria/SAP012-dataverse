import { computeStats, filterBy, sortBy } from './dataFunctions.js';

import { renderItems, renderListClassification } from './view.js';

import data from './data/dataset.js';


//container dos cartões
const listaCartao = document.getElementById('root');

//estatistica
const classificationList = document.querySelector('.estatisticas');
classificationList.appendChild(renderListClassification(computeStats(data)));

//filtros e ordenação
const itemFilter= document.querySelector('#filterValue');
itemFilter.addEventListener('change', filter);

const itemSortOrder = document.querySelector('[name="sort-order');
itemSortOrder.addEventListener('change', filter);

const filterSelect = document.querySelector('[name="filtro"]');
filterSelect.addEventListener('change', function(event) {
  event.preventDefault();
  const filter = this.value;
  const filterValueElement = document.querySelector('#filterValue');
  let options = [];

  if(filter === ""){
    options = [""];
  } else if (filter === "name") {
    options = data.map(item => item.name);
  } else if (filter === "streaming") {
    options = ["Crunchyroll", "Netflix", "Star+"];
  } else if (filter === "classification") {
    options = ["L", "A10", "A12", "A14", "A16", "A18"];
  }

  filterValueElement.innerHTML = options.map(option => `<option value="${option}">${option}</option>`).join('');
});

filterSelect.dispatchEvent(new Event('change'));

function filter(event) {
  event.preventDefault();
  const filter = filterSelect.value;
  const filterValue = itemFilter.value;
  let filteredData = null;

  if (filterValue !== "") {
    filteredData =filterBy(data,filter,filterValue);
  }
  if (filteredData === null){
    filteredData = data;
  } 

  const sortOrder = itemSortOrder.value;
  if(sortOrder !== ""){
    listaCartao.innerHTML = renderItems(sortBy(filteredData, 'name',sortOrder));
  }else{
    listaCartao.innerHTML = renderItems(filteredData);
  }
    
}

//lipmpar dados
const limparFiltrosOrdenacao = (event) => {
  if(event !== null)
    event.preventDefault();
  itemSortOrder.value = "";
  filterSelect.value = "";
  itemFilter.value = "";
  listaCartao.innerHTML = renderItems(data);
}

limparFiltrosOrdenacao(null);

document.getElementById("limpa-filtros").addEventListener('click',limparFiltrosOrdenacao);
document.getElementById('limpa-ordenacao').addEventListener('click',limparFiltrosOrdenacao);

//modal
window.openModal = (id) => {
  const modal = document.querySelector("#modal-" + id);
  modal.style.display = "block";
}

window.closeModal = (id) => {
  const modal = document.querySelector("#modal-" + id);
  modal.style.display = "none";
}