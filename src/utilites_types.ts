//Partial<T>

type person10={
    name:string,
    age:number,
    email:string
}

type PartialPerson=Partial<person10>

const per:PartialPerson={
    name:'kumar'// All properties are optional
}

//Required<T>

type person11={
    name?:string
    age?:number
}

type Requiredperson=Required<person11>

const Req:Requiredperson={
name:'Ramya',// All properties must be provided
age:23

}

//Readonly<T>
type Userinfo={
    name:string,
    age:number
}

type Readonlyuserinfo=Readonly<Userinfo>


const reads:Readonlyuserinfo={
    name:'kumar',
    age:25
}
//reads.name=35// // ❌ Error: Cannot assign to 'age' because it is a read-only property

//Record<K, T>

type Roles = "admin" | "user" | "guest";

type userRoles=Record<Roles,number>

const UserRoles:userRoles={

    admin:1,
    user:2,
    guest:3
}

type UserRolessring=Record<Roles,string>

const UserRolesString:UserRolessring={

    admin:'superadmin',
    user:'normaluser',
    guest:'demouser'
}

//Pick<T, K>

type Person13 = {
    name: string;
    age: number;
    address: string;
  };
  
  type NameAndAge = Pick<Person13, "name" | "age">;
  
  const person14: NameAndAge = {
    name: "John",
    age: 30,
    
  };

  //Omit<T, K>
  type person15={
    name:string,
    age:number,
    address:string
  }

  type withoutaddress=Omit<person15,'address'>
  const person16:withoutaddress={
    name:'kumar',
    age:27,
    
  }
  console.log(person16.age)


  //Exclude<T, U>

  type Stat = 'success' | 'error' | 'loading';

  type withouterror=Exclude<Stat,'error'>
  const sat1:withouterror='success'
  const sat2:withouterror='loading'

//Extract<T, U>
  type onlysuccessandloading=Extract<Stat,'success'|'loading'>
  const sat3:onlysuccessandloading='loading'
  const sat4:onlysuccessandloading='success'

  //NonNullable<T>

  type MayBeUser = string|number | null | undefined;
type UserNull = NonNullable<MayBeUser>;

const userNull: UserNull ='kumar'


//ReturnType<T>

function getUser() {
    return { id: 1, name: "Alice" };
  }
  
  type Us = ReturnType<typeof getUser>; // { id: number; name: string; }

  // Parameters
  function greet(name: string, age: number): string {
    return `Hello, ${name}, age ${age}`;
  }
  
  type GreetParams = Parameters<typeof greet>; // [string, number]
  const usE:GreetParams=['Ramya',23]