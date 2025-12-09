const obj={
    harry:90,
    Hermione:100,
    Ron:15
}
for(let a in obj){
    console.log("The marks of  "+ a+" is "+obj[a]);
}
function mean( a, b, c, d, e)
{
    return(parseFloat(a+b+c+d+e)/5.0);
}
console.log(mean(1,14,15,16,19));