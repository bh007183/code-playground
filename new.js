const surftime = require("./surfsUp");


class frozen extends surftime{
constructor(penguin, chicken, other, brother){
super(penguin, chicken, other)
this.brother = brother
}
}

const jack = new frozen("tiger", "chick", "late", true)

jack.getPenguin()