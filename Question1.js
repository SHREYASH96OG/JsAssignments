let a = 23;
let b = 15;
let c = 45;
maximumm(a,b,c);
function maximumm(a,b,c){

    if(a>b&&a>c){
        console.log(`${a} is greater than other`);
    }
    else if(b>a&&b>c){
        console.log(`${b} is greater than other`)
    }
    else{
        console.log(`${c} is greater than other`)
    }

}
