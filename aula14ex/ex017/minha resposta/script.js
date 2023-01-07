function calcular() {
  const input = Number(document.getElementById("input").value);
  const res = document.getElementById("res");

  // por eu não saber html5 eu não sei criar aquele menu com a tabuada mais vou me virar

  res.innerText = ""; // tirando a resposta anterior
  for (let i = 1; i < 10; i++) {
    const p = document.createElement("p");
    p.innerText = `${input} × ${i} = ${input * i}`;

    res.appendChild(p); // setando a nova resposta
  }
}
