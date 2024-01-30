// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const computeStats = (data) => {
  const classifications = data.map(obj => obj.extraInfo.classification);

  const count = classifications.reduce((accumulator, classification)=>{
    accumulator[classification] =(accumulator[classification] || 0) + 1;
    return accumulator;
  },{});
  const productCount = classifications.length;

  const percents = Object.keys(count).reduce((accumulator,classification)=>{
    accumulator[classification] = (count[classification] / productCount) * 100;
    return accumulator;
  }, {});
  return percents; 
};

export const filterBy = (data, filterBy, value) => {
  const filteredData = data.filter(item => {
    if(filterBy in item){
      return item[filterBy].includes(value);
    }else if('facts' in item && filterBy in item.facts){
      return item.facts[filterBy] ===value;
    }else if ('extraInfo' in item && filterBy in item.extraInfo){
      return item.extraInfo[filterBy] === value;
    }
    return false;
  });

  return filteredData;
}
/*export const sortBy = (data, sortBy, sortOrder ) => {
  const ordenacao = [...data].sort((a, b) => {
    let result = 0;
    if (a.extraInfo[sortBy] < b.extraInfo[sortBy]) {
      if (sortOrder === 'asc') {
        result = -1;
      } else {
        result = 1;
      }
    } else if (a.extraInfo[sortBy] > b.extraInfo[sortBy]) {
      if (sortOrder === 'asc') {
        result = 1;
      } else {
        result = -1;
      }
    }
    return result;
  });
  if (sortOrder === 'desc') {
    ordenacao.reverse();
  }
  return ordenacao;
};*/

// const ordenarPorStreaming = (a, b, ordem) => {
//   const streamingA = a.extraInfo.streaming.toUpperCase();
//   const streamingB = b.extraInfo.streaming.toUpperCase();

//   let comparacao = 0;
//   if (streamingA > streamingB) {
//     comparacao = 1;
//   } else if (streamingA < streamingB) {
//     comparacao = -1;
//   }

//   return (
//     (ordem === 'desc') ? (comparacao * -1) : comparacao
//   );
// };

// // Função principal para ordenar
// export const sortBy = (data, sortBy, sortOrder) => {
//   if (sortBy === 'streaming') {
//     return data.sort((a, b) => ordenarPorStreaming(a, b, sortOrder));
//   }
// };

// Função principal para ordenar
export const sortBy = (data, sortBy, sortOrder) => {
  if (sortBy === 'name') {
    return data.sort((a, b) => ordenarPorNome(a, b, sortOrder));
  } else if (sortBy === 'streaming') {
    return data.sort((a, b) => ordenarPorStreaming(a, b, sortOrder));
  } else if (sortBy === 'classification') {
    return data.sort((a, b) => ordenarPorClassificacao(a, b, sortOrder));
  }
};

//  ordenar por nome
const ordenarPorNome = (a, b, ordem) => {
  const nomeA = a.name.toUpperCase();
  const nomeB = b.name.toUpperCase();

  let comparacao = 0;
  if (nomeA > nomeB) {
    comparacao = 1;
  } else if (nomeA < nomeB) {
    comparacao = -1;
  }

  return (
    (ordem === 'desc') ? (comparacao * -1) : comparacao
  );
};

// ordenar por streaming
const ordenarPorStreaming = (a, b, ordem) => {
  const streamingA = a.extraInfo.streaming.toUpperCase();
  const streamingB = b.extraInfo.streaming.toUpperCase();

  let comparacao = 0;
  if (streamingA > streamingB) {
    comparacao = 1;
  } else if (streamingA < streamingB) {
    comparacao = -1;
  }

  return (
    (ordem === 'desc') ? (comparacao * -1) : comparacao
  );
};

// ordenar por classificação
const ordenarPorClassificacao = (a, b, ordem) => {
  const classificacoes = ['L', 'A10', 'A12', 'A14', 'A16', 'A18'];
  const classificacaoA = classificacoes.indexOf(a.extraInfo.classification);
  const classificacaoB = classificacoes.indexOf(b.extraInfo.classification);

  let comparacao = 0;
  if (classificacaoA > classificacaoB) {
    comparacao = 1;
  } else if (classificacaoA < classificacaoB) {
    comparacao = -1;
  }

  return (
    (ordem === 'desc') ? (comparacao * -1) : comparacao
  );
};


