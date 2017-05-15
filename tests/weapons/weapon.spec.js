"use strict"

var Weapon = require('../../weapons/weapon');
var expect = require('chai').expect;

describe('Weapon', function() {

    describe("#constructor", function () {

        it("should set the given dmg", function () {
            let weapon = new Weapon(1)
            expect(weapon._damage).to.eql(1)
        })

    })

    describe("#getDMG()", function () {

        it("should return the given dmg", function () {
            let weapon = new Weapon(1)
            expect(weapon.getDMG()).to.eql(1)
        })

    })

})
