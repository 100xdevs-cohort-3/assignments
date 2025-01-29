// Intersection implemented by types
type Employee1={
    name: string;
    startDate:string;
}

type Manager1={
    name:string;
    department:string;
};

type TeamLead1 =Employee1 & Manager1;

let  e: Employee1={
    name:"puja",
    startDate:"2021-01-01"
}

let m: Manager1={
    name:"puja",
    department:"AIML"
}


let t:TeamLead1={
    name:"puja",
    startDate:"2021-01-01",
    department:"AIML"
}

