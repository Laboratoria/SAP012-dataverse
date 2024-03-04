import { renderItems } from './view.js';
import data from './data/dataset.js';
import { filterdata, orderdata, computStats} from './dataFunctions.js'; 

const listaCard = document.querySelector('#root');
const filter = document.querySelector('#filter');
const order = document.querySelector('#order');
const button = document.querySelector('[data-testid="button_clear"]')
const calculo_estatistica = document.querySelector('.calculo_estatistica');

let dadosExibidos = data.slice();

const totalcards = (data) => {
  const numbercards = computStats(data);
  calculo_estatistica.innerHTML=`${numbercards} cards`;
};

document.addEventListener("DOMContentLoaded", () => {
  listaCard.appendChild(renderItems(dadosExibidos));
  totalcards(data);

  filter.addEventListener('change', (event) => {
    dadosExibidos = filterdata(data, event.target.value);
    listaCard.innerHTML = ""
    listaCard.appendChild(renderItems(dadosExibidos))
    totalcards(dadosExibidos);
  });
  // order.addEventListener('change', (event) =>{
  //   console.log (' vai ordenar', event.target.value);
  //   const newData = orderdata(data, event.target.value);
  //   listaCard.innerHTML = "";
  //   listaCard.appendChild(renderItems(newData));

  order.addEventListener('change', (event) => {
    dadosExibidos = orderdata(dadosExibidos, event.target.value);
    listaCard.innerHTML = "";
    listaCard.appendChild(renderItems(dadosExibidos));
    totalcards(dadosExibidos);
    
  });
  button.addEventListener('click', () => {
    listaCard.innerHTML = "";
    dadosExibidos = data.slice();
    listaCard.appendChild(renderItems(data));
    totalcards(dadosExibidos);
  });
});

