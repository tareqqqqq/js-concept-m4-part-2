function validProposal(person1, person2){
    if(typeof person1!== typeof person2){
        return 'invalid'
    }
    if(person1.gender===person2.gender){
        return false
    } else if(Math.abs(person1.age-person2.age)>7){
        return false
    }
    else{
        return true
    }
}

console.log(validProposal( { name: "bjoy", gender: "male", age: 30 },{ name: "bjoy", gender: "female", age: 21 }));


// "mijan"

// { name: "bjoy", gender: "male", age: 32 }