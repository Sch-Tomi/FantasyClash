"use strict"

var Dagger = require('../../weapons/dagger');
var expect = require('chai').expect;

describe('Dagger', function() {

    describe("#constructor", function () {

        let dagger

        beforeEach(function() {
            dagger =   new Dagger
        })

        it("should set the damage to 5", function () {
            expect(dagger._damage).to.eql(5)
        })

        it("should set the defense to 4", function () {
            expect(dagger._defense).to.eql(4)
        })

    })

})
