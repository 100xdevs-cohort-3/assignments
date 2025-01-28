abstract class Userabstract{
    name:string;
    constructor (name: string){
        this.name=name;
    }

    abstract greet():string ;
    //default implementation
    hello (){
        console.log("Hii there ");
    }

}

class Employee extends Userabstract{
    name:string 
    constructor (name: string){
        super(name)
        this.name=name;
    }
    greet(){
        return "hii " + this.name;
    }
}

const emp=new Employee("puja");
console.log(emp.greet());