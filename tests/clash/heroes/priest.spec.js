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

            expect(priest.getHP()).to.eql(30)
            expect(warrior.getHP()).to.eql(29)
        })

    })
})
