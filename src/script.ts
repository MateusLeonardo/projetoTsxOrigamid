import fetchData from "./fetchData.js";


async function handleData() {
  const data = await fetchData<TransacaoAPI[]>("https://api.origamid.dev/json/transacoes.json");

  if (data) {
    data.forEach((item) => {
      console.log(item["Cliente Novo"]);
    })
  }
  console.log('código continuou');
}
handleData()