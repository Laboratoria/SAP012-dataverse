// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const computeStats = (data) => {
  const classifications = data.map(obj => obj.extraInfo.classification);

  const count = {};
  for (let i = 0; i < classifications.length; i++) {
    const classification = classifications[i];
    if (count[classification] === undefined) {
      count[classification] = 1;
    }
    else {
      count[classification]++;
    }
  }
  const percents = {};
  for (const classification in count) {
    percents[classification] = (count[classification] / classifications.length) * 100;
  }
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


// }
// export const sortBy =(data,sortBy,sortOrder)=>{
//   let direction;
//   if(order === 'asc'){
//     direction =1;}
//   else
//   {direction = -1;}

//   let sortedData = data.sort((a,b)=>{
//     if(a[filter] < b[filter]){
//       return - 1 * direction;
//     }
//     if(a[filter] > b[filter]){
//       return 1 * direction;
//     }
//     return 0;

//   });
//   return sortedData;

// }