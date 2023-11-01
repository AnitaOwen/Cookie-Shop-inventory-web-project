const form = document.querySelector('form');
form.addEventListener('submit', (event)=>{
    event.preventDefault()
    // console.log(event)
    const {
        name,
        price,
        inStock,
        containsNuts,
        isVegan,
        imageLink,
        notes
    } = event.target;

generateCookie(name, price, inStock, containsNuts, isVegan, imageLink, notes)

form.reset();
});
