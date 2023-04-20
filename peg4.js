const sp = 67836.43;
const rj = 36678.66;
const mg = 29229.88;
const es = 27165.48;
const outros = 19849.53;

const total = sp + rj + mg + es + outros;

const porcentagemSP = (sp / total) * 100;
const porcentagemRJ = (rj / total) * 100;
const porcentagemMG = (mg / total) * 100;
const porcentagemES = (es / total) * 100;
const porcentagemOutros = (outros / total) * 100;

console.log(`Valor total: ${total}`);
console.log(`Porcentagem São Paulo: ${porcentagemSP.toFixed(2)}%`);
console.log(`Porcentagem Rio de Janeiro: ${porcentagemRJ.toFixed(2)}%`);
console.log(`Porcentagem Minas Gerais: ${porcentagemMG.toFixed(2)}%`);
console.log(`Porcentagem Espiríto Santo: ${porcentagemES.toFixed(2)}%`);
console.log(`Porcentagem Outros: ${porcentagemOutros.toFixed(2)}%`);
