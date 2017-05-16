"use strict"

var Weapon = require("./weapon")

class MagickStick extends Weapon {
    constructor() {
        super(8, 1)
    }

    toString(){
        return "MagickStick"
    }
}

module.exports = MagickStick
