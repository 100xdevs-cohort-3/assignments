const user = {
    name: "saurabh",
    last: "Raghuvanshi",

    fullName : function(){
        console.log(`${this.name}${this.last}`)
    },

    fullname : ()=>{
       console.log(`${this.name} ${this.name}`);
       
    }
}

user.fullName();
user.fullname();