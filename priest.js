"use strict";

var Hero = require('./hero');

class Priest extends Hero {

    constructor(life) {
        super(life)
        this._maxHP = this.getHP()
    }

    attack(hero){
        this._heal()
        super.attack(hero)
    }

    _heal(){
        if (this.getHP() < this._maxHP) {
            this._life++
        }
    }


}

module.exports = Priest
