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

    serialize(){
        if(this._weapon == ""){
            return {type: 'priest', hp: this._life}
        }else{
            return {type: 'priest', hp: this._life, weapon: this._weapon.toString()}
        }
    }


}

module.exports = Priest
