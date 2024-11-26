//String Literal Types
type Direction='up'|'down'|'left'|'right'

function Move(derection:Direction):void{
    console.log(`Move to the direction ${derection}`)

}
console.log( Move('up'))


///number literl types
type DiceRoll=1|2|3|4|5|6


function rollDice(): DiceRoll {
    return Math.floor(Math.random() * 6 + 1) as DiceRoll;
  }
const Roll=rollDice()
console.log(Roll)

//Boolean Literal Types

type Lightswitch=true|false

function togleswitch(state:Lightswitch):Lightswitch{
    return !state
}
let lithtswitch:Lightswitch=true
lithtswitch=togleswitch(lithtswitch)
console.log(lithtswitch)

// Literal Types with Functions
type HtppMethodes='Get'|'Post'|'Delete'|'Update'
function requset(url:string,method:HtppMethodes):void{
    console.log(`Making a ${method} request to ${url}`);
}
console.log(requset('htpps//example.com','Post'))

//Literal Types with Unions

type Satatus='succes'|'error'
type Respons={statatus:Satatus, message:string}

const respones:Respons={
    statatus:'succes',
    message:"Operation completed successfully",
}
console.log(Response)
//enum
type Role = "admin" | "user" | "guest";

function getRolePermissions(role: Role): string[] {
  switch (role) {
    case "admin":
      return ["read", "write", "delete"];
    case "user":
      return ["read", "write"];
    case "guest":
      return ["read"];
  }
}

// Usage
console.log(getRolePermissions("admin")); // Output: ["read", "write", "delete"]
