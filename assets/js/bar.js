document.addEventListener("DOMContentLoaded", () => {
  const barContainer = document.querySelector('.bar');
  barContainer.classList.remove('d-none');
  categories.forEach(category => {
    const dropdown = document.createElement('div');
    dropdown.classList.add('dropdown', 'phone-category-dropdown');
    
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-category', 'dropdown-toggle');
    button.type = 'button';
    button.id = `${category.name.toLowerCase()}Dropdown`;
    button.textContent = category.name;
    dropdown.appendChild(button);
    
    const menu = document.createElement('ul');
    menu.classList.add('dropdown-menu');
    
    if (category.subcategories) {
      category.subcategories.forEach(subcategory => {
        const submenuItem = document.createElement('li');
        submenuItem.classList.add('dropdown-submenu');
        
        const subcategoryLink = document.createElement('a');
        subcategoryLink.classList.add('dropdown-item');
        subcategoryLink.href = '#';
        subcategoryLink.textContent = subcategory.name;
        submenuItem.appendChild(subcategoryLink);
        
        const submenu = document.createElement('ul');
        submenu.classList.add('dropdown-menu', 'submenu');
        
        subcategory.items.forEach(item => {
          const itemElement = document.createElement('li');
          const itemLink = document.createElement('a');
          itemLink.classList.add('dropdown-item');
          itemLink.href = item.link || '#';
          itemLink.textContent = item.name;
          itemElement.appendChild(itemLink);
          submenu.appendChild(itemElement);
        });
        
        submenuItem.appendChild(submenu);
        menu.appendChild(submenuItem);
      });
    } else {
      category.items.forEach(item => {
        const itemElement = document.createElement('li');
        const itemLink = document.createElement('a');
        itemLink.classList.add('dropdown-item');
        itemLink.href = item.link || '#';
        itemLink.textContent = item.name;
        itemElement.appendChild(itemLink);
        menu.appendChild(itemElement);
      });
    }
    
    dropdown.appendChild(menu);
    barContainer.appendChild(dropdown);
  });
});
