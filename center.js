// class properties / member properties(variables assigned to the class)
// methods / member methods (are functions)

// class Animal{
//     constructor(legs, tail, color){
//         this.legs = legs
//         this.tail = tail
//         this.color = color

//     }
//     showColor(){
//         console.log(this.color)
//     }
// }


class LionKing {
    constructor(mane, location, status){
        this.mane = mane
        this.location = location
        this.status = status
    }
    showStatus(){
        console.log(this.status)
    }
    showMain(){
        console.log(this.mane)
    }
}

const Bruce = new LionKing("fluffy", "africa", "king")
console.log(Bruce.mane)

module.exports = LionKing