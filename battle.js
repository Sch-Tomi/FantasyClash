"use strict"

class Battle {
    constructor(heroA, heroB) {
        this._heroA = heroA
        this._heroB = heroB
    }

    getWinner(){

        while (this._herosAreAlive()) {
            if (this._heroA.getHP() > 0) {
                this._heroA.attack(this._heroB)
            }

            if (this._heroB.getHP() > 0) {
                this._heroB.attack(this._heroA)
            }
        }

        return this._findWinner()

    }

    _herosAreAlive(){
        return this._heroA.getHP() > 0 && this._heroB.getHP() > 0
    }

    _findWinner(){
        return this._heroA.getHP() > 0 ? this._heroA : this._heroB
    }
}

module.exports = Battle
