const loadAbout = () => {
  // Create a about us section
  const about = document.createElement('section');
  about.id = 'about';
  about.classList.add('about');

  // Create a heading
  const heading = document.createElement('h2');
  heading.textContent = 'About Us';
  heading.classList.add('about-heading');

  // Create a paragraph
  const paragraph = document.createElement('div');
  paragraph.classList.add('about-paragraph');
  paragraph.innerHTML = `
  <p>Welcome to Momata Fine Dining, where we are dedicated to providing you with a unique dining experience. Our passion for food and hospitality drives us to create memorable moments for our guests.</p>
  <p>At Restaurant Name, we source the finest ingredients, prepare them with care, and serve them with a touch of culinary artistry. Our chefs bring a wealth of experience, and our friendly staff is here to make your visit special.</p>
  <p>Whether you're joining us for a romantic dinner, a family celebration, or a casual meal with friends, we aim to exceed your expectations. Thank you for choosing Momata Fine Dining, and we look forward to serving you.</p>
  `;

  // Append the heading and paragraph to the about section
  about.appendChild(heading);
  about.appendChild(paragraph);

  // Clear content container
  const contentContainer = document.getElementById('content');
  while (contentContainer.firstChild){
    contentContainer.removeChild(contentContainer.firstChild);
  }

  // Append the about section to the content container
  contentContainer.appendChild(about);
}

export default loadAbout;
