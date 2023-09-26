let allStudents = [
    'A',
    'B-',
    1,
    4,
    5,
    2
  ]
  
let studentsWhoPass = [];
for (let i=0;i<=allStudents.length-1;i++) {
    let score = allStudents[i]
    if(typeof score ==="number" && score >=3){    
        studentsWhoPass.push(score)
    }
    else{
        if(typeof score ==="string" &&score!=='C-'){     
            studentsWhoPass.push(score)
        }
    }
}
console.log(studentsWhoPass);