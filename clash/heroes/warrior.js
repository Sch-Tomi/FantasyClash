"use strict";

class Warrior {

    constructor(life=1) {
        this._life = life > 30 ? 30 : life
        this._weapon = ""
    }

    getHP(){
        return this._life
    }

    attacked(dmg=1){
        this._life -=  this._weapon == "" ? parseInt(dmg) : (parseInt(dmg) - parseInt(this._weapon.getDEF()))
    }

    attack(hero){
        let dmg = this._weapon == "" ? 1 : parseInt(this._weapon.getDMG())
        hero.attacked(dmg)
    }

    addWeapon(weapon){
        this._weapon = weapon
    }


    serialize(){
        if(this._weapon == ""){
            return {type: 'warrior', hp: this._life}
        }else{
            return {type: 'warrior', hp: this._life, weapon: this._weapon.toString()}
        }
    }
}

module.exports = Warrior
