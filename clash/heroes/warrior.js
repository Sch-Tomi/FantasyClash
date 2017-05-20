"use strict";

class Warrior {

    constructor(life=1) {
        this._life = life > 30 ? 30 : life
        this._weapon = null
        this._name = "warrior"
    }

    getHP(){
        return this._life
    }

    attacked(dmg=1){
        this._life -=  this._weapon == null ? parseInt(dmg) : (parseInt(dmg) - parseInt(this._weapon.getDEF()))
    }

    attack(hero){
        let dmg = this._weapon == null ? 1 : parseInt(this._weapon.getDMG())
        hero.attacked(dmg)
    }

    addWeapon(weapon){
        this._weapon = weapon
    }


    serialize(){
        if(this._weapon == null){
            return {type: this._name, hp: this._life}
        }else{
            return {type: this._name, hp: this._life, weapon: this._weapon.toString()}
        }
    }
}

module.exports = Warrior
