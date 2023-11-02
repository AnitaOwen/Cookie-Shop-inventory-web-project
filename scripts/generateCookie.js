function createListItem(name, price, inStock, containsNuts, isVegan, imageLink, notes){
    const li = document.createElement("li");
    li.classList.add("single-cookie");
    
    if (!imageLink) {
        imageLink = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZA6UmOs6ASilBj61Rf-I_4Tq4WCA5nSqg3Q&usqp=CAU'
    }
    
    if (name && price && inStock && containsNuts && isVegan) {
        li.innerHTML = `
        <img src="${imageLink}" alt="Iamge of a cookie">
        <p><strong>Name</strong>: ${name}</p>
        <p><strong>Price (per dozen): $</strong>${price}</p>
        <p><strong>In Stock:</strong><button class="toggle-stock-button">${inStock}</button></p>
        <p><strong>Contains Nuts:</strong> ${containsNuts}</p>
        <p><strong>Is Vegan:</strong> ${isVegan}</p>
        <p><strong>Notes:</strong> ${notes ? `${notes}` : `none`}</p>`;
        
    }
    const removeButton = document.createElement('button')
    removeButton.classList.add("remove")
    removeButton.textContent = "Remove Cookie"
    removeButton.addEventListener('click', (event)=>{
        event.target.closest(".single-cookie").remove()
    });
    li.append(removeButton);
    return li;
}


function generateCookie(name, price, inStock, containsNuts, isVegan, imageLink, notes) {
    const newCookie = createListItem(name.value, price.value, inStock.value, containsNuts.value, isVegan.value, imageLink.value, notes.value); 
    const cookiesList = document.querySelector(".all-cookies ul");
    cookiesList.append(newCookie);
};

const listItems = document.querySelectorAll('.remove');

listItems.forEach((button) => {
    button.addEventListener('click', (event)=>{
        event.target.closest('.single-cookie').remove();
        decrementCount();
    })
})



