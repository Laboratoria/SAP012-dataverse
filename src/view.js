export const renderItems = (data) => {
  
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  let cartoes = '<ul id="cartoes">';
  data.forEach(element =>  {
    cartoes  +=   `<li class="cartao" itemscope itemtype="${element.id}">
                  <section class="info-externa">
                  <p><span itemprop="classification">${element.extraInfo.classification}</span></p>
                  <figure> <img  itemprop="imageUrl" src="${element.imageUrl}"  title="${element.name}"></figure>
                  <h5><span itemprop="name">${element.name}</span></h5>
                  <p><span itemprop="assessment">${parseFloat(element.extraInfo.assessment)}</span></p>
                  <p><span itemprop="streaming">${element.extraInfo.streaming}</span></p>
                  <p>Temporadas <span itemprop="seasons">${element.extraInfo.seasons}</span></p>
                  <button onclick="openModal('${element.id}')">Curiosidades</button></section>

                  <section class="curiosidades" id="modal-${element.id}">
                  <span class="close" onclick="closeModal('${element.id}')">&times;</span>
                  <h6><span itemprop="shortDescription">${element.shortDescription}</span></h6>
                  <p><span itemprop="description">${element.description}</span>.</p>
                  <p>Episódios: <span itemprop="episodes">${element.extraInfo.episodes}</span></p>
                  <p>Canção: <span itemprop="song">${element.extraInfo.song.join(", ")}</span></p>
                  <p>Criador: <span itemprop="creatorOfManga">${element.facts.creatorOfManga}</span></p>
                  <p>Produtor: <span itemprop="producerOfManga">${element.facts.producerOfManga}</span></p>
                  <p>Studio: <span itemprop="studioOfManga">${element.facts.studioOfManga}</span></p></section></li>`;
  } );
  cartoes +='</ul>'
  return cartoes ;
};

export const renderListClassification = (percents)=>{
  const ul = document.createElement('ul');
  ul.id = "listaClassificacao";

  for(const classification in percents){
    const li = document.createElement('li');
    li.textContent = `Classicação ${classification}: ${percents[classification].toFixed(2)}%`;
    ul.appendChild(li);
  }
  return ul;
}

