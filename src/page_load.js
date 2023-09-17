const initialPageLoad = () => {
  // Create hero section
  const hero = document.createElement('section');
  hero.classList.add('hero');
  const heroContent = document.createElement('div');
  heroContent.classList.add('hero-content');
  heroContent.innerHTML = `
    <h2>Welcome to Momata Fine Dining</h2>
    <p>Discover exquisite flavors and a memorable dining experience.</p>
    <a href="#" id="menu-button">View Menu</a>
  `;
  hero.appendChild(heroContent);

  // Append hero to the content container
  const contentContainter = document.getElementById('content');
  contentContainter.appendChild(hero);
};

export default initialPageLoad;
