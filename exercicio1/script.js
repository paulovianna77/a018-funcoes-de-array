const objeto = {
  nome: "astrodev",
  profissao: "Dev das estrelas",
  username: "astrodev_labenu",
  senha: "melhorDeTodos",
};

const caixaAlta = (objeto) => {
  let novoObjeto = {};
  for (i in objeto) {
    novoObjeto[i] = objeto[i].toUpperCase();
  }
  return novoObjeto;
};
console.log(caixaAlta(objeto));

const textCorrido = (objeto) => {
  let novoTextoCorrido = "";
  for (i in objeto) {
    novoTextoCorrido += objeto[i] + ", ";
  }
  return novoTextoCorrido(objeto);
};

const imprimir = (objeto, callback) => {
  console.log(callback(objeto));
};

imprimir(textCorrido, objeto);
