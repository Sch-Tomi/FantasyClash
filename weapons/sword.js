"use strict"

var Weapon = require("./weapon")

class Sword extends Weapon {
    constructor() {
        super(7,2)
    }
}

module.exports = Sword
