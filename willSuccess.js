function willSuccess(marks){
    if(Array.isArray(marks)!== true){
        return 'invalid'
    }
    
        let passCount=0;
        
    for(const mark of marks){
        if(mark>=50){
            passCount++
        }
 
    } 
     let failCount=marks.length-passCount
  let result=passCount>failCount
  return result
}

console.log(willSuccess('100,100'));


// function willSuccess(marksArray) {
//   let passedCount = 0;

//   for (let singleMark of marksArray) {
//     if (singleMark >= 50) passedCount++;
//   }

//   let failCount = marksArray.length - passedCount;

// 	let result = passedCount > failCount; // true / false
//   return result;
// }

// let sampleMarks = [50, 49, 49];
// console.log(willSuccess(sampleMarks));