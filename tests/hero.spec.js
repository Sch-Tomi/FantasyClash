var Hero = require('../hero');
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
})
