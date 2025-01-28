interface Peoplee{
    name:string;
    age:number
}

//class implements that interface
class Manager implements Peoplee{
    name:string;
    age:number ;
    number: string;

    constructor(name: string,age:number){
        this.name=name;
        this.age=age;
        this.number="12345567898";
    }
}


// create a god class which extends Manager class
class God extends Manager{
    constructor(name: string, age: number){
        super(name,age);
    }
}

//create the object of this manager class
let usermanger=new Manager("puja",22);
console.log(usermanger.age);