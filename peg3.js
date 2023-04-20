const fs = require('fs');

fs.readFile('dados.json', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  const dados = JSON.parse(data);
  const valores = [];
  let maior = dados[0].valor;
  let menor = dados[0].valor;
  let soma = 0;
  dados.forEach((faturamento) => {
    if(faturamento.valor !== 0){
        valores.push(faturamento.valor);
        soma += faturamento.valor;
        if (faturamento.valor > maior) {
            maior = faturamento.valor;
          }
          if (faturamento.valor < menor) {
            menor = faturamento.valor;
          }
    }
  });
  const media = soma / dados.length;
  console.log(valores);
  console.log('Maior valor:', maior.toFixed(2));
  console.log('Menor valor:', menor.toFixed(2));
  console.log('Média:', media.toFixed(2));
  const acimaDaMedia = contarValoresAcimaDaMedia(valores, media);
  console.log(`Dias acima da média: ${acimaDaMedia} dias`);
});

function contarValoresAcimaDaMedia(valores, media) {
  let contagem = 0;
  valores.forEach((valor) => {
    if (valor > media) {
      contagem++;
    }
  });
  return contagem;
}

  