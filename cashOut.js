function cashout(money){
    if(money<0 || typeof money !=="number" ){
        return 'invalid'
    }
    const result=money*(1.75/100)
    return result
}
console.log(cashout(-999));