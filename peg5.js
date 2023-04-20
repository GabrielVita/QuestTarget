function inverteString(str) {
    let novaStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
      novaStr += str[i];
    }
    return novaStr;
  }
  
  const strOriginal = "agora";
  const strInvertida = inverteString(strOriginal);
  console.log(`Palavra original | Palavra invertida `);
  console.log(`${strOriginal} -> ${strInvertida} `);
  