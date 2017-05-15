"use strict"

var Sword = require('../../weapons/sword');
var expect = require('chai').expect;

describe('Sword', function() {

    describe("#constructor", function () {

        it("should set the damage to 7", function () {
            let sword = new Sword
            expect(sword._damage).to.eql(7)
        })

    })
})
