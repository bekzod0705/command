let array = []
for (let i = 0; i < Infinity; i++) {
    let a = prompt(`Kommandani kiriting`)
    let newArr = a.split(' ')
    newArr.forEach((el , k) =>{
        if(el == 'add.'){
            newArr.splice(k,1)
            let newStr = newArr.join(' ')
            array.push(newStr)
        }
        else if(el == `del.`){
            newArr.splice(k,1)
            let newString = newArr.join(' ')
            array.forEach((elem, l) =>{
                if(elem == newString){
                    array.splice(l, 1)
                }
            })
        }
    })
    if(a == `stop`){
        break;
    }
    
}
console.log(array);

