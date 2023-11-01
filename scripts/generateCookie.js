function createListItem(name, price, inStock, containsNuts, isVegan, imageLink, notes){
    const li = document.createElement("li");
    li.classList.add("single-cookie");
    
    if (!imageLink) {
        imageLink = 'https://img.freepik.com/free-vector/love-chocolate-cookies-cartoon-icon-illustration_138676-2705.jpg?size=626&ext=jpg'
    }
    
    if (name && price && inStock && containsNuts && isVegan) {
        li.innerHTML = `
        <img src="${imageLink}" alt="Iamge of a cookie">
        <p><strong>Name</strong>: ${name}</p>
        <p><strong>Price:</strong></strong> ${price}</p>
        <p><strong>In Stock:</strong> ${inStock}</p>
        <p><strong>Contains Nuts:</strong> ${containsNuts}</p>
        <p><strong>Is Vegan:</strong> ${isVegan}</p>
        <p><strong>Notes:</strong> ${notes ? `${notes}` : `none`}</p>`;
        
    }
    const removeButton = document.createElement('button')
    removeButton.textContent = "Remove Cookie"
    removeButton.addEventListener('click', (event)=>{
        event.target.closest('.single-cookie').remove()
    });
    li.append(removeButton);
    return li;
}


function generateCookie(name, price, inStock, containsNuts, isVegan, imageLink, notes) {
    const newCookie = createListItem(name.value, price.value, inStock.value, containsNuts.value, isVegan.value, imageLink.value, notes.value); 
    const cookiesList = document.querySelector(".cookies ul");
    cookiesList.append(newCookie);
};

