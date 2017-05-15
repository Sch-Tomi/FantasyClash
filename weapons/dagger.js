"use strict"

var Weapon = require("./weapon")

class Dagger extends Weapon {
    constructor() {
        super(5)
    }
}

module.exports = Dagger
