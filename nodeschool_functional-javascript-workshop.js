//Function to upperCAse
function upper(string){
    return string.toUpperCase()
}
//module.exports = upper//used to check on node school script

//High order function, fuction that returns or receives a function 

function repeat(operation,num){ //Fuction that receives operation(a function) and a number n and repeats operation n times
    for (let i=0; i<num;i++){
        operation()
    }
}
//module.exports= repeat
 //Another solution
 function repeat(operation, num) {
    if (num <= 0) return
    operation()
    return repeat(operation, --num)
  }

  //module.exports = repeat

  //Map function
function doubleAll(numbers){
    var result = numbers.map(function(x){
        return x*2;
    })
    return result
}
console.log (doubleAll([1,2,3,4,5]))
//module.exports= doubleAll

//Map and filter
function getShortMessages(mesages){
    var result =mesages.map(function(x){
        return x.message
    }).filter(function(mesage){
        return mesage.length <50 
    })
    return result
}
module.exports= getShortMessages

