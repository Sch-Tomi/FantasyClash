"use strict";

class Hero {

    constructor(life=1) {
        this._life = life > 30 ? 30 : life
    }

}

module.exports = Hero
