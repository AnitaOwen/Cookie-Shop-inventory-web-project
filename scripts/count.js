let count = 3

function addCount(currentCount){
    const span = document.querySelector('.cookie-count');
    span.textContent = `(${currentCount})`;
}

function decrementCount(){
    count--
    addCount(count);
}