const loadContact = () => {
  // Create contact section
  const contactSection = document.createElement('section');
  contactSection.classList.add('contact');

  // Create contact title
  const contactTitle = document.createElement('h2');
  contactTitle.classList.add('contact__title');
  contactTitle.textContent = 'Contact US';
  
  // Create an address field
  const addressField = document.createElement('div');
  addressField.classList.add('contact__info');
  addressField.innerHTML = `
  <p>Address: 123 Main Street, Kahawa, Nairobi</p>
  <p>Phone: +254 715332763</p>
  <p>Email: info@momatarestaurant.com</p>
  `;

  // Create contact form
  const contactForm = document.createElement('form');
  contactForm.classList.add('contact__form');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
  });

  // Create contact input fields
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.name = 'name';
  nameInput.placeholder = 'Name';
  nameInput.required = true;

  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.name = 'email';
  emailInput.placeholder = 'Email';
  emailInput.required = true;

  const messageInput = document.createElement('textarea');
  messageInput.name = 'message';
  messageInput.placeholder = 'Message';
  messageInput.required = true;

  const submitButton = document.createElement('button');
  submitButton.textContent = 'Submit';

  // Append input fields to contact form
  contactForm.appendChild(nameInput);
  contactForm.appendChild(emailInput);
  contactForm.appendChild(messageInput);
  contactForm.appendChild(submitButton);

  // Clear content container
  const contentContainer = document.getElementById('content');
  while (contentContainer.firstChild){
    contentContainer.removeChild(contentContainer.firstChild);
  }

  // Append contact title, address field and contact form to contact section
  contactSection.appendChild(contactTitle);
  contactSection.appendChild(addressField);
  contactSection.appendChild(contactForm);

  // Append contact section to content container
  contentContainer.appendChild(contactSection);
}

export default loadContact;