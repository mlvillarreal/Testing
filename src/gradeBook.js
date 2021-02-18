const findMean = (num1, num2, num3) => {
    if (typeof num1 != 'number'){
        throw new Error('This is wrong!')
    }

    const avg = (num1+num2+num3)/3;
  //  const avg = math.mean(num1, num2, num3);
    if(avg >=90 && avg <=100 ){
        return "A";
    }else if(avg >=80 && avg <90 ){
        return  "B";
    }else if(avg >=70 && avg <80){
        return "C";
    }else if(avg >=60 && avg <70){
        return "D";
    }else if(avg >0 && avg <60){
        return "F";
    }
    
}

const summation = (param) => {
    return (param * (param+1))/2;
}

const evenOdd = (param) => {
    if(param % 2 === 0 ){
        return 'even';
    }else if(param % 2 === 1){
        return 'odd';
    }
    else{
        throw new Error('This is wrong!')
    }

}


const repeatValue = (param, count) => {
   return param.repeat(count) ;
}