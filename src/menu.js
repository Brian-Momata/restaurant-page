const loadMenu = () => {
  // Create menu section
  const menuSection = document.createElement('section');
  menuSection.classList.add('menu');
  
  // Create menu items
  const menuItem1 = document.createElement('div');
  const menuItem2 = document.createElement('div');
  menuItem1.classList.add('menu-item', 'appetizers');
  menuItem2.classList.add('menu-item', 'main-courses');
  menuItem1.innerHTML = `
  <h3>Appetizers</h3>
  <ul>
    <li>Appetizer 1 - $10.99</li>
    <li>Appetizer 2 - $9.99</li>
  </ul>
  `;
  menuItem2.innerHTML = `
  <h3>Main Courses</h3>
  <ul>
    <li>Main Course 1 - $10.99</li>
    <li>Main Course 2 - $9.99</li>
  </ul>`;

  // Append menu items to menu section
  menuSection.appendChild(menuItem1);
  menuSection.appendChild(menuItem2);

  // Append menu section to page
  document.body.appendChild(menuSection);

  // Clear content container
  const contentContainer = document.getElementById('content');
  while (contentContainer.firstChild){
    contentContainer.removeChild(contentContainer.firstChild);
  }
  
  // Append menu section to content container
  contentContainer.appendChild(menuSection);
}

export default loadMenu;