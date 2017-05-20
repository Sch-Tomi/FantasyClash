"use strict";

var Warrior = require('./warrior');

class Priest extends Warrior {

    constructor(life) {
        super(life)
        this._maxHP = this.getHP()
        this._name = "priest"
    }

    attack(warrior){
        this._heal()
        super.attack(warrior)
    }

    _heal(){
        if (this.getHP() < this._maxHP) {
            this._life++
            
            if(Math.random() > 0.6){
                this._life++
            }

        }
    }

}

module.exports = Priest
