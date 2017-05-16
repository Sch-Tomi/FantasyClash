"use strict"

var Sword = require('../../../clash/weapons/sword');
var expect = require('chai').expect;

describe('Sword', function() {

    let sword

    beforeEach(function() {
        sword = new Sword
    })

    describe("#constructor", function () {

        it("should set the damage to 7", function () {
            expect(sword._damage).to.eql(7)
        })

        it("should set the defense to 2", function () {
            expect(sword._defense).to.eql(2)
        })
    })

    describe("#toString", function() {
        it("should return with 'Sword'", function() {
            expect(sword.toString()).to.eql("Sword")
        })
    })

})
