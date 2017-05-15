"use strict"

var Weapon = require('../../weapons/weapon');
var expect = require('chai').expect;

describe('Weapon', function() {

    let weapon

    beforeEach(function() {
        weapon = new Weapon(1,1)
    })

    describe("#constructor", function () {

        it("should set the given dmg", function () {
            expect(weapon._damage).to.eql(1)
        })

        it("should set the given def", function () {
            expect(weapon._defense).to.eql(1)
        })

    })

    describe("#getDMG()", function () {

        it("should return the given dmg", function () {
            expect(weapon.getDMG()).to.eql(1)
        })

    })

    describe("#getDEF()", function () {

        it("should return the given def", function () {
            expect(weapon.getDEF()).to.eql(1)
        })

    })

})
