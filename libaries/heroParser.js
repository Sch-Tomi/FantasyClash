"use strict"

const Warrior = require('../clash/heroes/warrior');
const Priest = require('../clash/heroes/priest');

const Sword = require('../clash/weapons/sword');
const Dagger = require('../clash/weapons/dagger');
const MagickStick = require('../clash/weapons/magickStick');

class HeroParser {
    constructor() {

    }

    _createHero(type, hp){
        switch (type.toLowerCase()) {
            case "warrior":
                return new Warrior(hp)
                break;
            case "priest":
                return new Priest(hp)
                break;
        }
    }

    _createWeapon(weapon){
        switch (weapon.toLowerCase()) {
            case "sword":
                return new Sword
                break;
            case "dagger":
                return new Dagger
                break;
            case "magickstick":
                return new MagickStick
                break;
        }
    }

    static parse(hero){

        let parser = new HeroParser

        let type = hero.type
        let hp = hero.hp
        let weapon = hero.weapon

        let Hero = parser._createHero(type, hp)
        if(weapon != null){
            Hero.addWeapon(parser._createWeapon(weapon))
        }

        return Hero
    }
}

module.exports = HeroParser
