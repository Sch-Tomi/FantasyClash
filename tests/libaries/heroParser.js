"use strict"

const HeroParser = require('../../libaries/heroParser');
const Warrior = require('../../clash/heroes/warrior');
const Priest = require('../../clash/heroes/priest');

const Sword = require('../../clash/weapons/sword');
const Dagger = require('../../clash/weapons/dagger');
const MagickStick = require('../../clash/weapons/magickStick');

const expect = require('chai').expect;


describe('HeroParser', () => {

    describe("#parse", function() {

        context("Hero Type", function() {
            it("should return Warrior for warrior input", function() {
                let hero = { "type": "warrior", "hp": 30, "weapon": "sword" }
                expect(HeroParser.parse(hero) instanceof Warrior).to.be.ok
            })

            it("should return Priest for priest input", function() {
                let hero = { "type": "Priest", "hp": 30, "weapon": "sword" }
                expect(HeroParser.parse(hero) instanceof Priest).to.be.ok
            })

            it("should return Priest for priest input but missing weapon", function() {
                let hero = { "type": "Priest", "hp": 30 }
                expect(HeroParser.parse(hero) instanceof Priest).to.be.ok
            })
        })

        context("Hero HP", function() {

            it("should return Warrior with 30HP for input", function() {
                let hero = { "type": "warrior", "hp": 30, "weapon": "sword" }
                expect(HeroParser.parse(hero).getHP()).to.eql(30)
            })

            it("should return Warrior with 1 HP for input wtih out HP", function() {
                let hero = { "type": "warrior", "weapon": "sword" }
                expect(HeroParser.parse(hero).getHP()).to.eql(1)
            })

        })

        context("Hero Weapon", function() {

            it("should return Warrior with Sword for input", function() {
                let hero = { "type": "warrior", "hp": 30, "weapon": "sword" }
                expect(HeroParser.parse(hero)._weapon instanceof Sword).to.be.ok
            })

            it("should return Warrior with Dagger for input", function() {
                let hero = { "type": "warrior", "hp": 30, "weapon": "Dagger" }
                expect(HeroParser.parse(hero)._weapon instanceof Dagger).to.be.ok
            })

            it("should return Warrior with MagickStick for input", function() {
                let hero = { "type": "warrior", "hp": 30, "weapon": "MagickStick" }
                expect(HeroParser.parse(hero)._weapon instanceof MagickStick).to.be.ok
            })

        })


    })

})
