"use strict"

var MagickStick = require('../../weapons/magickStick');
var expect = require('chai').expect;

describe('MagickStick', function() {

    describe("#constructor", function () {

        it("should set the damage to 8", function () {
            let magickStick = new MagickStick
            expect(magickStick._damage).to.eql(8)
        })

    })

})
