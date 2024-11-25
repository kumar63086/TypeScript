let a:number=123_456_789
let b:bigint=123456789n
console.log(a)
console.log(b)
var isActive:boolean=true
console.log(isActive)
var array:number[]=[1,2,3,4,]
console.log(array)
var char:readonly string[]=['a','b']
//char.push('kumar')
console.log(char)
var val:undefined=undefined
var val1:null=null
console.log(val)
console.log(val1)
const car:{type:string,model:string,year:number}={
    type:'Tyota',
    model:'coroloo',
    year:1976
}
console.log(car.model)
console.log(car)
let user
console.log(user)


let numval
numval=3
numval='a'

console.log(numval)
let ourTuple: [number, boolean, string];
ourTuple=[616,true,'rk']
ourTuple.push('Something new and wrong');
console.log(ourTuple)

const graph: [number, number] = [55.2, 41.3];
const [x, y] = graph;
console.log(x,y)

enum CardinalDirections {
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
  };
  console.log(CardinalDirections.West)

  enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
  }
  console.log(StatusCodes.BadRequest)

  let value:unknown
  value=42
  value="ok"
  value=true
  //console.log(value.toUpperCase())
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // OK
  } else if (typeof value === "number") {
    console.log(value.toFixed(2)); // OK
  }
  function infiniteLoop(): never {
    while (true) {
      console.log("Running forever...");
    }
  }
  //infiniteLoop()
//type ass
  const str:any='hello world'
  const srtlength:number=(str as string).length
  console.log(srtlength)

//   interface User{
//     id:number,
//     name:string,
//     email?:string

//   }

//   const fullname:User={
//     id:1,
//     name:'kumar'

//   }
//   console.log(fullname.name)
//   const em:User={
//     id:2,
//     name:'Ramya',
//     email:'Ramyaborelli2002@gmail.com'
//   }
//   console.log(em.email)

//   interface Admin extends User{
//     role:string
//   }
//   const admin:Admin={
//     id:1,
//     name:'Admin super',
//     email:'admin@gmail.com',
//     role:'superAdmin'

//   }
//   console.log(admin.role)

  type User = {
  id:number,
  name:string,
  email?:string
  }
  const us:User={
    id:1,
    name:'kumar',

  }
  console.log(us.name)

  type Admin = User&{
    role:string
  }

  type Point = [number, number];

const coord: Point = [10, 20];
console.log(coord[1])
type Status = "success" | "error" | "loading";

const currentStatus: Status = "success";
console.log(currentStatus)

var id:string|number|undefined
id=1
id='101'
id=undefined

//tynarrowing
function printId(id:number|string){
    if(typeof id==='string'){
      console.log(`id is string:`, id.toLocaleUpperCase())   
    }else{
      console.log(`id is number:`, id)   
        
    }
   
}

//printId('kumar')
printId(11)
interface Person{
    id:number,
    name:string,
    greet:()=>void

}

const person:Person={
    id:1,
    name:'kumar',
    greet(){
        console.log('hi kumar')
    }
}
person.greet()
interface Mathop{
    (a:number,b:number):number
}
var add:Mathop=(x,y)=>x+y
var sub:Mathop=(x,y)=>x-y
console.log(add(16,6))
console.log(sub(16,6))

//primateve
type Id=number
type Username=string

const userId:Id=102
const namef:Username='kumar'
console.log(userId)
console.log(namef)
//objects
type USER={
    id:number,
    name:string,
    age:number
}

const person1:USER={
    id:1,
    name:'kumar',
    age:27
}
console.log(person1.age,person1.name)

//union
type status='succes'|'loading'|'error'
let currentstatus:status='succes'
console.log(currentstatus)
//intersction
type BasicInfo = {
    name: string;
    age: number;
  };
  
  type Address = {
    city: string;
    country: string;
  };
  
  type User1 = BasicInfo & Address;

  const p:User1={
    name:'Kumar',
    age:27,
    city:'Hyderabad',
    country:'Indian'
  }
  console.log(p.city)