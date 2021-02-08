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

module.exports = surftime