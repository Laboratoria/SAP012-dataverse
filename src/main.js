import { computeStats, filterBy } from './dataFunctions.js';

import { renderItems, renderListClassification } from './view.js';

import data from './data/dataset.js';

const listaCartao = document.getElementById('root');
const limparFiltros = () => {
  listaCartao.innerHTML = renderItems(data);
}

limparFiltros();

const classificationList = document.getElementById('listaClassificacao');
classificationList.innerHTML = renderListClassification(computeStats(data));

const filterButton = document.querySelector('[value="Filtrar"]');
filterButton.addEventListener('click', filter);

document.querySelector('[name="filtro"]').addEventListener('change', function() {
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