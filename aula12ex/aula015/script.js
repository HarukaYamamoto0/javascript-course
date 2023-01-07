function verificar() {
  const inputYear = document.getElementById("textano");
  const res = document.getElementById("res");

  const now = new Date();
  const year = now.getFullYear();

  if (inputYear.value.length === 0 || inputYear.value > year) {
    // caso o anos não seja passado
    alert("Verifique os dados e tente novamente!");
  } else {
    // pegando os dados e tratando elez
    const sex = document.getElementsByName("radsex");
    const age = year - Number(inputYear.value);
    const genero = sex[0].checked ? "Homem" : "Mulher";

    // colocando o resultado na tela
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${age} anos.`;

    // carregando a imagem
    const img = document.createElement("img");
    img.setAttribute("id", "foto");

    if (age >= 0 && age < 10) {
      // criança
      img.src =
        genero === "Homem"
          ? "./assets/foto-crianca-m.png"
          : "./assets/foto-crianca-f.png";
    } else if (age < 21) {
      // jovem
      img.src =
        genero === "Homem"
          ? "./assets/foto-jovem-m.png"
          : "./assets/foto-jovem-f.png";
    } else if (age < 50) {
      // adulto
      img.src =
        genero === "Homem"
          ? "./assets/foto-adulto-m.png"
          : "./assets/foto-adulto-f.png";
    } else {
      // idosi
      img.src =
        genero === "Homem"
          ? "./assets/foto-idoso-m.png"
          : "./assets/foto-idoso-f.png";
    }

    // colocando a imagem
    res.appendChild(img);
  }
}
