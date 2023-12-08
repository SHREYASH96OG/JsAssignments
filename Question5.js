let num = 21;
fibo(num);
function fibo(num)
{
    let n1 = 0;
    let n2 = 1;
    let n3 = 1;
    console.log(n2)
    while(n3<21){
        n3 = n1+n2;
        n1 = n2;
        n2 = n3;
        console.log(n3);
    }
};
