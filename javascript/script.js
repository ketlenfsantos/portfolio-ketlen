

// Inicializa a animação
new SimpleAnime();

// SLIDESHOW
let slideIndex = 1;
let slideIndex2 = 1;
// let slideIndex3= 1;
// let slideIndex4 = 1;

showSlides(slideIndex, "mySlides", "dot");
showSlides(slideIndex2, "mySlides2", "dot2");


// Controle dos slides para o primeiro carrossel
function plusSlides(n) {
  slideIndex += n;
  showSlides(slideIndex, "mySlides", "dot");
}

function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex, "mySlides", "dot");
} 


// Controle dos slides para o segundo carrossel
function plusSlides2(n) {
  slideIndex2 += n;
  showSlides(slideIndex2, "mySlides2", "dot2");
}

function currentSlide2(n) {
  slideIndex2 = n;
  showSlides(slideIndex2, "mySlides2", "dot2");
}



// // Controle dos slides para o terceiro carrossel
// function plusSlides3(n) {
//   slideIndex3 += n;
//   showSlides(slideIndex3, "mySlides3", "dot3");
// }

// function currentSlide3(n) {
//   slideIndex3 = n;
//   showSlides(slideIndex3, "mySlides3", "dot3");
// }



// // Controle dos slides para o quarto carrossel
// function plusSlides4(n) {
//   slideIndex4 += n;
//   showSlides(slideIndex4, "mySlides4", "dot4");
// }

// function currentSlide4(n) {
//   slideIndex4 = n;
//   showSlides(slideIndex4, "mySlides4", "dot4");
// }



// Função genérica para exibir os slides
function showSlides(n, slideClass, dotClass) {
  const slides = document.getElementsByClassName(slideClass);
  const dots = document.getElementsByClassName(dotClass);
  let index = n;


  // Ajusta o índice para circular entre os slides
  if (n > slides.length) index = 1;
  if (n < 1) index = slides.length;



  // // Garantir que o slideIndex esteja dentro dos limites
  // if (n > slides.length) { slideIndex = 1 }    // Se passar do número de slides, vai para o primeiro
  // if (n > slides2.length) { slideIndex2 = 1 }    // Se passar do número de slides, vai para o primeiro
  // if (n < 1) { slideIndex = slides.length }    // Se for menor que 1, vai para o último slide
  // if (n < 1) { slideIndex2 = slides2.length }    // Se for menor que 1, vai para o último slide
  
   // Esconde todos os slides
   for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }


 // Remove a classe "active" de todos os pontos
 for (let i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
}

 // Exibe o slide atual
  slides[index - 1].style.display = "block";

  // Ativa o ponto correspondente
  if (dots.length > 0) {
    dots[index - 1].className += " active";
  }

    // Atualiza o índice global para o carrossel
    if (slideClass === "mySlides") {
      slideIndex = index;
    } else if (slideClass === "mySlides2") {
      slideIndex2 = index;
    }
  }

// MENU MOBILE
const menuToggle = document.querySelector('.mobile-menu-icon'); // Ícone do menu hambúrguer
const menu = document.querySelector('.containerTwoMobile'); // Menu lateral
const closeMenu = document.getElementById('xis'); // Botão de saída
const tudao = document.querySelector('.tudo');
const modal3 = document.getElementById("modal-overlay3");
const menuItems = menu.querySelectorAll('li'); // Todos os itens do menu (li)

window.addEventListener('DOMContentLoaded', () => {
  menu.style.display = 'none'; // Garante que o menu esteja escondido ao carregar a página

});



// Adiciona o evento de clique para abrir/fechar o menu
menuToggle.addEventListener('click', () => {
  const isMenuVisible = menu.style.display === 'flex';
  modal3.style.display = "flex"; // Ativar a exibição do modal

  if (!isMenuVisible) {
    menu.style.display = 'flex'; // Mostra o menu
  
  

 
  } else {
    menu.style.display = 'none'; // Esconde o menu
    
  }
});

// Fecha o menu ao clicar no botão "X"
closeMenu.addEventListener('click', () => {
  menu.style.display = 'none'; // Esconde o menu
  modal3.style.display = "none"; // Ativar a exibição do modal

});

// Fecha o menu ao clicar fora da área do menu
document.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && !menuToggle.contains(event.target)) {
    menu.style.display = 'none'; // Esconde o menu
   
  }
  
});
// Fecha o menu e o modal ao clicar em qualquer item (li) do menu
menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menu.style.display = 'none'; // Esconde o menu
    // modal3.style.display = 'none'; // Esconde o modal
  });
});







// ---------------------------------------------------

// REMOVER DIV QUANDO PASSAR MOUSE
const projetos = document.querySelectorAll('.project');
// const projetosMobile = document.querySelectorAll('.mySlides');


// PARA O BOTÃO SUMIR QUANDO PASSA O MOUSE
// projetos.forEach(function(divProjeto) {
//   const button = divProjeto.querySelector('.btnPortfolio'); // Seleciona o botão dentro de cada "project"

//   divProjeto.addEventListener('mouseover', function () {
//     button.classList.add('hidden'); // Adiciona a classe "hidden" para esconder o botão com transição
//   });

//   divProjeto.addEventListener('mouseleave', function () {
//     button.classList.remove('hidden'); // Remove a classe "hidden" para mostrar o botão novamente com transição
//   });
// });

// projetosMobile.forEach(function(divProjetoMobile) {
//   const buttonMobile = divProjetoMobile.querySelector('.btnPortfolio'); // Seleciona o botão dentro de cada "project"

//   divProjetoMobile.addEventListener('mouseover', function () {
//     buttonMobile.classList.add('hidden'); // Adiciona a classe "hidden" para esconder o botão com transição
//   });

//   divProjetoMobile.addEventListener('mouseleave', function () {
//     buttonMobile.classList.remove('hidden'); // Remove a classe "hidden" para mostrar o botão novamente com transição
//   });
// });

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





// MODAL PAGINA INICIAL CURRICULO:

const openModalCurriculo = document.querySelectorAll('.open-modal');
const closeModalBtn = document.getElementById('close-modal');
const modal = document.getElementById("modal-overlay2");
const modalContent = document.getElementById("modalInit");

// Quando qualquer um dos botões de abrir modal for clicado
openModalCurriculo.forEach(button => {
  button.addEventListener('click', () => {
    modal.style.display = "flex"; // Ativar a exibição do modal
    
  });
});

// Quando o botão de fechar modal é clicado
closeModalBtn.addEventListener('click', () => {
  modal.style.display = "none"; // Fechar o modal
});

// Fechar o modal se o usuário clicar fora do conteúdo (na área do fundo)
modal.addEventListener('click', (e) => {
  if (e.target === modal) { // Verifica se o clique foi no fundo (não no conteúdo)
    modal.style.display = "none"; // Fechar o modal
  }
});

// Fechar o modal quando a tecla "Esc" for pressionada
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { // Verifica se a tecla pressionada é "Escape"
    modal.style.display = "none"; // Fechar o modal
  }
});

// MODAL PROJETOS

//MODAL 
const openModalBtn = document.querySelectorAll('.open-modal2');
const closeModalBtn2 = document.getElementById('close-modal2');
const modal2 = document.getElementById("modal-overlay");
const modalContent2 = document.getElementById("modal-content");

// Quando qualquer um dos botões de abrir modal for clicado
openModalBtn.forEach(button => {
  button.addEventListener('click', () => {
    modal2.style.display = "flex"; // Ativar a exibição do modal
    
  });
});
    
    // Quando o botão de fechar modal é clicado
closeModalBtn2.addEventListener('click', () => {
  modal2.style.display = "none"; // Fechar o modal
});

// Fechar o modal se o usuário clicar fora do conteúdo (na área do fundo)
modal2.addEventListener('click', (e) => {
  if (e.target === modal) { // Verifica se o clique foi no fundo (não no conteúdo)
    modal2.style.display = "none"; // Fechar o modal
  }
});

// Fechar o modal quando a tecla "Esc" for pressionada
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { // Verifica se a tecla pressionada é "Escape"
    modal2.style.display = "none"; // Fechar o modal
  }
});





// acessar pagina especifica













