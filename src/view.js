export const renderItems = (data) => {
  
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  let cartoes = '<ul id="cartoes">';
  for (let i = 0; i < data.length; i++) {
    cartoes  +=   `<li class="cartao" itemscope itemtype="${data[i].id}">
                  <section class="info-externa">
                  <p><span itemprop="classification">${data[i].extraInfo.classification}</span></p>
                  <figure> <img  itemprop="imageUrl" src="${data[i].imageUrl}"  title="${data[i].name}"></figure>
                  <h5><span itemprop="name">${data[i].name}</span></h5>
                  <p><span itemprop="assessment">${data[i].extraInfo.assessment}</span></p>
                  <p><span itemprop="streaming">${data[i].extraInfo.streaming}</span></p>
                  <p>Temporadas <span itemprop="seasons">${data[i].extraInfo.seasons}</span></p>
                  <button onclick="openModal('${data[i].id}')">Curiosidades</button></section>

                  <section class="curiosidades" id="modal-${data[i].id}">
                  <span class="close" onclick="closeModal('${data[i].id}')">&times;</span>
                  <h6><span itemprop="shortDescription">${data[i].shortDescription}</span></h6>
                  <p><span itemprop="description">${data[i].description}</span>.</p>
                  <p>Episódios: <span itemprop="episodes">${data[i].extraInfo.episodes}</span></p>
                  <p>Canção: <span itemprop="song">${data[i].extraInfo.song.join(", ")}</span></p>
                  <p>Criador: <span itemprop="creatorOfManga">${data[i].facts.creatorOfManga}</span></p>
                  <p>Produtor: <span itemprop="producerOfManga">${data[i].facts.producerOfManga}</span></p>
                  <p>Studio: <span itemprop="studioOfManga">${data[i].facts.studioOfManga}</span></p></section></li>`;
  } 
  cartoes +='</ul>'
  return cartoes ;
};

export const renderListClassification = (percents)=>{
  let items ="";
  for(const classification in percents){
    items += `<li>Classificação ${classification}: ${percents[classification].toFixed(2)}%</li>`;
  }
  return items;
}

