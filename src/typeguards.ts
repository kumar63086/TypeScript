//Built-in Type Guards
//boolen,string,number

function PrintValue(value:string|number){
    if(typeof value==='string'){
        console.log(`String value: ${value.toUpperCase()}`)
    }else{
        console.log(`number value:${value.toFixed()}`)
    }
}
console.log(PrintValue('kumar'))
console.log(PrintValue(42))


//instanceof Type Guard

class Dog1{
    brak(){
        console.log('Woof!')
    }
}

class Cat1{
    meow(){
        console.log('Meow!')
    }
}

function Makesound(animal:Dog1|Cat1){
    if (animal instanceof Dog1) {
        animal.brak()
    }else if(animal instanceof Cat1){
        animal.meow()
    }
}

Makesound(new Dog1)
Makesound(new Cat1)

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(animal: Fish | Bird): animal is Fish {
  return (animal as Fish).swim !== undefined;
}

function moveAnimal(animal: Fish | Bird) {
  if (isFish(animal)) {
    animal.swim();
  } else {
    animal.fly();
  }
}

// Usage
const fish: Fish = { swim: () => console.log("Swimming!") };
const bird: Bird = { fly: () => console.log("Flying!") };

moveAnimal(fish); // Output: Swimming!
moveAnimal(bird); // Output: Flying!


type Square = { kind: "square"; size: number };
type Circle = { kind: "circle"; radius: number };

type Shape = Square | Circle;

function calculateArea(shape: Shape) {
  switch (shape.kind) {
    case "square":
      return shape.size ** 2;
    case "circle":
      return Math.PI * shape.radius ** 2;
  }
}

// Usage
const square: Square = { kind: "square", size: 4 };
const circle: Circle = { kind: "circle", radius: 3 };

console.log(calculateArea(square)); // Output: 16
console.log(calculateArea(circle)); // Output: 28.27


type CAR={
    drive:()=>void
}
type Bot={
    sail:()=>void
}

function moves(Vechiles:CAR|Bot){
    if('drive' in Vechiles){
        Vechiles.drive()
    }else{
    Vechiles.sail()
    }
}
const car2: CAR = { drive: () => console.log("Driving!") };
const bot:Bot={sail:()=>console.log('Sailing!')}

moves(car2)
moves(bot)