import { example, anotherExample } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

// console.log(fakeData);

describe('example', () => {
  fakeData

  it('returns `example`', () => {
    fakeData.length;
    expect(example()).toBe('example');
  });
});

describe('anotherExample', () => {

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
