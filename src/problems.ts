/*
1.Create a Bank Account Class: Write a BankAccount class with the following properties:

    accountNumber: string
    balance: number (private)
    The class should have methods:

    deposit(amount: number): void (to add to balance)
    withdraw(amount: number): void (to subtract from balance)
    getBalance(): number (to return current balance)
*/

class BankAccount {
    private balance:number
    constructor(public accuntNumber:string,insialBlance:number){
        this.balance=insialBlance
    }
     deposit(amount:number):void {
        this.balance=+amount
    }
    withdraw(amount:number):void{
        if (amount > this.balance) {
            throw new Error("Insufficient balance");
          }
          this.balance -= amount;
    }
    getBalance():number{
     return this.balance
    }

}

const MyAccount=new BankAccount('1234567',1000)
MyAccount.deposit(2000)
MyAccount.withdraw(500)
console.log( MyAccount.getBalance())



/*
2. Create an Employee Class with Inheritance: 
    Define an Employee class with properties name and salary. 
    Create a subclass Manager that adds a department property. 
    Both classes should have a getDetails method that returns 
    a string with the employee's details.
*/

class Employe{
    constructor(public name:string, public salary:number){

    }
    getDeatailes():string{
        return `Employe ${this.name},Salary ${this.salary} `
    }


}


class Manager extends Employe {
    constructor(name:string,salary:number,public department:string){
      super(name,salary)
    }
    getDeatailes(): string {
        return `Manager ${this.name},Salary ${this.salary},Department ${this.department}`
    }
}

const Emp=new Employe('kumar',200000)
console.log(Emp.getDeatailes())
const Mg=new Manager('kumar',35000,'software developer')
console.log(Mg.getDeatailes())

