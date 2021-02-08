const LionKing = require("./center");

class kevin extends LionKing{
    constructor(mane, location, status, hoofs){
    super(mane, location, status)
    this.hoofs = hoofs
    
    }
    
    
}

const alex = new kevin("pretty", "madigascar", "King of newyork", "no hoofs")

alex.showStatus()