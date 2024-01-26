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

function filter(event) {
  event.preventDefault();
  const filter = document.querySelector('[name= "filtro"]').value;
  let filteredData = null;

  if (filter === "name") {
    const anime = prompt("Por favor, digite o nome do anime", "Naruto");
    if (anime !== null) {
      filteredData = filterBy(data, filter, anime);
    }
  }
  if (filteredData !== null)
    listaCartao.innerHTML = renderItems(filteredData);
}


