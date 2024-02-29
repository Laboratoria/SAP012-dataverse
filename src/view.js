export const renderItems = (data) => {

  // const cards = document.createElement('ul');
  // cards.classList.add('cartaoUnitario');

  let result = '<ul>'
  
  // colocar "itemtype" na li

  data.forEach((element) => {
    result += `
    <li class = "cardsUnitarios">
    <p>${element.name}</p>
    <img src= ${element.imageUrl} alt= "">
    <p>${element.description}</p> 
    </li>
    `;
  })
  result = result + '</ul>'
  //console.log(result)
  return result