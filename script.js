

const dicas = [
    "Evite ir ao mercado com fome: isso reduz compras por impulso.",
    "Organize a geladeira colocando os alimentos mais antigos na frente.",
    "Sobras de arroz podem virar bolinhos ou recheio de tortas.",
    "Leve sua própria sacola para evitar o uso de plásticos.",
    "Congele alimentos perto do vencimento para consumir depois."
  ];
  
  document.getElementById("dica-texto").textContent =
    dicas[Math.floor(Math.random() * dicas.length)];
  

  function scrollToSection(id) {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  }

  function verificarResposta(indice) {
    const resultado = document.getElementById("resultado-quiz");
    if (indice === 1) {
      resultado.textContent = "✅ Correto! Planejar refeições ajuda a reduzir o desperdício!";
      resultado.style.color = "green";
    } else {
      resultado.textContent = "❌ Essa atitude pode aumentar o desperdício!";
      resultado.style.color = "red";
    }
  }
  
  const toggle = document.getElementById("theme-toggle");
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggle.textContent = document.body.classList.contains("dark-mode")
      ? "☀️ Modo Claro"
      : "🌙 Modo Escuro";
  });
  