"use strict"

class Weapon {

    constructor(dmg, def) {
        this._damage = dmg
        this._defense = def
    }

    getDMG() {
        return this._damage + this._getRandomIntInclusive(0, Math.floor(this._damage / 3))
    }

    getDEF() {
        return this._defense + this._getRandomIntInclusive(0, Math.floor( this._defense / 3))
    }


    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values_inclusive
    _getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

module.exports = Weapon
