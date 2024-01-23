import {renderItems, selectFilter} from './view.js';
import data from './data/dataset.js';

const root = document.getElementById("root")
root.innerHTML = renderItems(data);


const selectNome = document.querySelector("[name='selecionar__filtro']")
const button = document.getElementById("botao-limpar");
button.addEventListener('click', function () {
  selectNome.value = "default"
});

