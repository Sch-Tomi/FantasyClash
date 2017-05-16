"use strict"

var Dagger = require('../../../clash/weapons/dagger');
var expect = require('chai').expect;

describe('Dagger', function() {

    let dagger

    beforeEach(function() {
        dagger =   new Dagger
    })

    describe("#constructor", function() {

        it("should set the damage to 5", function() {
            expect(dagger._damage).to.eql(5)
        })

        it("should set the defense to 4", function() {
            expect(dagger._defense).to.eql(4)
        })

    })

    describe("#toString", function() {
        it("should return with 'Dagger'", function() {
            expect(dagger.toString()).to.eql("Dagger")
        })
    })

})
