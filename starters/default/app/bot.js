'use strict'
const config = require("./config.json")
const Telegram = require('telegram-node-bot')
const TextCommand = Telegram.TextCommand
const RegexpCommand = Telegram.RegexpCommand
const PingController = require('./controllers/PingController')
const HelloWorldController = require('./controllers/HelloWorldController')


const tg = new Telegram.Telegram(config.botkey)

tg.router
	.when(new RegexpCommand(/^\/ping/, 'ping'),	new PingController())	// replies on /ping
	.when(new RegexpCommand(/^\/pong/, 'pong'),	new PingController())	// replies on /pong
	.when(new TextCommand('hello'), new HelloWorldController())			// replay if 'hello' is in the message
    .otherwise(new PingController()) // will call default response on PingController