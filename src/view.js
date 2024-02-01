export const renderItems = (data) => {
  const itens = document.createElement('ul');
  itens.classList.add('container_itens');

  data.forEach((item) => {
    itens.innerHTML += `
 <div itemscope itemtype="carreirasTech" class="container_itens">
    <dl itemscope itemtype="carreirasTech"> 
      <dt></dt><dd itemprop="imageUrl"><img src="${item.imageUrl}" itemprop="${item.imageUrl}" alt="Profissional mulher da área da tecnologia." /> </dd>
      <dt></dt> <dd itemprop="name">${item.name}</dd>
      <dt></dt> <dd itemprop="shortDescription">${item.shortDescription}</dd>
      <dt>Formação Sugerida:</dt> <dd itemprop="formacaoSugerida">${item.facts.formacaoSugerida}</dd>
      <dt>Tech Skills:</dt> <dd itemprop="techSkills">${item.facts.techSkills}</dd>
      <dt>Soft Skills:</dt> <dd itemprop="softSkills">${item.facts.softSkills}</dd>
      <dt>Média Salarial Júnior:</dt> <dd itemprop="mediaSalarialJr">R$ ${item.facts.mediaSalarialJr}</dd>
    </dl>
  </div>
 `;
  })
  return itens;
};