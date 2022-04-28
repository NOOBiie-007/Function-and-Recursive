function showmsg(n){
    console.log(++n)
}
var n=10;
showmsg(n);

var n=3;
var rslt =factorial(n);
console.log(rslt);

function factorial(n){
    if(n==1){
        return 1;
    }
    else{
        return n*factorial(n-1)
    }
}