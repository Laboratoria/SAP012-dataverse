import { computeStats, filterBy } from './dataFunctions.js';

import { renderItems, renderListClassification } from './view.js';

import data from './data/dataset.js';

//estatistica
const classificationList = document.getElementById('listaClassificacao');
classificationList.innerHTML = renderListClassification(computeStats(data));

//container dos cartões
const listaCartao = document.getElementById('root');

//lipmpar dados
const limparFiltrosOrdenacao = (event) => {
  if(event !== null)
  event.preventDefault();
  listaCartao.innerHTML = renderItems(data);
}

limparFiltrosOrdenacao(null);

document.getElementById('limpa-filtros').addEventListener('click',limparFiltrosOrdenacao);
document.getElementById('limpa-ordenacao').addEventListener('click',limparFiltrosOrdenacao);

//filtros
const filterButton = document.querySelector('[value="Filtrar"]');
filterButton.addEventListener('click', filter);

const filterSelect = document.querySelector('[name="filtro"]');
filterSelect.addEventListener('change', function(event) {
  event.preventDefault();
  const filter = this.value;
  const filterValueElement = document.querySelector('#filterValue');
  let options = [];

  if (filter === "name") {
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
  const filter = document.querySelector('[name= "filtro"]').value;
  const filterValue = document.querySelector('#filterValue').value;
   let filteredData = null;

  if (filterValue !== "") {
    filteredData =filterBy(data,filter,filterValue);
  }
  if (filteredData !== null)
  listaCartao.innerHTML = renderItems(filteredData);
}

//ordenação

//modal
window.openModal = (id) => {
  let modal = document.querySelector('#modal-' + id);
  modal.style.display = 'block';
}

window.closeModal = (id) => {
  let modal = document.querySelector('#modal-' + id);
  modal.style.display = 'none';
}