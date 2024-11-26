type Person4 = {
    name: string;
    age: number;
    isEmployed: boolean;
};

type PersonKeys = keyof Person4; // "name" | "age" | "isEmployed"

function getValue(obj: Person4, key: PersonKeys) {
    return obj[key];
}

const person5: Person4 = { name: "John", age: 30, isEmployed: true };
console.log(getValue(person5, "name")); // Output: "John"


type butnsizes='samll'|'meduiam'|'large'
type SizeClasess= `btn${butnsizes}`
const btn:SizeClasess='btnmeduiam'


type Person6 = {
    name: string;
    age: number;
  };
  
  type NameType = Person["name"]; // string
  type AgeType = Person["age"];   // number
  
  function printProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }
  
  // Usage
  const person6: Person6 = { name: "Alice", age: 25 };
  console.log(printProperty(person6, "age")); // Output: 25
  