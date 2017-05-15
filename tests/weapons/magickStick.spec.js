"use strict"

var MagickStick = require('../../weapons/magickStick');
var expect = require('chai').expect;

describe('MagickStick', function() {

    describe("#constructor", function () {

        let magickStick

        beforeEach(function() {
            magickStick =  new MagickStick
        })

        it("should set the damage to 8", function () {
            expect(magickStick._damage).to.eql(8)
        })

        it("should set the defense to 1", function () {
            expect(magickStick._defense).to.eql(1)
        })

    })

})
