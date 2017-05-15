"use strict"

var Hero = require('../hero');
var Battle = require('../battle');
var expect = require('chai').expect;

describe('Battle', function() {

    let hero1
    let hero2
    let battle

    beforeEach(function() {
        hero1 = new Hero(30)
        hero2 = new Hero(30)
        battle = new Battle(hero1, hero2)
    })


    describe('#constructor', function() {

        it("should set 2 given heros", function() {
            expect(battle._heroA).to.eql(hero1)
            expect(battle._heroB).to.eql(hero2)
        })

    })

    describe('#getWinner', function() {

        it("the first given hero should win", function() {
            expect(battle.getWinner()).to.eql(hero1)
        })

    })

    describe("#_herosAreAlive", function () {
        it("after init should return True", function () {
            expect(battle._herosAreAlive()).to.ok
        })
    })

    describe("#_findWinner", function () {
        it("should return hero1", function () {
            hero1 = new Hero(1)
            hero2 = new Hero(1)

            hero1.attack(hero2)
            battle = new Battle(hero1, hero2)

            expect(battle._findWinner()).to.eql(battle._heroA)
        })
    })
})
