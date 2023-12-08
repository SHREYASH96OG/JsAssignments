let a = 36;
let result = pon(a);
if(result){
    console.log("prime")
}else{
    console.log("Not prime")
}
function pon(a){
    let flag = 0;
    for(let i = 2;i<=a;i++){
        if(a%i == 0){
            flag++;
            break;
        }
    if (flag == 0){
        return true;
    }
    else{
        return false;
    }
    }
}
