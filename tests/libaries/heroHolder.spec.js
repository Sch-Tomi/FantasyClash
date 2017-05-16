const HeroHolder = require('../../libaries/heroHolder');
const Warrior = require('../../clash/heroes/warrior');
const expect = require('chai').expect

describe('HeroHolder', () => {

    let HH

    beforeEach(() => {
        HH = new HeroHolder
    })

    describe("#constructor", function () {

        it("should create an empty array", function () {
            expect(HH._holder instanceof Array).to.ok
            expect(HH._holder.length).to.eql(0)
        })

    })

    describe("#add", function () {
        it("should save given hero", function () {
            HH.add(new Warrior)
            expect(HH._holder.length).to.eql(1)
        })

        it("should return stored hero id", function () {
            expect(HH.add(new Warrior)).to.eql(1)
        })
    })

    describe("#get", function () {

        it("should return saved hero", function () {
            let warrior = new Warrior
            let id = HH.add(warrior)

            expect(HH.get(id)).to.eql(warrior)

        })

    })

    describe("#serialize", function () {

        it("should return with serialize object of saved heroes", function () {
            let warrior1 = new Warrior(20)
            let id_warrior1 = HH.add(warrior1)
            let warrior2 = new Warrior(10)
            let id_warrior2 = HH.add(warrior2)

            expect(HH.serialize()).to.eql([{id:1, type:"warrior", hp:20}, {id:2, type:"warrior", hp:10}])

        })

    })

})
