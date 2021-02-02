class father {
    constructor(){
        this.fatherName = "Rahim";
    }
}


class child extends father{
    constructor (name){
        super();
        this.name=name;
    }
    getFullName(){
        return this.name +" "+this.fatherName;
    }
}

const baby = new child("karim");
const baby2 = new child ("Kalam");
console.log(baby.getFullName());