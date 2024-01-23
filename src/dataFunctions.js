export const sortBy = (data, value, order) => {
  data.sort(function ordenacao(a,b) {
    if(value === "altura"){
      return a.facts.altura > b.facts.altura;
    }else if(value === "preco"){
      return a.facts.preco > b.facts.preco;
    }else {
      return a.facts.facilidadeCriacao > b.facts.facilidadeCriacao;
    }
  })
  if(order === "desc"){
    return data.reverse()
  }
  return data;
};


export const filterBy = (list, value, filterBy) => {
  return list.filter(function (itemList){
    if("facilidadeCriacao" === filterBy){
      return value === itemList.facilidadeCriacao
    }else if("capturaPresas" === filterBy){
      return value === itemList.capturaPresas
    }else if ("tempoDeVida" === filterBy){
      return value === itemList.tempoDeVida
    }else {
      return true
    }
  })
};


//export const filterby = (data, value) => {
//  return [];
//};
