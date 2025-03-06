let person = {
    name : "divanshu",
    age : 27
};

function personInfo(){
    console.log(`Name : ${this.name}, age : ${this.age}`);
}

personInfo.call(person)