function sumArray(array){
     let sum=0
     if(Array.isArray(array)==false){
        return 'invalid'
     }



     

    for(const num of array){
        if(typeof num !=="number"){
            return 'invalid'
        }
        sum=sum+num
    }
    return sum
}

const result=sumArray(10)
console.log(result);