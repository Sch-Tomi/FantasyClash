"use strict"

class Weapon {

    constructor(dmg) {
        this._damage = dmg
    }

    getDMG(){
        return this._damage
    }
}

module.exports = Weapon
