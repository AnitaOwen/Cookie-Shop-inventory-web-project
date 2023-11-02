let count = 3

function addCount(currentCount){
    const span = document.querySelector('.cookie-count');
    // update the text with the dynamic count
    // replace the hard coded number 1 with a variable
    span.textContent = `(${currentCount})`;
}

function decrementCount(){
    count--
    addCount(count);
}