"use strict";

var Warrior = require('./warrior');

class Priest extends Warrior {

    constructor(life) {
        super(life)
        this._maxHP = this.getHP()
    }

    attack(warrior){
        this._heal()
        super.attack(warrior)
    }

    _heal(){
        if (this.getHP() < this._maxHP) {
            this._life++
        }
    }


}

module.exports = Priest
