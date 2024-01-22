export const renderItems = (data) => {
  
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  let cartoes = "";
  for (let i = 0; i < data.length; i++) {
    cartoes  += `<li class='cartao' itemscope itemtype='${data[i].id}'>`;
    cartoes  += `<section class='info-externa'>`;
    cartoes  += `<p>Classificação: <span itemprop='classification'>${data[i].extraInfo.classification}</span></p>`;
    cartoes  += `<img ${data[i].imageUrl}' alt='capa do anime ${data[i].name}'>`;
    cartoes  += `<h5><span itemprop='name'>${data[i].name}</span></h5>`;
    cartoes  += `<p>Avaliação: <span itemprop='assessment'>${data[i].extraInfo.assessment}</span></p>`;
    cartoes  += `<p><span itemprop='streaming'>${data[i].extraInfo.streaming}</span></p>`;
    cartoes  += `<p>Temporadas: <span itemprop='seasons'>${data[i].extraInfo.seasons}</span></p>`;
    cartoes  += `<button onclick='openModal()'>Curiosidades</button></section>`;

    cartoes  += `<section class='curiosidades' id='modal-${data[i].id}'>`;
    cartoes  += `<span class='close' onclick='closeModal()'>&times;</span>`;
    cartoes  += `<h6><span itemprop='shortDescription'>${data[i].shortDescription.join(', ')}</span></h6>`;
    cartoes  += `<p><span itemprop='description'>${data[i].description}</span>.</p>`;
    cartoes  += `<p>Episódios: <span itemprop='episodes'>${data[i].extraInfo.episodes}</span></p>`;
    cartoes  += `<p>Canção: <span itemprop='song'>${data[i].extraInfo.song.join(', ')}</span></p>`;
    cartoes  += `<p>Criador: <span itemprop='creator'>${data[i].facts.creator}</span></p>`;
    cartoes  += `<p>Produtor: <span itemprop='producer'>${data[i].facts.producer.join(', ')}</span></p>`;
    cartoes  += `<p>Studio: <span itemprop='studio'>${data[i].facts.studio.join(', ')}</span></p></section></li>`;
  } 
  return cartoes ;
};

