
const check_anagram = (baseStr , str2)=>{
    let flag = true;
    for(let i=0; i<baseStr.length;i++){
        if(!str2.includes(baseStr[i])){
            flag = false
            break;
        }
    }
    return flag;
}

const run_program = (ArrStr) =>{
    let arr=[]
    let skipInd = []
    for(let i=0;i<ArrStr.length;i++){
        
        if(skipInd.includes(i))
        continue;

        let temp =[ArrStr[i]];
        for(let j=1;j<ArrStr.length;j++){
            if(i==j)
            continue;
            if(check_anagram(ArrStr[i],ArrStr[j])){
                skipInd.push(j);
                temp.push(ArrStr[j]);
            }
        }
        arr.push(temp)
    }
    console.log(arr);
}
run_program(["data", "data"])
// run_program( ["idea", "idae", "bsnl", "nsbl", "grasim", "bata"])