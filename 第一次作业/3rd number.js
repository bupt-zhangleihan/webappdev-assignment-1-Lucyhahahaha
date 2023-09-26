let multiple = [];
function multiplePrint (num){
    for (let i=num; i>=1; i--) {
        if(i%3 === 0){
            multiple.push(i)
        }
    }
    console.log(multiple);
}

multiplePrint(20);