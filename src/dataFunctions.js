export const filterdata = (doramas,  valueoption) => {

  const result = doramas.filter((dorama) => dorama.facts.doramaGender === valueoption)
  return result
};
export const orderdata = (data, ordenacao) => {
  if (ordenacao === "asc") {
    return data.sort((a, b) => { return a.name.localeCompare(b.name) })
  } else {
    return data.sort((a, b) => { return b.name.localeCompare(a.name) })
  }
};
export const computStats = (data) => {
  const estatistica = data.map(dorama => dorama.facts.doramaRating).filter(value => !isNaN(value));
  const contador = estatistica.reduce((acc) => acc + 1, 0);
  return contador;
};
 