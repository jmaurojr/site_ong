document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('header');

  header.innerHTML = `
    <header>
      <h1>ONG Pixel Social</h1>
      <nav>
        <ul>
          <li><a href="index.html">Início</a></li>
          <li><a href="projetos.html">Projetos</a></li>
          <li><a href="cadastro.html">Cadastro</a></li>
        </ul>
      </nav>
    </header>
  `;
});