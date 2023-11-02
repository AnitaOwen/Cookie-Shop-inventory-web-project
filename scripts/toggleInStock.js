const toggleButtons = document.querySelectorAll('.toggle-stock-button');

function toggleInStock(event){
    const button = event.target
    if(button.classList.contains('stock-yes')){
        button.classList.remove('stock-yes')
        button.classList.add('stock-no')
        button.textContent = 'no'
    } else {
        button.classList.remove('stock-no')
        button.classList.add('stock-yes')
        button.textContent = 'yes'
    }
};

toggleButtons.forEach((button) => {
    button.addEventListener('click', toggleInStock)
});