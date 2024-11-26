/* generics
 Generics are a way to create components (functions, classes or interfaces)
 that work with different types without losing type safety
*/
//Generic Function
function idenity<T>(value:T):T{
    return value
}
console.log(idenity<string>('kumar'))
console.log(idenity('Ramya'))
console.log(idenity<number>(166))
console.log(idenity(616))
console.log(idenity<boolean>(true))
console.log(idenity(false))

//Generic Classes

class Box<T> {
    private containet:T
    
    constructor(value:T){
    this.containet=value
    }
getContent():T{
    return this.containet
}
}

const stringBox=new Box<string>('this typescript content')
const numberBOX=new Box<number>(166)
console.log(stringBox.getContent())
console.log(numberBOX.getContent())

//Generic Interfaces

interface Pair<K, V> {
    key: K;
    value: V;
  }

  const pair:Pair<string,number>={key:'kumar',value:16}
  console.log(pair)

  //Generic Constraints
  
  function getLength<T extends { length: number }>(value: T): number {
    return value.length;
  }

  console.log(getLength('hello'))
  console.log(getLength([1,2,3,4]))

  //deafult
  function createArray<T = string>(length: number, value: T): T[] {
    return Array(length).fill(value);
  }
  
  // Usage
  console.log(createArray(3, "Hello")); // Output: ["Hello", "Hello", "Hello"]
  console.log(createArray<number>(3, 42)); // Output: [42, 42, 42]
  

  class Stack <T>{
    items:T[]=[]

    push(item:T):void{
        this.items.push(item)
    }
    pop():T|undefined{
      return  this.items.pop()
    }

    getStack(){
        return this.items
    }

  }

  const numberStack=new Stack<number>()
  console.log(numberStack.push(20))
  console.log(numberStack.push(30))
  console.log(numberStack.pop())
  console.log(numberStack.getStack())

  const stringStack=new Stack<string>()
  console.log(stringStack.push('kumar'))
  console.log(stringStack.push('Ramya'))
  console.log(stringStack.pop())
  console.log(stringStack.getStack())