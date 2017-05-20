"use strict"

var Weapon = require('../../../clash/weapons/weapon');
var expect = require('chai').expect;

describe('Weapon', function() {

    let weapon

    beforeEach(function() {
        weapon = new Weapon(10,10)
    })

    describe("#constructor", function () {

        it("should set the given dmg", function () {
            expect(weapon._damage).to.eql(10)
        })

        it("should set the given def", function () {
            expect(weapon._defense).to.eql(10)
        })

    })

    describe("#getDMG()", function () {

        it("should return at least the given dmg", function () {
            expect(weapon.getDMG()).to.be.at.least(10)
        })

        it("should return between the given dmg and dmg / 3 ", function () {
            expect(weapon.getDMG()).to.be.within(10,13)
        })

        it("should return sometimes the given dmg and dmg / 3 ", function () {

            let enoughDMG = false

            for (var i = 0; i < 20; i++) {
                if(weapon.getDMG() == 13){
                    enoughDMG = true
                    break;
                }
            }

            expect(enoughDMG).to.be.ok
        })

    })

    describe("#getDEF()", function () {

        it("should return at least the given def", function () {
            expect(weapon.getDEF()).to.be.at.least(10)
        })

        it("should return between the given def and def / 3 ", function () {
            expect(weapon.getDEF()).to.be.within(10,13)
        })

        it("should return sometimes the given def and def / 3 ", function () {

            let enoughDEF = false

            for (var i = 0; i < 20; i++) {
                if(weapon.getDEF() == 13){
                    enoughDEF = true
                    break;
                }
            }

            expect(enoughDEF).to.be.ok
        })

    })

})
