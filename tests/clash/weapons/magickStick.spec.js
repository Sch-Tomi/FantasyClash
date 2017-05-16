"use strict"

var MagickStick = require('../../../clash/weapons/magickStick');
var expect = require('chai').expect;

describe('MagickStick', function() {

    let magickStick

    beforeEach(function() {
        magickStick =  new MagickStick
    })


    describe("#constructor", function () {


        it("should set the damage to 8", function () {
            expect(magickStick._damage).to.eql(8)
        })

        it("should set the defense to 1", function () {
            expect(magickStick._defense).to.eql(1)
        })

    })

    describe("#toString", function() {
        it("should return with 'MagickStick'", function() {
            expect(magickStick.toString()).to.eql("MagickStick")
        })
    })

})
