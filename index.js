const countvalue = document.querySelector('#count');

// const decrement = () => {

function decrement (){
    // get the value 
    let value = parseInt(countvalue.innerText);
//  update the value 
    value = value-1;

    // set the value
    countvalue.innerText=value;
}

// const increment = () => {
    function increment(){
    // get the value 
    let value = parseInt(countvalue.innerText);
//  update the value 
    value = value+1;

    // set the value
    countvalue.innerText=value;
}