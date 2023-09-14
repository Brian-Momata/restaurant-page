const initialPageLoad = () => {
  // Create header element
  const header = document.createElement('header');

  // Create navigation element and its contents
  const nav = document.createElement('nav');
  const logo = document.createElement('div');
  logo.innerHTML = '<h1>Momata Fine Dining</h1>';
  logo.classList.add('logo')

  const navLinks = document.createElement('ul');
  const menuLink = document.createElement('li');
  const aboutLink = document.createElement('li');
  const contactLink = document.createElement('li');

  navLinks.classList.add('nav-links');

  menuLink.innerHTML = '<a href="#" id="menu-link">Menu</a>';
  aboutLink.innerHTML = '<a href="#" id="about-link">About Us</a>';
  contactLink.innerHTML = '<a href="#" id="contact-link">Contact</a>';

  // Append navigation elements to header
  nav.appendChild(logo);
  navLinks.appendChild(menuLink);
  navLinks.appendChild(aboutLink);
  navLinks.appendChild(contactLink);
  nav.appendChild(navLinks);

  header.appendChild(nav);

  // Create hero section
  const hero = document.createElement('section');
  hero.classList.add('hero');
  const heroContent = document.createElement('div');
  heroContent.classList.add('hero-content');
  heroContent.innerHTML = `
    <h2>Welcome to Momata Fine Dining</h2>
    <p>Discover exquisite flavors and a memorable dining experience.</p>
    <a href="#" id="menu-link">View Menu</a>
  `;
  hero.appendChild(heroContent);

  // Create footer element
  const footer = document.createElement('footer');
  footer.innerHTML = '<p>&copy; 2023 Momata Fine Dining. All rights reserved.</p>';

  // Append header, hero, and footer to the content container
  const contentContainter = document.getElementById('content');
  contentContainter.appendChild(header);
  contentContainter.appendChild(hero);
  contentContainter.appendChild(footer);
};

export default initialPageLoad;
