// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const computeStats = (data) => {
  const classifications = data.map(obj => obj.extraInfo.classification);

  const count = classifications.reduce((accumulator, classification)=>{
    accumulator[classification] =(accumulator[classification] || 0) + 1;
    return accumulator;
  },{});
  const productCount = classifications.length;

  const percents =Object.keys(count).reduce((accumulator,classification)=>{
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