const express = require('express')
const bodyParser = require('body-parser');
const heroParser = require('../libaries/heroParser');
const heroHolder = require('../libaries/heroHolder');
const battle = require('../clash/battle');

class App {
    constructor(Express, BodyParser, HeroHolder, HeroParser, Battle) {
        this._app = new Express()
        this._holder = new HeroHolder()
        this._heroParser = HeroParser
        this._Battle = Battle

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

        this._app.get('/battle', async function(req, res) {
            res.status(200).json(this._fight(req.query.hero1, req.query.hero2))
        }.bind(this))

        this._app.post('/', async function(req, res) {
            if (req.body.type != null) {

                let hero = {
                    type: req.body.type,
                    hp: req.body.hp,
                    weapon: req.body.weapon
                }

                res.status(200).json({
                    "id": this._addHero(hero)
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

    _fight(idHero1, idHero2){

        let hero1 = this._holder.get(idHero1)
        let hero2 = this._holder.get(idHero2)

        let battle = new this._Battle(hero1, hero2 )

        let winner = battle.getWinner()
        let winner_id =  winner === hero1 ? idHero1 : idHero2

        return {winner_id:parseInt(winner_id)}
    }

    static create() {
        return new App(express, bodyParser, heroHolder, heroParser, battle)
    }
}

module.exports = App
