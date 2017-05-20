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

        it("should return the given dmg", function () {
            expect(weapon.getDMG()).to.be.within(10,13)
        })

    })

    describe("#getDEF()", function () {

        it("should return the given def", function () {
            expect(weapon.getDEF()).to.be.within(10,13)
        })

    })

})
