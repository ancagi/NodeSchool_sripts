function getShortMessages(mesages){
    var result =mesages.map(function(x){
        return x.message
    }).filter(function(mesage){
        return mesage.length <50 
    })
    return result
}
module.exports= getShortMessages



