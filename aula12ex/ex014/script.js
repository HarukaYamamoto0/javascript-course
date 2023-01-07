function carregar() {
  const msg = document.getElementById("msg");
  const img = document.getElementById("imagem");

  const now = new Date();
  const hour = now.getHours();

  msg.innerHTML = `Agora são ${hour} horas`;

  if (hour >= 0 && hour < 12) {
    img.src = "assets/manha.png";
    document.body.style.background = "#e2cd9f";
  } else if (hour >= 12 && hour < 18) {
    img.src = "assets/tarde.png";
    document.body.style.background = "#b9846f";
  } else {
    img.src = "assets/noite.png";
    document.body.style.background = "#515154";
  }
}
