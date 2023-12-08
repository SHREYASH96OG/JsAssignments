let a = 12;
factor(a);
function factor(a){
    let arr = []
    for(let i = 1;i<=a;i++){
        if(a%i == 0){
            // console.log(i+" ");
            arr.push(i);
        }
    }
    console.log(arr);
}
