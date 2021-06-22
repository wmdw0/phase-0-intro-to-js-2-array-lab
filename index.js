// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name) {
    let arr = [...cats];
    arr.push(name);
    return(arr);
}
function prependCat(name){
    let arr = [...cats];
    arr.unshift(name);
    return(arr);
}
function removeLastCat(){
    let arr = [...cats];
    arr.pop(name);
    return(arr);
}
function removeFirstCat(){
    let arr = [...cats];
    arr.shift(name);
    return(arr);
}
// function cats(){
//     let cats = [];
//     cats.push("Milo", "Otis", "Garfield")
//     return cats;
// }