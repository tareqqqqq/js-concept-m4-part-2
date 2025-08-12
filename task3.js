function countVowels(str){
    let count=''
    if (typeof str!=='string' || typeof str==='number'){
        return 'invalid'
    }
    for (const vowel of str){
         if(vowel==='a'||vowel==='e'|| vowel==='i'|| vowel==='o'||vowel==='u'){
        count++
    }

    }
   
    return count
}
const result= countVowels(100)

console.log(result);