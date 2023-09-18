import Appetizer1 from './appetizer1.jpg';
import Appetizer2 from './appetizer2.jpg';
import MainCourse1 from './maincourse1.jpg';
import MainCourse2 from './maincourse2.jpg';

const loadMenu = () => {
  // Create menu section
  const menuSection = document.createElement('section');
  menuSection.classList.add('menu');
  
  // Define menu data (you can replace this with your actual menu data)
  const menuData = [
    {
      category: 'Appetizers',
      items: [
        { name: 'Deviled Eggs:', description: 'A classic favorite, our deviled eggs are a delightful blend of creamy yolks, zesty mustard, and a sprinkle of paprika, served with a hint of nostalgia.', price: '$10.99', imageSrc: Appetizer1 },
        { name: 'Fluffy Pancakes', description: 'Our fluffy pancakes are a breakfast dream come true. These golden discs of perfection are served with a drizzle of maple syrup and a dollop of whipped butter.', price: '$9.99', imageSrc: Appetizer2 }
      ]
    },
    {
      category: 'Main Courses',
      items: [
        { name: 'Paella', description: 'Savor the flavors of Spain with our delicious Paella. This savory rice dish is a symphony of saffron-infused rice, succulent seafood, and a burst of Mediterranean herbs and spices.', price: '$10.99', imageSrc: MainCourse1 },
        { name: 'Chicken Biryani', description: 'Dive into a fragrant world of spices and tender chicken with our Chicken Biryani. Basmati rice cooked to perfection, layered with marinated chicken, saffron, and a medley of aromatic spices.', price: '$9.99', imageSrc: MainCourse2 }
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
