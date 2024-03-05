import { filterdata, orderdata} from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

describe('filterdata', () => {

  it('Deve retornar 2 doramas referente ao genero Romance', () => {
    const filterCards = filterdata(fakeData, 'Romance')
    expect(filterCards.length).toBe(2);
  });
});

describe('orderdata', () => { 

  it('Deve mostrar a lista em ordem crescente', () => {
    const listaOrdenada = orderdata(fakeData,'asc')
    expect(listaOrdenada[0].name).toBe('Amor oculto');
    expect(listaOrdenada[1].name).toBe('Apostando alto');
    expect(listaOrdenada[2].name).toBe('Chocolate');
  });
});

describe('orderdata', () => { 

  it('Deve mostrar a lista em ordem decrescente', () => {
    const listaOrdenada = orderdata(fakeData,'desc')
    expect(listaOrdenada[0].name).toBe('Uma Advogada Extraordinária');
    expect(listaOrdenada[1].name).toBe('Tudo bem não ser normal');
    expect(listaOrdenada[2].name).toBe('The good bad mother');
  });
});