"use strict"

var Hero = require('../hero');
var Sword = require('../weapons/sword');
var Dagger = require('../weapons/dagger');
var expect = require('chai').expect;

describe('Hero', function() {

    describe('#constructor', function() {

        it('given 30 life should init life to 30', function() {
            let hero = new Hero(30)
            expect(hero._life).to.eql(30);
        });

        it('given 50 life should init life to 30', function() {
            let hero = new Hero(50)
            expect(hero._life).to.eql(30);
        });

        it('given 0 life should init life to 1', function() {
            let hero = new Hero
            expect(hero._life).to.eql(1);
        });
    })

    describe('#getHP', function() {

        let life
        let hero

        beforeEach(function() {
            life = 30
            hero = new Hero(life)
        })

        it('should return init life', function() {
            expect(hero.getHP()).to.eql(life)
        })

        it('should not let change life', function() {
            expect(hero.getHP() - 1).to.eql(life - 1)
            expect(hero.getHP()).to.eql(life)
        })
    })

    describe("#attacked", function() {

        it("should decrease life by 1", function() {
            let life = 30
            let hero = new Hero(30)
            hero.attacked()
            expect(hero.getHP()).to.eql(life-1)
        })
    })

    describe("#attack", function() {

        it("should decrease opponent's life by 1", function() {
            let life = 30
            let heroA = new Hero(30)
            let heroB = new Hero(30)
            heroA.attack(heroB)
            expect(heroA.getHP()).to.eql(life)
            expect(heroB.getHP()).to.eql(life-1)
        })


        it("should decrease opponent's life by 7 because attacker has Sword", function () {
            let life = 30
            let heroA = new Hero(30)
            heroA.addWeapon(new Sword)
            let heroB = new Hero(30)
            heroA.attack(heroB)

            expect(heroB.getHP()).to.eql(life-7)
        })

        it("should decrease opponent's life by 5 because attacker has Sword and opponent has Sword", function () {
            let life = 30
            let heroA = new Hero(30)
            heroA.addWeapon(new Sword)
            let heroB = new Hero(30)
            heroB.addWeapon(new Sword)

            heroA.attack(heroB)

            expect(heroB.getHP()).to.eql(life-5)
        })

        it("should decrease opponent's life by 3 because attacker has Sword and opponent has Dagger", function () {
            let life = 30
            let heroA = new Hero(30)
            heroA.addWeapon(new Sword)
            let heroB = new Hero(30)
            heroB.addWeapon(new Dagger)

            heroA.attack(heroB)

            expect(heroB.getHP()).to.eql(life-3)
        })

    })
})
