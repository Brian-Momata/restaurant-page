const loadMenu = () => {
  // Create menu section
  const menuSection = document.createElement('section');
  menuSection.classList.add('menu');
  
  // Define menu data (you can replace this with your actual menu data)
  const menuData = [
    {
      category: 'Appetizers',
      items: [
        { name: 'Appetizer 1', description: 'Description of Appetizer 1', price: '$10.99', imageSrc: 'appetizer1.jpg' },
        { name: 'Appetizer 2', description: 'Description of Appetizer 2', price: '$9.99', imageSrc: 'appetizer2.jpg' }
      ]
    },
    {
      category: 'Main Courses',
      items: [
        { name: 'Main Course 1', description: 'Description of Main Course 1', price: '$10.99', imageSrc: 'maincourse1.jpg' },
        { name: 'Main Course 2', description: 'Description of Main Course 2', price: '$9.99', imageSrc: 'maincourse2.jpg' }
      ]
    }
  ];

  // Loop through menu data and create elements
  menuData.forEach(categoryData => {
    const categoryElement = document.createElement('div');
    categoryElement.classList.add('menu-category');
    
    const categoryTitle = document.createElement('h3');
    categoryTitle.textContent = categoryData.category;
    
    categoryElement.appendChild(categoryTitle);
    
    categoryData.items.forEach(itemData => {
      const menuItem = document.createElement('div');
      menuItem.classList.add('menu-item');
      
      const itemImage = document.createElement('img');
      itemImage.src = itemData.imageSrc;
      itemImage.alt = itemData.name;
      
      const itemInfo = document.createElement('div');
      itemInfo.classList.add('menu-item-info');
      
      const itemName = document.createElement('p');
      itemName.classList.add('menu-item-name');
      itemName.textContent = itemData.name;
      
      const itemDescription = document.createElement('p');
      itemDescription.classList.add('menu-item-description');
      itemDescription.textContent = itemData.description;
      
      const itemPrice = document.createElement('p');
      itemPrice.classList.add('menu-item-price');
      itemPrice.textContent = itemData.price;
      
      itemInfo.appendChild(itemName);
      itemInfo.appendChild(itemDescription);
      itemInfo.appendChild(itemPrice);
      
      menuItem.appendChild(itemImage);
      menuItem.appendChild(itemInfo);
      
      categoryElement.appendChild(menuItem);
    });
    
    menuSection.appendChild(categoryElement);
  });

  // Clear content container
  const contentContainer = document.getElementById('content');
  while (contentContainer.firstChild){
    contentContainer.removeChild(contentContainer.firstChild);
  }
  
  // Append menu section to content container
  contentContainer.appendChild(menuSection);
};

export default loadMenu;
