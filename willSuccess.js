function willSuccess(marks){
    if(Array.isArray(marks)!== true){
        return 'invalid'
    }
    

    for(const mark of marks){
        if(mark>=50){
            return true
        }else{
            return false
        }
    }
}

console.log(willSuccess([50,50,50]));