

// Inicializa a animação
new SimpleAnime();

// SLIDESHOW
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  slideIndex += n;  // Ajusta o índice do slide
  showSlides(slideIndex);  // Exibe o slide baseado no novo índice
}

function currentSlide(n) {
  slideIndex = n; // Ajusta diretamente o slideIndex
  showSlides(slideIndex);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // Garantir que o slideIndex esteja dentro dos limites
  if (n > slides.length) { slideIndex = 1 }    // Se passar do número de slides, vai para o primeiro
  if (n < 1) { slideIndex = slides.length }    // Se for menor que 1, vai para o último slide

  // Esconde todos os slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  // Desativa o estado "ativo" de todos os pontos (dots)
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Exibe o slide atual
  slides[slideIndex - 1].style.display = "block";

  // Ativa o ponto (dot) correspondente ao slide atual
  if (dots.length > 0) {
    dots[slideIndex - 1].className += " active";
  }
}
// MENU MOBILE
const menuToggle = document.querySelector('.mobile-menu-icon'); // Ícone do menu hambúrguer
const menu = document.querySelector('.containerTwoMobile'); // Menu lateral
const closeMenu = document.getElementById('xis'); // Botão de saída

// Adiciona o evento de clique para abrir/fechar o menu
menuToggle.addEventListener('click', () => {
  if (menu.style.display === 'none' || menu.style.display === '') {
    menu.style.display = 'flex'; // Mostra o menu
  } else {
    menu.style.display = 'none'; // Esconde o menu
  }
});

// Fecha o menu ao clicar no botão "X"
closeMenu.addEventListener('click', () => {
  menu.style.display = 'none'; // Esconde o menu
});

// Fecha o menu ao clicar fora da área do menu
document.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
    menu.style.display = 'none'; // Esconde o menu
  }
});

// REMOVER DIV QUANDO PASSAR MOUSE
const projetos = document.querySelectorAll('.project');
const projetosMobile = document.querySelectorAll('.mySlides');

projetos.forEach(function(divProjeto) {
  const button = divProjeto.querySelector('.btnPortfolio'); // Seleciona o botão dentro de cada "project"

  divProjeto.addEventListener('mouseover', function () {
    button.classList.add('hidden'); // Adiciona a classe "hidden" para esconder o botão com transição
  });

  divProjeto.addEventListener('mouseleave', function () {
    button.classList.remove('hidden'); // Remove a classe "hidden" para mostrar o botão novamente com transição
  });
});

projetosMobile.forEach(function(divProjetoMobile) {
  const buttonMobile = divProjetoMobile.querySelector('.btnPortfolio'); // Seleciona o botão dentro de cada "project"

  divProjetoMobile.addEventListener('mouseover', function () {
    buttonMobile.classList.add('hidden'); // Adiciona a classe "hidden" para esconder o botão com transição
  });

  divProjetoMobile.addEventListener('mouseleave', function () {
    buttonMobile.classList.remove('hidden'); // Remove a classe "hidden" para mostrar o botão novamente com transição
  });
});

// ANIMAÇÃO SCROLL
const elements = document.querySelectorAll('[data-anime]');

function animateOnScroll() {
  const windowHeight = window.innerHeight;
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150; // Distância até o topo para começar a animação

    // Se o elemento estiver visível na tela, adiciona a classe 'anime' para ativar a animação
    if (elementTop < windowHeight - elementVisible && !element.classList.contains('anime')) {
      element.classList.add('anime');
    } else if (elementTop >= windowHeight - elementVisible && element.classList.contains('anime')) {
      // Quando o elemento sai da tela, remove a animação
      element.classList.remove('anime');
    }
  });
}

// Chama a função na rolagem da página
window.addEventListener('scroll', animateOnScroll);

// Chama a função na inicialização para garantir que os elementos sejam animados se já estiverem visíveis
document.addEventListener('DOMContentLoaded', animateOnScroll);

// Chama a função para garantir que os efeitos de animação sejam aplicados ao carregar a página
animateOnScroll();





// MODAL - abertura



