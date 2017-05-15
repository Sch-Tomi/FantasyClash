"use strict"

class Weapon {

    constructor(dmg, def) {
        this._damage = dmg
        this._defense = def
    }

    getDMG(){
        return this._damage
    }

    getDEF(){
        return this._defense
    }
}

module.exports = Weapon
