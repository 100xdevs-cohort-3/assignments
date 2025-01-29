//Union by types (either left or right or whole)
type GoodUser={
    name: string;
    gift:string;
};

type BadUser={
    name:string;
    ip:string;
};

type Userr=GoodUser | BadUser;

const userr:Userr={
    name:"puja",
    ip:"aassdddff",
    gift:"12345",
};


type Name =string | boolean;