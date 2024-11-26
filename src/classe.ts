class Person{
     // Properties with type annotations
  private names: string; // private: accessible only within the class
  public age: number;   // public: accessible anywhere
  protected gender: string; // protected: accessible within the class and subclasses

  // Constructor to initialize properties
  constructor(name: string, age: number, gender: string) {
    this.names = name;
    this.age = age;
    this.gender = gender;
  }
  // Method
  public greets(): string {
    return `Hello, my name is ${this.names} and I am ${this.age} years old.`;
  }

  // Getter and Setter for name
  public getName(): string {
    return this.names;
  }

  public setName(newName: string): void {
    this.names = newName;
  }


}

const person2=new Person('kumarBorelli',28,'male') 
 
console.log( person2.greets())
person2.setName("Ramya Borelli");
console.log(person2.getName());

class Employee extends Person {
    constructor(names: string, age: number, gender: string, public jobTitle: string) {
      super(names, age, gender); // Call parent constructor
    }
  
    public describe(): string {
      return `${this.greets()} I work as a ${this.jobTitle}.`;
    }
  }
  
  const employee = new Employee("Charlie", 25, "Male", "Software Developer");
  console.log(employee.describe());
  // inheritance

  class Animal{
    constructor(public name:string){

    }
    makesound():void{
        console.log('Some generic sound...');
    }
  }

  class Dog extends Animal{
    constructor(name:string){
       super(name) 
    }
    makesound(): void {
        console.log('Woof! Woof!');
    }
  }
  const dog=new Dog('pupy')
  console.log(dog.makesound())
  console.log(dog.name)
//abstract
abstract class Animal2 {
    // Abstract method (must be implemented by subclasses)
    abstract makeSound(): void;
  
    // Concrete method (shared by all subclasses)
    move(): void {
      console.log("The animal moves.");
    }
  }

  class Dog2 extends Animal2{
    makeSound(): void {
        console.log("Bark!");
      }
  }
  class cat extends Animal2{
    makeSound(): void {
        console.log("Meow!")
    }
  }

const DOGG=new Dog2()
console.log(DOGG.makeSound())
const Cat=new cat()
console.log(Cat.makeSound())