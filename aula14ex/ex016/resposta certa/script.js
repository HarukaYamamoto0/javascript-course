function contar() {
  let ini = document.getElementById("txti");
  let fim = document.getElementById("txtf");
  let passos = document.getElementById("txtp");
  let res = document.getElementById("res");

  if (
    ini.value.length === 0 ||
    fim.value.length === 0 ||
    passos.value.length === 0
  ) {
    res.innerHTML = "Impossível contar!";
    // alert("[ERROR] Faltam dados!");
  } else {
    res.innerHTML = "Contando: <br>";
    let i = Number(ini.value);
    let f = Number(fim.value);
    let p = Number(passos.value);

    if (p <= 0) {
      alert("Passo inválido! considerando PASSO 1");
      p = 1;
    }

    if (i < f) {
      for (let c = i; c <= f; c += p) {
        res.innerHTML += `${c} \u{1F449}`;
      }
    } else {
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += `${c} \u{1F449}`;
      }
    }
    res.innerHTML += `\u{1F3C1}`;
  }
}
