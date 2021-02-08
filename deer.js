const LionKing = require("LionKing")

class Bambi extends LionKing{
    constructor(main, continent, status, tail){
        super(main, continent, status)
        this.tail = tail
    }
    tailStat(){
        console.log(tail)
    }
}

const faline = new Bambi("NA", "North America", "no king", "short and fluffy")
faline.showStatus()