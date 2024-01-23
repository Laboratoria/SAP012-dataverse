# Dataverse

## Índice

* [1. Preâmbulo](#1-preâmbulo)
* [2. Resumo do projeto](#2-resumo-do-projeto)
* [3. Considerações gerais](#3-considerações-gerais)
* [10. Considerações para pedir seu Feedback do Projeto](#10-considerações-para-pedir-seu-feedback-do-projeto)

***


<!-- * [ ] Cumpre todos os critérios mínimos de aceitação ao executar `npm run test:oas`
* [ ] Cumpre todos os testes _end to end_ ao executar `npm run test:e2e`
* [ ] Cumpre todos os testes unitários ao executar `npm run test` e
  que têm uma cobertura de 70% de _statements_ (_sentenças_),
  _functions_ (_funções_), _lines_ (_linhas_), e _branches_
* [ ] Está livre de _erros_ de `eslint` ao executar `npm run pretest`
* [ ] Está enviado no GitHub e publicado no GitHub Pages
* [ ] Captura de tela do prompt utilizado para gerar os dados.
* Tem um `README.md` com o seguinte:
  - [ ] _Definição do produto_ clara e informativa
  - [ ] Histórias de usuário
  - [ ] Um _Design da Interface de Usuário_ (protótipo de alta fidelidade)
  - [ ] A lista de problemas que você detectou por meio de testes
    de usabilidade no `README.md`
* Tem uma UI que cumpre as funcionalidades:
  - [ ] Mostra lista com dados e/ou indicadores
  - [ ] Permite ordenar dados por um ou mais campos (ascendente e descendente)
  - [ ] Permite filtrar dados com base em uma condição
  - [ ] Permite limpar os filtros com um botão
  - [ ] É _responsiva_ -->

## 1. Preâmbulo

Segundo a [Forbes](https://www.forbes.com/sites/bernardmarr/2018/05/21/how-much-data-do-we-create-every-day-the-mind-blowing-stats-everyone-should-read),
90% dos dados existentes hoje foram criados nos últimos dois anos.
A cada dia, geramos 2,5 milhões de terabytes de dados, um número sem
precedentes.

No entanto, os dados por si só têm pouca utilidade. Para que essas grandes
quantidades de dados se transformem em **informação** fácil de ler para
as usuárias, precisamos entender e processar esses dados. Uma maneira
simples de fazer isso é criando _interfaces_ e _visualizações_.

Na imagem a seguir, você poderá ver como, com os dados mostrados à esquerda,
é possível construir uma interface amigável e compreensível para as usuárias,
à direita.

![pokemon-data-to-ui](https://user-images.githubusercontent.com/12631491/218505816-c6d11758-9de4-428f-affb-2a56ea4d68c4.png)

## 2. Resumo do projeto

Neste projeto, você **construirá um _site_ para visualizar um
_conjunto de dados_** que você irá gerar através do [prompting](https://www.itmadrid.com/que-es-un-prompt-en-inteligencia-artificial-ia/).
Este site será adaptado para atender às necessidades que você
descobrir que suas usuárias têm.

Além disso, neste projeto, você utilizará ferramentas de
[inteligência artificial](https://es.wikipedia.org/wiki/Inteligencia_artificial)
como [ChatGPT](https://openai.com/chatgpt), [ExplainDev](https://explain.dev/),
entre outras, para gerar um conjunto de dados em um arquivo javascript.

O propósito de gerar os dados dessa maneira é oferecer a oportunidade
de se envolver com o uso de ferramentas impulsionadas pela inteligência
artificial, assim como com [técnicas de prompting](https://learnprompting.org/pt/docs/intro).

Como entrega final, você terá um site que permitirá **visualizar os dados,
filtrá-los, ordená-los e calcular estatísticas**. Por estatísticas,
referimo-nos a diferentes cálculos que você pode fazer com os dados
para mostrar informações ainda mais relevantes às usuárias (média,
valor máximo ou mínimo, etc).

## 3. Considerações gerais

* Este projeto deve ser realizado em duplas.
* O tempo estimado para concluir o projeto é de 4 a 5 Sprints.
* O tempo estimado que você deve dedicar à [geração de dados](#geração-dos-dados)
  é de no máximo dois dias. Além disso, no final do projeto, você deve
  apresenta um [screenshot do prompt utilizado](#prompt-utilizado).
* Se perceber que vai demorar mais tempo,
  deverá usar os dados de exemplo que encontrará
  neste caminho: `./src/data/dataset.js`.
* O projeto será entregue ao enviar seu código para o GitHub (commit/push) e a
  interface será implantada usando o [GitHub Pages](https://pages.github.com/).

## 4. Funcionalidades

Como entrega final, você terá um site que permitirá **visualizar os dados,
filtrá-los, ordená-los e calcular estatísticas**.

Aqui estão definidas com mais detalhes as funcionalidades mínimas que devem ser
implementadas:

* A aplicação deve permitir que a usuária veja os itens dos dados em uma
  visualização, que pode ser [tipo cartões](https://brasil.uxdesign.cc/https-brasil-uxdesign-cc-cards-boas-praticas-6ae813acf8cf)
  ou qualquer outra forma que você decida como a mais apropriada
  (mas a partir daqui chamamos os itens de "cartões"). **Cada um dos
  cartões deve estar contido em um elemento `<li>` e estes, por sua vez,
  contidos em um elemento `<ul>`.**

* O elemento `<ul>` deve ser um filho de um elemento com o atributo _id_
  com o valor "root". **Este é um passo importante para que sua**
  **aplicação tenha a estrutura necessária.**

* Os cartões devem destacar os valores das propriedades dos dados que
  interessariam à usuária ver. Por exemplo: nome, data, imagem, etc.
  **Se você filtrar ou ordenar por uma propriedade, o cartão deve mostrar
  o valor dessa propriedade para a usuária.**

* A interface deve estruturar semanticamente os dados usando o padrão
  [microdados](https://developer.mozilla.org/en-US/docs/Web/HTML/Microdata).
  É obrigatório usar pelo menos os atributos
  [`itemscope`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/itemscope),
  [`itemtype`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/itemtype)
  e o atributo
  [`itemprop`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/itemprop).

  Por exemplo, os seguintes dados correspondentes a Ada Lovelace:

  ```json
    {
      "id": "ada-lovelace",
      "name": "Ada Lovelace",
      "shortDescription": "Pioneira da computação, foi a primeira programadora.",
      "description": "Uma visionária do século XIX...",
      "imageUrl": "URL_DA_IMAGEM_GERADA",
      "facts": {
        "yearOfBirth": 1843,
        "placeOfBirth": "Londres, Inglaterra",
        "mainField": "Ciência da Computação",
      }
    }
  ```

  podem ser estruturados semanticamente em HTML como:

  ```html
  <dl itemscope itemtype="MulheresNaTecnologia">
    <img src="URL_DA_IMAGEM_GERADA" alt="Ada Lovelace" />
    <dt>Nome:</dt><dd itemprop="name">Ada Lovelace</dd>
    <dt>Descrição:</dt><dd itemprop="description">Pioneira da computação, foi a primeira programadora.</dd>
    <dt>Ano de nascimento:</dt><dd itemprop="yearOfBirth">1843</dd>
    <dt>Local de nascimento:</dt><dd itemprop="placeOfBirth">Londres, Inglaterra</dd>
    <dt>Área principal:</dt><dd itemprop="mainField">Ciência da Computação</dd>
  </dl>
  ```

* A aplicação deve calcular e exibir uma estatística dos dados. Pode
  ser uma propriedade calculada de cada item, como uma propriedade adicional
  (por exemplo, o índice de massa corporal de cada Pokémon) ou estatísticas
  dos dados completos (por exemplo, total de pessoas nascidas nos anos 80).


#### Histórias de usuário

Depois de entender as necessidades das suas usuárias, escreva as
[Histórias de Usuário](https://pt.wikipedia.org/wiki/Hist%C3%B3ria_de_usu%C3%A1rio)
que representam tudo o que a usuária precisa fazer/ver.
As **Histórias de Usuário** devem ser o resultado do seu processo de
pesquisa ou _research_ das suas usuárias.

Certifique-se de incluir a Definição de Pronto (_definition of done_) e
os Critérios de Aceitação para cada uma.

Use suas histórias de usuário para planejar seus sprints, dividindo cada
história em tarefas.

Na medida do possível, conclua uma História de Usuário antes de passar
para a próxima (atendendo à Definição de Concluído e aos Critérios de Aceitação).

#
#### Design de Interface de Usuário

##### Protótipo de alta fidelidade

Usando os wireframes ou esboços (_sketches_) da sua solução de interface como
base, o próximo passo é projetar sua Interface de Usuário
(UI - _User Interface_). Para isso, você deve aprender a utilizar
alguma ferramenta de design visual.
Nós recomendamos o [Figma](https://www.figma.com/), que é
uma ferramenta que funciona no navegador e, além disso, você pode criar
uma conta gratuitamente. No entanto, você é livre para usar outros editores
gráficos como Illustrator, Photoshop, etc.

O design deve representar o _ideal_ da sua solução. Digamos que é o que
você desejaria implementar se tivesse tempo ilimitado para trabalhar.
Além disso, seu design deve seguir os fundamentos de _visual design_.

Lembre-se de solicitar feedback do seu protótipo às suas colegas e/ou coaches.

#### Testes de usabilidade

Durante o desafio, você deverá realizar testes de usabilidade com diferentes usuárias,
e com base nos resultados, deverá iterar seus designs. Conte-nos
quais problemas de usabilidade você identificou nos testes e como os
melhorou em sua proposta final.


## 7. Edição Hacker

As seções chamadas _Edição Hacker_ são **opcionais**. Se você **concluiu**
tudo o que foi solicitado anteriormente e ainda tem tempo, tente completá-las.
Isso permitirá que aprofundar e/ou praticar mais sobre os objetivos de
aprendizado do projeto.

Recursos/características adicionais sugeridos:

* Visualizar a estatística calculada por meio de um gráfico. Para
  isso, recomendamos explorar bibliotecas de gráficos como
  [Chart.js](https://www.chartjs.org/)
  ou [Google Charts](https://developers.google.com/chart/).
* Cobertura de 100%



Antes de começar a escrever código, você deve definir o que o
produto deverá fazer com base no conhecimento que você pode obter da sua usuária.
Estas perguntas podem te ajudar:

* Quem são as principais usuárias do produto?
* Quais são os objetivos dessas usuárias em relação ao produto?
* Quais são os dados mais relevantes que elas desejam ver na interface e por quê?
* Quando elas usam ou usariam o produto?
* Toda a sua pesquisa anterior deve resultar em todas as Histórias
  de Usuária do seu projeto.
* Não faça protótipos de alta fidelidade de todas as suas Histórias. Comece
  somente pelos que são necessários para o seu Sprint 1
  (primeira semana de trabalho). Mais dicas no guia de organização
  para o projeto.



