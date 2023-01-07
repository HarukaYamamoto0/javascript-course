function tell() {
  let start = Number(document.getElementById("start").value);
  let end = Number(document.getElementById("end").value);
  let step = Number(document.getElementById("step").value);
  const res = document.getElementById("res");

  // valores defaults
  // e eu esqueci de colocar para números negativos
  start = start <= 0 ? 0 : start;
  end = end <= 0 ? 9 : end;
  step = step <= 0 ? 1 : step;

  let result = "";
  let counter = 0;

  for (let i = start; i <= end; i++) {
    counter++;

    if (counter === step) {
      counter = 0;
      result += `${i} 👉`;
    }
  }

  res.innerText = `Contando:\n${result} FIM 🏴`;
}
