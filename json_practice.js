let data1={
    fruit:"Apple",
    color:"Red",
    weight:150,
    taste:"Sweet"
}
console.log(data1);
//converting object to JSON
let data2=JSON.stringify(data1);
console.log( data2);
//converting JSON to object
let data3=JSON.parse(data2);
console.log(data3);