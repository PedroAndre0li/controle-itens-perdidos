// Controle de Itens Perdidos

let itens = [];

function registrarItem(nome, local, data) {
  itens.push({
    nome,
    local,
    data
  });
}

function listarItens() {
  return itens;
}

function removerItem(indice) {
  itens.splice(indice, 1);
}
