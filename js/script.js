// Iniciar o Swiper
const swiper = new Swiper('.swiper', {
  loop: true,
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  speed: 800
});

// Mostrar elementos com fade-in ao fazer scroll
function mostrarElementos() {
  document.querySelectorAll('.fade-in').forEach(el => {
    const topo = el.getBoundingClientRect().top;
    const alturaJanela = window.innerHeight;

    if (topo < alturaJanela - 100) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', mostrarElementos);
window.addEventListener('load', mostrarElementos);

// Fechar menu ao fazer scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav-bar");
  nav.classList.remove("active");
});

// Fechar menu ao clicar num link
document.querySelectorAll(".nav-bar a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-bar").classList.remove("active");
  });
});

let lastScrollTop = 0;
const header = document.querySelector('.header-container');

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scroll para baixo → esconder
    header.classList.add("hide-nav");
    header.classList.remove("show-nav");
  } else {
    // Scroll para cima → mostrar
    header.classList.remove("hide-nav");
    header.classList.add("show-nav");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});


const traducoes = {
  pt: {
    home: "HOME",
    empresa: "A EMPRESA",
    produtos: "O QUE PRODUZIMOS",
    contactos: "CONTACTOS",
    slogan1: "Madeira ecológica com qualidade garantida",
    sub1: "Referência em construção, aquecimento e serviços florestais.",
    slogan2: "Tratamento de terrenos e limpeza florestal",
    sub2: "Profissionalismo, experiência e respeito pelo ambiente.",
    sobre: "Sobre nós",
    sobreTexto: "A Biomadeiras Lda é uma empresa dedicada à prestação de serviços florestais, venda de madeira, lenha e outros derivados. Trabalhamos com responsabilidade ambiental e experiência no setor.",
    lenha: "Lenha seca de qualidade",
    madeira: "Madeira para construção",
    servicos: "Serviços florestais",
    biomassa: "Biomassa",
    contacte: "Contacte-nos",
    mensagem: "Estamos disponíveis para esclarecer dúvidas ou enviar orçamentos personalizados.",
    morada: "Morada:",
    telefone: "Telefone:",
    estaleiro:"Localização do estaleiro:",
    estaleiroF:"Estaleiro"
  },
  en: {
    home: "HOME",
    empresa: "COMPANY",
    produtos: "WHAT WE PRODUCE",
    contactos: "CONTACT",
    slogan1: "Eco-friendly wood with guaranteed quality",
    sub1: "A reference in construction, heating and forestry services.",
    slogan2: "Land clearing and forest cleaning",
    sub2: "Professionalism, experience and environmental respect.",
    sobre: "About us",
    sobreTexto: "Biomadeiras Lda is a company dedicated to forestry services, wood, firewood and other derivatives. We work with environmental responsibility and experience in the sector.",
    lenha: "High quality dry firewood",
    madeira: "Construction wood",
    servicos: "Forestry services",
    biomassa: "Biomass",
    contacte: "Contact us",
    mensagem: "We are available to answer questions or send custom quotes.",
    morada: "Location:",
    telefone: "Phone:",
    estaleiro:"Warehouse location:",
    estaleiroF:"Warehouse"
  }
};

// Função para mudar idioma
function mudarIdioma(idioma) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const chave = el.getAttribute("data-i18n");
    el.textContent = traducoes[idioma][chave];
  });
}

// Clicar nas bandeiras
document.querySelector('img[alt="Inglês"]').addEventListener("click", () => {
  mudarIdioma("en");
});
document.querySelector('img[alt="Português"]').addEventListener("click", () => {
  mudarIdioma("pt");
});
