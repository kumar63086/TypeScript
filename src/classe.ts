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