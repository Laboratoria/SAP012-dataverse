//esta função recebe a matriz de dados para renderizar os
//elementos de cada item e deve retornar um elemento DOM ou uma string de HTML.

import { filterData, sortData, computeStats } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

console.log(fakeData);

describe ('testes da função filterData', () => {

  it('deve retornar 3 celebridades quando o usuário escolher brasileira', () => {
    const dadosFiltrados = filterData(fakeData, 'nacionalidade', 'Brasileira');
    expect(dadosFiltrados.length).toBe(3);
  });

  it('deve retornar 0 celebridades quando o usuário escolher cubana', () => {
    const dadosFiltrados = filterData(fakeData, 'nacionalidade', 'Cubana');
    expect(dadosFiltrados.length).toBe(0);
  });
});

describe('testes da função sortData', () => {

  it('deve retornar o nome da função', () => {
    expect(sortData()).toBe('sortData');
  });
});

describe('testes da função computeStats', () => {

  it('deve retornar o nome da função', () => {
    expect(computeStats()).toBe('computeStats');
  });
});