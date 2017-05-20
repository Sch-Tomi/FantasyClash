"use strict"

var Priest = require('../../../clash/heroes/priest');
var Warrior = require('../../../clash/heroes/warrior');
var Sword = require('../../../clash/weapons/sword');
var Dagger = require('../../../clash/weapons/dagger');
var expect = require('chai').expect;

describe('Priest', function() {

    describe('#constructor', function() {

        it('given 30 life should init maxHP to 30', function() {
            let priest = new Priest(30)
            expect(priest._maxHP).to.eql(30);
        });
    })

    describe("#attack", function() {

        it("priest should decrease opponent's life by 1 and heal himself", function() {

            let priest = new Priest(30)
            let warrior = new Warrior(30)

            priest._life = 29
            priest.attack(warrior)

            expect(priest.getHP()).to.be.at.least(30)
            expect(warrior.getHP()).to.eql(29)
        })

    })

    describe("#serialize", function () {

        let life
        let priest

        beforeEach(function() {
            life = 30
            priest = new Priest(life)
        })

        it("should return without weapon", function () {
            expect(priest.serialize()).to.eql({type: "priest", hp:life})
        })

        it("should return with weapon", function () {
            priest.addWeapon(new Sword)
            expect(priest.serialize()).to.eql({type: "priest", hp:life, weapon: "Sword"})
        })

    })

    describe('#heal', function () {
        let priest
        let life

        beforeEach(function() {
            life = 20
            priest = new Priest(life)
            priest._life = 10
        })

        it("should give at least one hp", function () {
            priest._heal()
            expect(priest.getHP()).to.be.at.least(11);
        })

        it("should give maybe 2 hp", function () {
            priest._heal()
            expect(priest.getHP()).to.be.within(11,12)
        })

        it("should return sometimes 2", function () {
            for (var i = 0; i < 20; i++) {
                priest._heal()
                if(priest.getHP() == 12){
                    break;
                }else {
                    priest._life = 10
                }
            }

            expect(priest.getHP()).to.be.eql(12)

        })

    });

})
