

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
    modal3.style.display = 'none'; // Esconde o modal
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
const openModalBtns = document.querySelectorAll('.open-modal2');
const closeModalBtns = document.getElementById('close-modal2');
const modalOverlay = document.getElementById("modal-overlay");
const modalContents = document.getElementById("modal-content");

// Elementos do modal
const modalTitle = document.getElementById("modal-title");
const modalCategory = document.getElementById("modal-category");
const modalDescription = document.getElementById("modal-description");
const modalFeatures = document.getElementById("modal-features");
const modalTechnologies = document.getElementById("modal-technologies");
const modalDate = document.getElementById("modal-date");
const modalVideo = document.getElementById("modal-video");
const modalLink = document.getElementById("modal-link");
const modalRepo = document.getElementById("modal-repo");

// Dados dos projetos
const projectsData = {
  "fauna-brasil": {
    title: "Fauna Brasil",
    category: "Blog",
    description: "Página criada em exercício do módulo de Display Grid do Curso Origamid.",
    features: ["Designer Responsivo (desktop e mobile)", "Efeitos em JavaScript", "Design feito por mim"],
    technologies: "HTML - CSS",
    date: "Agosto de 2024",
    video: "https://streamable.com/e/czsaqc?",
    link: "https://ketlenfsantos.github.io/blogfaunabrasil/",
    repo: "https://github.com/ketlenfsantos/blogfaunabrasil.git"
  },
  "meu-projeto": {
    title: "toDo - Gerenciamento de Tarefas",
    category: "Aplicação Web",
    description: "Projeto desenvolvido para gerenciar controle de tarefas no estilo to-do list, que contém as seguintes funcionalidades: - Adicionar uma nova tarefa,  - Marcar e desmarcar uma tarefa como concluída -Remover uma tarefa da listage -Mostrar o progresso de conclusão das tarefas",
    features: ["SEO otimizado", "Design moderno", "Mobile First"],
    technologies: "HTML - CSS - REACT - TS - VITE - NODE JS",
    date: "Maio de 2024",
    video: "https://streamable.com/e/ofn5jv",
    link: "https://ketlenfsantos.github.io/desafio-to-do/",
    repo: "https://github.com/meuprojeto"
  },

  "dt-money": {
    title: "DT-Money - Transações Financeiras",
    category: "Aplicação Web",
    description: "Projeto desenvolvido para prática de perfomances no React, com uso de bibliotecas variadas. O DT-Money é um dashboard de transações financeiras,com entradas e saídas, cadastros, filtros e buscas focadas em uma melhor experiência e acessibilidade para o usuário.",
    features: ["Design moderno", "Mobile First"],
    technologies: "HTML - CSS - REACT - TS - VITE - NODE JS",
    date: "Junho de 2024",
    video:"https://streamable.com/e/vkxthe",
    link: "https://03-dt-money-seven.vercel.app/",
    repo: "https://github.com/ketlenfsantos/transaction-dashboard"
  },

  "pizza-shop": {
    title: "Pizza Shop - Dashboard ",
    category: "Aplicação Web",
    description: "Projeto em React, sem frameworks, que funciona como uma Dashboard para lojistas que possuem um restaurante dentro de um aplicativo de delivery, como o iFood, por exemplo. Uma forma do lojista acompanhar as métricas do restaurante, como pedidos mensais e diários. Uso de gráficos, e acompanhamento de pedidos, detalhes, alterações de status. O foco do projeto foi a integração do Front-end com API utilizando React Query para lidar com toda parte de HTTP, cache, interface otimista.",
    features: ["Design moderno", "Mobile First"],
    technologies: "HTML - CSS - REACT - TS - VITE - NODE JS",
    date: "Junho de 2024",
    video:"https://streamable.com/e/jsmnai",
    link: "https://03-dt-money-seven.vercel.app/",
    repo: "https://github.com/ketlenfsantos/transaction-dashboard"
  },

  "ignite-timer": {
    title: "Pizza Shop - Dashboard ",
    category: "Aplicação Web",
    description: "Projeto em React, sem frameworks, que funciona como uma Dashboard para lojistas que possuem um restaurante dentro de um aplicativo de delivery, como o iFood, por exemplo. Uma forma do lojista acompanhar as métricas do restaurante, como pedidos mensais e diários. Uso de gráficos, e acompanhamento de pedidos, detalhes, alterações de status. O foco do projeto foi a integração do Front-end com API utilizando React Query para lidar com toda parte de HTTP, cache, interface otimista.",
    features: ["Design moderno", "Mobile First"],
    technologies: "HTML - CSS - REACT - TS - VITE - NODE JS",
    date: "Junho de 2024",
    video:"https://streamable.com/e/jsmnai",
    link: "https://ignite-timer-sooty-one.vercel.app/",
    repo: "https://github.com/ketlenfsantos/ignite-timer"
  },

  "weinsite": {
    title: "WEINSITE",
    category: "Site Institucional",
    description: "Site realizado para agência de produtos digitais. Com foco de apresentação e descrição dos serviços prestados, bem como também catálogo de projetos com imagens em sliders, botões de contato e links para redes sociais. Site responsivo para desktop, tablet e mobile. Foi utilizado framework boostrap.",
    features: ["Site institucional", "Bootstrap"],
    technologies: "HTML - BOOTSTRAP - JS - SWIPER",
    date: "Novembro de 2024",
    video:"https://streamable.com/e/pjtt36",
    link: "https://ketlenfsantos.github.io/weinsite/",
    repo: "https://github.com/ketlenfsantos/weinsite"
  }


};

// Abrir modal com conteúdo específico
openModalBtns.forEach(button => {
  button.addEventListener('click', (event) => {
    const projectKey = event.target.getAttribute('data-modal');
    const project = projectsData[projectKey];

    if (project) {
      modalTitle.textContent = project.title;
      modalCategory.textContent = project.category;
      modalDescription.textContent = project.description;
      
      // Preencher lista de funcionalidades
      modalFeatures.innerHTML = "";
      project.features.forEach(feature => {
        let li = document.createElement("li");
        li.textContent = feature;
        modalFeatures.appendChild(li);
      });

      modalTechnologies.textContent = project.technologies;
      modalDate.textContent = project.date;
      modalVideo.src = project.video;
      modalLink.href = project.link;
      modalRepo.href = project.repo;
      
      modalOverlay.style.display = "flex"; 
    }
  });
});

// Fechar o modal
closeModalBtns.addEventListener('click', () => {
  modalOverlay.style.display = "none";
});

// Fechar clicando fora do conteúdo
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.style.display = "none";
  }
});

// Fechar com tecla ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    modalOverlay.style.display = "none";
  }
});




// acessar pagina especifica













