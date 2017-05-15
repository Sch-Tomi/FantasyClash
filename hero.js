"use strict";

class Hero {

    constructor(life=1) {
        this._life = life > 30 ? 30 : life
    }

    getHP(){
        return this._life
    }

    attacked(){
        this._life--
    }

    attack(hero){
        hero.attacked()
    }

}

module.exports = Hero
