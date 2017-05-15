"use strict"

var Dagger = require('../../weapons/dagger');
var expect = require('chai').expect;

describe('Dagger', function() {

    describe("#constructor", function () {

        it("should set the damage to 5", function () {
            let dagger = new Dagger
            expect(dagger._damage).to.eql(5)
        })

    })

})
