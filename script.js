// Toggle do menu mobile
document.getElementById('menu-button').addEventListener('click', function () {
  const menuDropdown = document.getElementById('menu-dropdown');
  menuDropdown.classList.toggle('hidden');
});

// Projetos dinâmicos
const projects = [
  {
    title: "Cadastro de Clientes",
    description: "Essa página é destinada a escritórios de advocacia, para coletar dados de novos clientes e permitir o armazenamento ou compartilhamento dessas informações em um formato padronizado (PDF).",
    imageDesktop: "foto/novocliente.jpg",
    imageMobile: "foto/m1.jpg",
  },
  {
    title: "JurisBox",
    description: "Este design é voltado para um sistema de gestão jurídica, como um painel administrativo para advogados ou empresas do setor jurídico, e busca manter uma interface limpa, prática e intuitiva.",
    imageDesktop: "foto/jurisbox.jpg",
    imageMobile: "foto/m2.jpg",
  },
  {
    title: "Site RB Sociedade de Advogados",
    description: "Site responsivo voltado para um escritório de advocacia, com carrossel de notícias.",
    imageDesktop: "foto/rb.jpg",
    imageMobile: "foto/m3.jpg",
  },
];

let currentProjectIndex = 0;

function updateProject() {
  const project = projects[currentProjectIndex];
  document.getElementById('project-title').innerText = project.title;
  document.getElementById('project-description').innerText = project.description;
  document.getElementById('project-image-desktop').src = project.imageDesktop;
  document.getElementById('project-image-mobile').src = project.imageMobile;
}

document.getElementById('prev-project').addEventListener('click', function () {
  currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
  updateProject();
});

document.getElementById('next-project').addEventListener('click', function () {
  currentProjectIndex = (currentProjectIndex + 1) % projects.length;
  updateProject();
});

updateProject();

  
