export const renderItems = (data) => {

  const doramacard = document.createElement('ul');
  doramacard.classList.add('container-doramacard');

  data.forEach(itemData => {
    doramacard.innerHTML += `
            <li itemscope itemtype="https://www.imdb.com/list/ls086959587/" class="container_li">
                <dl itemscope itemtype="https://www.imdb.com/list/ls086959587/">
                    <dt><img src="${itemData.imageUrl}" alt="Imagem do card" itemprop="imageUrl" class="img_card" /></dt>
                    <dt itemprop="sort-order">${itemData.name}</dt>
                    <dt>Avaliação:</dt>
                      <dd itemprop="facts">${itemData.facts.doramaRating}</dd>
                    <dt>Descrição:</dt>
                      <dd itemprop="description">${itemData.shortDescription}</dd>
                 </dl>
            </li>`;
  })
  return doramacard;
};

