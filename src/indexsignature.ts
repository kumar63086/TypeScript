type Dictionary = {
    [key: string]: string;
  };

  const translations:Dictionary={
    hello:'hola',
    godbye:'Adioes'
  }

  console.log(translations.hello)
  console.log(translations['godbye'])

  interface StringArray{
    [index:number]:string
  }
  const Arra:StringArray=['javaScript','React','Nextjs']
  console.log(Arra[2])

  type NumericIndex = {
    [index: number]: string;
  };

  const myarray:NumericIndex={
    0:'Zero',
    1:'One',
    3:'Secound'
  }

  console.log(myarray[1])


  type Person7={
   name:string,
   [key:string]:string|number
  }


  const person9: Person7 = {
    name: "Alice",
    age: 25,
    city: "New York",
  };

  console.log(person9.name)
  console.log(person9['city'])