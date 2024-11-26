//regular functions
function adds (a:number,b:number):number{
    return a+b
}
console.log(adds(16,6))

//function expersion
const mult=function(a:number,b:number):number{
    return a*b
}

console.log(mult(16,6))

//Arrow function
const divide=(a:number,b:number):number=>a/b
console.log(divide(16,8))
const squre=(x:number):number=>x*x
console.log(squre(5))

//deafult parametr
function greet1(username: string, greeting: string = 'Hi'): string {
    // return greeting + ' ' + username;
    return `${greeting?greeting:''} ${username}`; // ternary operator
}
console.log(greet1('kumar','hey'))

//optional parametres
function greets(name: string, age?: number): string {
    return age ? `Hello, ${name}. You are ${age} years old.` : `Hello, ${name}.`;
  }

  console.log(greets('kumar',28))

  //rest parameter
  function sum(...numbers:number[]):number{
    return numbers.reduce((total,acm)=>total+acm,0)
  }
  console.log(sum(1,2,3,4,5))

  //Overloading
  function calculate(x: number, y: number): number;
  function calculate(x: string, y: string): string;
  function calculate(x: any, y: any): any {
    return x + y;
  }
  console.log(calculate(5,10))
  console.log(calculate('Hello','world'))

  //void
  function logMessage(message: string): void {
    console.log(message);
  }
  logMessage('kumar Ramya')

  function throwError(message: string): never {
    throw new Error(message);
  }
  interface User2 {
    name:string,
    email:string,
    age:number
  }

  function formauser(use:User2):string{
    return  `User ${use.name} (${use.age} yrs) can be contacted via ${use.email}`
  }
  const use:User2={
 name:'kumar',
 email:'kumar@gmail.com',
 age:28
  }
  console.log(formauser(use))



interface Product{
    price:number,
    quantity:number
}
function calculater(products:Product[]):number{
    return products.reduce((total,product)=>total+product.price*product.quantity,0)
}

const cart:Product[]=[
    {price:200,quantity:1},
    {price:600,quantity:2}
]
console.log(calculater(cart))

type car={
    type:'car',
    make:string,
    model:string,
    year:number
}
type bike={
    type:'bike',
    brand:string,
    cc:number
}
type vechileData=car|bike 
function getvehicledatailes(vechile:vechileData){
if(vechile.type=='car'){
    console.log(`Car ${vechile.make} ${vechile.model} ${vechile.year}year`)
}else{
    console.log(`BIke: ${vechile.brand}, CC: ${vechile.cc}`);
}
}

let myCarDetails: vechileData = {
    type: 'car',
    make: 'Tesla',
    model: 'Model 10',
    year: 2024
};

let myBike: vechileData = {
    type: 'bike',
    brand: 'BMW',
    cc: 400,
};
console.log(myCarDetails)
console.log(myBike)