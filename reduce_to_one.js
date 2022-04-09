const do_math = (num)=>{
    let sum =0;
   while(num>0){
       sum = sum+ Math.ceil(num%10)* Math.floor(num%10);
       num = Math.floor(num/10);
   }

   return sum;
}

const run_program =(num)=>{
    let after_math = do_math(num)
    console.log(after_math);
    while(after_math>3){
        after_math = do_math(after_math)
        if(after_math==1){
            console.log(after_math);
            break;
        }
        if(after_math>1 && after_math<=3){
            console.log(after_math);
            break;
        }
    }
}

run_program(2)