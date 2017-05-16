"use strict"

var Warrior = require('../heroes/warrior');
var Priest = require('../heroes/priest');
var Battle = require('../battle');
var expect = require('chai').expect;

describe('Battle', function() {

    let warrior1
    let warrior2
    let battle

    beforeEach(function() {
        warrior1 = new Warrior(30)
        warrior2 = new Warrior(30)
        battle = new Battle(warrior1, warrior2)
    })


    describe('#constructor', function() {

        it("should set 2 given warriors", function() {
            expect(battle._heroA).to.eql(warrior1)
            expect(battle._heroB).to.eql(warrior2)
        })

    })

    describe('#getWinner', function() {

        it("the first given warrior should win", function() {
            expect(battle.getWinner()).to.eql(warrior1)
        })

        it("complex test, Priest should win", function () {
            var jon = new Warrior(10);
            var thoros = new Priest(5);

            var battle = new Battle(jon, thoros);
            expect(battle.getWinner()).to.eql(thoros)
        })

    })

    describe("#_heroesAreAlive", function () {
        it("after init should return True", function () {
            expect(battle._heroesAreAlive()).to.ok
        })
    })

    describe("#_findWinner", function () {
        it("should return warrior1", function () {
            warrior1 = new Warrior(1)
            warrior2 = new Warrior(1)

            warrior1.attack(warrior2)
            battle = new Battle(warrior1, warrior2)

            expect(battle._findWinner()).to.eql(battle._heroA)
        })
    })
})
