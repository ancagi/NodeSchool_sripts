//crear variable
const example='some string'
//imprimir en consola
console.log(example)
//reemplazar partes de un string
let pizza= "pizza is alright"
pizza= pizza.replace("alright","wonderful")
console.log(pizza)
//Integers
let example= 123456789
console.log(example)
//CONST: Es una constante la cual NO cambiara su valor en ningún momento en el futuro.
//VAR: Es una variable que SI puede cambiar su valor y su scope es local.
//LET: Es una variable que también podra cambiar su valor, pero solo vivirá(Funcionara) en el bloque donde fue declarada.
//Redondeando numeros 
let roundUp= 1.5
let rounded= Math.round(roundUp)
console.log(rounded)
//integer a string
var n=128
console.log(n.toString())
//if statement 
var fruit="orange"
var n= fruit.length
if(n>5){
    console.log("The fruit name has more than five characters.")
}else{
    console.log("The fruit name has five characters or less.")
}
//for
let total =0
const limit=10
for (let i=0;i<limit;i++){
    total+=i
}
console.log(total)
//arrays
const pizzaToppings=["tomato sauce","cheese","pepperoni"]
console.log(pizzaToppings)
//filtrar un array 
const numbers=[1,2,3,4,5,6,7,8,9,10]
const filtered = numbers.filter(function evenNumbers(number){
    return number%2==0
})
console.log(filtered)
//indexing arrays starts on position 0 to n-1
const food=["apple","pizza","pear"]
console.log(food[1])
//looping through an array
let pets=["cat","dog","rat"]
for (let i=0;i<pets.length;i++){
    pets[i]=pets[i]+"s"
}
console.log(pets)
//objects
const pizza={
    toppings:["cheese","sauce","pepperoni"],
    crust:"deep dish",
    serves:2 
}
console.log(pizza)
//accesing atributes on objects
const food={
    types:"only pizza"
}
console.log(food.types)
// function Object.keys to return all keys on an Object
const car={
    make:"Honda",
    model:"Accord",
    year:2020
}
const keys= Object.keys(car)
console.log(keys)
//Functions
function eat(food){
    return food+" tasted really good."
}
console.log(eat("bananas"))
//Functions with various arguments
function math(x,y,z){
    return (y*z)+x
}
console.log(math(53,61,67))
//Variable scope global and local
const a =1;const b=2; const c=3;
(function firstFunction () {
    const b = 5; const c = 6;

    (function secondFunction () {
      const b = 8;
      console.log(`a: ${a}, b: ${b}, c: ${c}`);

      (function thirdFunction () {
        const a = 7; const c = 9;

        (function fourthFunction () {
          const a = 1; const c = 8
        })()
      })()
    })()
  })()
