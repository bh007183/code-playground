class surftime {
    constructor(penguin, chicken, other){
        this.penguin = penguin
        this.chicken = chicken
        this.other = other
    }
    getPenguin = () => {
        if(this.penguin === "penguin"){
            console.log("yes sir")
        }else{console.log("no way jose")}
    }

}




function Build(name, value){
    this.name = name,
    this.value = value

    getName = () => {
        console.log("getName")

    }

}

const ben = new Build("Ben", "None")

console.log(ben)