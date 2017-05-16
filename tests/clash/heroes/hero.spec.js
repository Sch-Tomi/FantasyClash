"use strict"

var Warrior = require('../../../clash/heroes/warrior');
var Sword = require('../../../clash/weapons/sword');
var Dagger = require('../../../clash/weapons/dagger');
var expect = require('chai').expect;

describe('Warrior', function() {

    describe('#constructor', function() {

        it('given 30 life should init life to 30', function() {
            let warrior = new Warrior(30)
            expect(warrior._life).to.eql(30);
        });

        it('given 50 life should init life to 30', function() {
            let warrior = new Warrior(50)
            expect(warrior._life).to.eql(30);
        });

        it('given 0 life should init life to 1', function() {
            let warrior = new Warrior
            expect(warrior._life).to.eql(1);
        });
    })

    describe('#getHP', function() {

        let life
        let warrior

        beforeEach(function() {
            life = 30
            warrior = new Warrior(life)
        })

        it('should return init life', function() {
            expect(warrior.getHP()).to.eql(life)
        })

        it('should not let change life', function() {
            expect(warrior.getHP() - 1).to.eql(life - 1)
            expect(warrior.getHP()).to.eql(life)
        })
    })

    describe("#attacked", function() {

        it("should decrease life by 1", function() {
            let life = 30
            let warrior = new Warrior(30)
            warrior.attacked()
            expect(warrior.getHP()).to.eql(life-1)
        })
    })

    describe("#attack", function() {

        let life
        let warriorA
        let warriorB

        beforeEach(function() {
            life = 30
            warriorA = new Warrior(life)
            warriorB = new Warrior(life)
        })

        it("should decrease opponent's life by 1", function() {
            warriorA.attack(warriorB)
            expect(warriorA.getHP()).to.eql(life)
            expect(warriorB.getHP()).to.eql(life-1)
        })


        it("should decrease opponent's life by 7 because attacker has Sword", function () {
            warriorA.addWeapon(new Sword)
            warriorA.attack(warriorB)

            expect(warriorB.getHP()).to.eql(life-7)
        })

        it("should decrease opponent's life by 5 because attacker has Sword and opponent has Sword", function () {
            warriorA.addWeapon(new Sword)
            warriorB.addWeapon(new Sword)

            warriorA.attack(warriorB)

            expect(warriorB.getHP()).to.eql(life-5)
        })

        it("should decrease opponent's life by 3 because attacker has Sword and opponent has Dagger", function () {
            warriorA.addWeapon(new Sword)
            warriorB.addWeapon(new Dagger)

            warriorA.attack(warriorB)

            expect(warriorB.getHP()).to.eql(life-3)
        })

    })


    describe("#serialize", function () {

        let life
        let warriorA

        beforeEach(function() {
            life = 30
            warriorA = new Warrior(life)
        })

        it("should return without weapon", function () {
            expect(warriorA.serialize()).to.eql({type: "warrior", hp:life})
        })

        it("should return with weapon", function () {
            warriorA.addWeapon(new Sword)
            expect(warriorA.serialize()).to.eql({type: "warrior", hp:life, weapon: "Sword"})
        })

    })
})
