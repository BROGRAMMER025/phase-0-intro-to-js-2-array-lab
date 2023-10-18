// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(){
    cats.push("Ralph")
}
function destructivelyPrependCat(){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
function appendCat(name){
    const newCatsArray = [...cats,"Broom"]
    return newCatsArray
}
 appendCat(cats)
 function prependCat(name){
    const otherCats = ["Arnold", ...cats]
    return otherCats
 }
 appendCat(cats)
 function removeLastCat(){
    const removeCat = cats.slice(0, -1)
    return removeCat  
 }
 removeLastCat()

 function removeFirstCat(){
    const firstCatRemove = cats.slice(1)
    return firstCatRemove
 }
 removeFirstCat()