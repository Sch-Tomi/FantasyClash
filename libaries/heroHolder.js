"use strict"

class HeroHolder {
    constructor() {
        this._holder = []
    }

    add(hero){
        return this._holder.push(hero)
    }

    get(id){
        return this._holder[id-1]
    }

    serialize(){
        let heroes = []

        for (var i = 0; i < this._holder.length; i++) {
            let serial = this._holder[i].serialize()
            serial["id"] = i+1
            heroes.push(serial)
        }

        return heroes
    }

}

module.exports = HeroHolder
