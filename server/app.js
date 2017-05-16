const express = require('express')
const bodyParser = require('body-parser');
const heroParser = require('../libaries/heroParser');
const heroHolder = require('../libaries/heroHolder');

class App {
    constructor(Express, BodyParser, HeroHolder, HeroParser) {
        this._app = new Express()
        this._holder = new HeroHolder()
        this._heroParser = HeroParser

        this._setBodyParser(BodyParser)
        this._setRoutes()
    }

    listen(port = 3005) {
        return this._app.listen(port, function() {
            console.log('App listening on port: ' + port)
        })

    }

    _setBodyParser(bodyParser) {
        this._app.use(bodyParser.json()); // support json encoded bodies
        this._app.use(bodyParser.urlencoded({
            extended: true
        })); // support encoded bodies
    }

    _setRoutes() {

        this._app.get('/', async function(req, res) {
            res.status(200).json(this._serializeHeroes())
        }.bind(this))

        this._app.post('/', async function(req, res) {
            if (req.body.type != null) {

                let hero = {
                    type: req.body.type,
                    hp: req.body.hp,
                    weapon: req.body.weapon
                }

                let idNum = this._addHero(hero)

                res.status(200).json({
                    "id": idNum
                })
            } else {
                res.status(200).json({
                    "error": "Missing Hero"
                })
            }
        }.bind(this))
    }

    _addHero(hero) {
        return this._holder.add(this._heroParser.parse(hero))
    }

    _serializeHeroes(){
        return this._holder.serialize()
    }

    static create() {
        return new App(express, bodyParser, heroHolder, heroParser)
    }
}

module.exports = App
