import projetos from './projetos.js';

const projetosContainer = document.getElementById('projects-container');

projetos.forEach(projeto => {
    const projetoElement = document.createElement('article');
    projetoElement.classList.add('project');
    projetoElement.innerHTML = `
        <h3 class="project-name">${projeto.nome}</h3>
                <div class="project-gallery">
                    <div class="desktop-preview">
                        <img src="${projeto.imgDesktop}" alt="Preview Desktop do projeto ${projeto.nome}">
                    </div>
                    <div class="mobile-preview">
                        <img src="${projeto.imgMobile}" alt="Preview Mobile do projeto ${projeto.nome}">
                    </div>
                </div>
                <div class="project-links">
                    <a href="${projeto.linkProjeto}" target="_blank" rel="noopener noreferrer">
                        Ver Projeto
                    </a>
                    <a href="${projeto.linkRepositorio}" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                </div>
                <p class="project-description">
                    ${projeto.descricao}
                </p>
                <h4 class="technologies">Tecnologias utilizadas</h4>
                <div class="project-skills">
                ${projeto.tecnologias.map(tech => `<span>${tech}</span>`).join('')}
                </div>
            </article>
    `;
    projetosContainer.appendChild(projetoElement);
});


