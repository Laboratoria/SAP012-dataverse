// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

//      fitro nacionalidade - funcionando
//dados - filtro - valor
export const filterData = (data, filterBy, value) => {
  //console.log(data)
  const dadosFiltrados = data.filter(
    (artista) => artista.facts[filterBy] === value
  );
  //console.log(dadosFiltrados)
  return dadosFiltrados;
}

// // dados - ordenação - tipo asc/desc
// export const sortData = (data, sortBy, sortOrder) => {
// //chamar a função aqui
// data.sort(
//  (a, b) => (a.name - b.name)-- -
// );
// return "sortData"
// }


//      fitro ordem - funcionando
// // dados - ordenação - tipo asc/desc
export const sortData = (data, sortBy, sortOrder) => {
  //a função aceita três parametros - matriz, criterio e ordem da classificação
  return data.sort((a, b) => {
    //faz a comparação
    if (sortOrder === 'asc') {
      return a[sortBy].localeCompare(b[sortBy]);
      //localeCompare - compara os valores de sortBy em 'a e b' e retorna o valor da ordem relativa dos elementos
    } else if (sortOrder === 'desc') {
      return b[sortBy].localeCompare(a[sortBy]);
      //compara e retorna o inverso
    }
  });
};


// // cálculos estatisticos básicos - esta função deve usar o método reduce.
// export const computeStats = (data) => { 
//   return "computeStats"
// }


