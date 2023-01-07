const input = document.getElementById("input");
const res = document.getElementById("res");
const list = document.getElementById("list");

const collector = [];

function add() {
  // convertendo para número
  const numInput = Number(input.value);

  // verificação anti-idiotas
  if (numInput < 1 || numInput > 100)
    return alert("número inválido, apenas números de 1 a 100");
  if (collector.indexOf(numInput) !== -1)
    return alert("valor inválido, ou já encontrado na lista");

  // guardando o valor na lista
  collector.push(numInput);

  // criando a opção na lista
  const option = document.createElement("option");
  option.text = `Valor ${numInput} adicionado.`;
  option.value = numInput;

  // colocando a options na lista
  list.appendChild(option);

  // limpando o campo para novos valores
  input.value = "";
}

function finalize() {
  if (collector.length < 2)
    return alert("adicione pelo menos dois valores antes de finalizar!");

  const maxValue = Math.max(...collector);
  const minValue = Math.min(...collector);
  const totalSum = collector.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  const average =
    collector.reduce((acc, cur) => acc + cur, 0) / collector.length;

  const response = [
    `ao todo, temos <strong>${collector.length}</strong> numeros cadastrados.`,
    `o maior número informado foi <strong>${maxValue}</strong>.`,
    `o menor número informado foi <strong>${minValue}</strong>.`,
    `somando todos os valores temos <strong>${totalSum}</strong>`,
    `a media dos valores digitados foi <strong>${average}</strong>`,
  ];

  res.innerHTML = response.join("<br>");
}
