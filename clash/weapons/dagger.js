"use strict"

var Weapon = require("./weapon")

class Dagger extends Weapon {
    constructor() {
        super(5, 4)
    }
}

module.exports = Dagger
