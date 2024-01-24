import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';





const listaCartao = document.getElementById('cartoes');
listaCartao.innerHTML=renderItems(data);



//console.log(example, renderItems(data), data);
