let a=[1,2,3,4];
// Insert elements athe end of array
a.push(14);
console.log(a);
// Insert elements at the beginning of array
a.unshift(15);
console.log(a);
//remove elements from the end of array
a.pop();

a.sort((a,b)=>a-b);
console.log(a);
//remove elements from the beginning of array
a.shift();
console.log(a);
//map elements of array into a new array

let b=a.map(x=>x*x);
let c=a.map(x=>x%2==0);

console.log(b);
console.log(c);
//filter elements of array into a new array
let s=a.filter(x=>x%2==0);
console.log(s);
//reduce elements of array into a single value
let reduced=a.reduce((a,b)=>a+b,0);
console.log(reduced);
let y=["Ginola","Beckham","Buffon","Messi"];
let z=y.join(",");
console.log(z);

let w="R9";
console.log(y.includes(w));