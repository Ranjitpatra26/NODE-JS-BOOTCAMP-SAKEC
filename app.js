/*console.log("Hello, world!");  
const cowsay = require("cowsay");
console.log(cowsay.say({text :"i'm a moooodule", e: "oO",T: "U"}));
const abc = 5
console.log('the value of a is :' +abc );
console.log(`the value of a is : ${abc}` );

function greet(name,age) {
    let message = `hello, ${name}! you're Age is ${age}`;
    return message;

}

const greeting =  greet("alice",20);
console.log(greeting);

/*let counter = 0;
while(counter < 3) {
    console.log(`loop iteration : ${counter}`);
    counter += 1;

}
console.log("While loop finished.");

const fruits = ["apple","banana","cherry"];
for (let i = 0; i < fruits.length;i++){
    const fruit = fruits[i];
    console.log(`fruit at index ${i} is : ${fruit}`);

}

let temp = 25;
if(temp>30){
    console.log("It's hotday");
}
else if (temp>20){
    console.log("It's a pleasant day");
}
else{
    console.log("It's cold");
}

function calarea(len,wid=1){

return len*wid;
}
const arec = calarea(10,5);
console.log(`Area of rectangle is ${arec}`);
const asq = calarea(8);
console.log(`Area of square is ${asq}`);

function calculateArea(length,width = 1) {
    return length*width;

}

const rectangleArea = calculateArea(10,5);
console.log(`Area of a 10x5 rectangle is: ${rectangleArea}`);

const squareArea = calculateArea(8);
console.log(`area of a square wwith side 8 (using  default width) is : ${squareArea}`);


Q1)
let sum = 0;
for(let i = 0; i<1000; i++)
{
    if ( i%3==0 || i%5==0)
    {
        sum +=i;

    }
}
console.log(`sum of such number is`,sum);

let a = 0 ,b = 1 ,sum = 0;
let c;

while (true) {
    c = a + b;
    console.log(c);
    if (c >= 4000000) break;
    if (c % 2 == 0) {
        sum += c;
    }
    a = b;
    b = c;

}
console.log("sum of even number unver 4 million is: ",sum);

function largestPrimeFactor(n) {
  let factor = 2;
  while (factor * factor <= n) {
    if (n % factor === 0) {
      n /= factor;
    } else {
      factor++;
    }
  }
  return n;
}

const number = 600851475143;
console.log(largestPrimeFactor(number));


const myobject={
    "name":"Alice",
    "age":25,
    "isStudent":true,
    "hobbies":["reading","coding"],
    "address":{
        "city":"new work",
        "zipCode":"10001"
    }
}

console.log(`Name:${myobject.name}`);//this syntax is used  to print onl string vale
console.log(`1st Hobby:${myobject.hobbies[0]}`);
console.log(`zipCode:${myobject.address.zipCode}`);

const array=[];
for(let i=1; i<=10; i++){
    array[i]=i;
    console.log(array[i]);
}

for(i=1;i,i<=100;i++)array.push(i)
    a=[2,3,4,5,6]
    [3,6,8,9].reduce((a,x)=>a+x)
    function abc(x){return x*3}*/

    a = [3,4,-5,-6,7]
    let sum = a.filter(x=>x>0).reduce((a,x)=>a+x)
    console.log(sum)















                                        