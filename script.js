document.addEventListener("DOMContentLoaded", function () {
  // Selecionar os elementos
  const attention = document.querySelector(".cs");
  const siteComing = document.querySelector(".ch2");
  const siteLink = document.querySelector(".ch3");
  const logos = document.querySelector(".logos");
  const info = document.querySelector(".info");

  // Definir todos os elementos como invisíveis no início
  attention.style.opacity = 0;
  siteComing.style.opacity = 0;
  siteLink.style.opacity = 0;
  logos.style.opacity = 0;
  info.style.opacity = 0;

  // Função para mostrar o elemento com animação
  function showElement(element, delay) {
    setTimeout(() => {
      element.style.opacity = 1; // Torna o elemento visível
      element.style.transition = "opacity 1s ease"; // Adiciona a transição
    }, delay);
  }

  // Começar a animação
  showElement(attention, 0); // Mostrar "ATENÇÃO!!"
  showElement(siteComing, 1500); // Mostrar "NOSSO SITE ESTÁ CHEGANDO!!!" após 1.5s
  showElement(siteLink, 3000); // Mostrar "www.2lviagens.com.br" após 3s
  showElement(logos, 4500); // Mostrar logos após 4.5s
  showElement(info, 6000); // Mostrar informações após 6s

  function playAudio() {
    const audio = document.getElementById("background-audio");
    audio.play().catch((error) => {
      console.error("Erro ao tentar reproduzir o áudio:", error);
    });
  }

  // Tentar reproduzir o áudio ao carregar a página
  document.addEventListener("DOMContentLoaded", playAudio);

  // Adiciona um evento de clique ao corpo da página para tentar reproduzir o áudio
  document.body.addEventListener("click", playAudio);
});
