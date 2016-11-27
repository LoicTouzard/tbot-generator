'use strict'
const config = require("./config.json")
const Telegram = require('telegram-node-bot')
const mongoose = require('mongoose');
const TextCommand = Telegram.TextCommand
const RegexpCommand = Telegram.RegexpCommand
const PingController = require('./controllers/PingController')
const HelloWorldController = require('./controllers/HelloWorldController')
const MessageController = require('./controllers/MessageController')

const tg = new Telegram.Telegram(config.botkey)

mongoose.connect(config.mongoBaseURL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))

db.once('open', function() {
	// Connected To the database
	tg.router
		.when(new RegexpCommand(/^\/ping/, 'ping'), new PingController())	// replies on /ping
		.when(new RegexpCommand(/^\/pong/, 'pong'), new PingController())	// replies on /pong
		.when(new TextCommand('hello'), new HelloWorldController())			// replay if hello is in the message
		.when(new RegexpCommand(/^\/save/, 'save'), new MessageController())	// save a message in MongoDB
		.when(new RegexpCommand(/^\/list/, 'list'),	new MessageController())	// list the message saved in MongoDB
		.when(new RegexpCommand(/^\/clear/, 'clear'), new MessageController())	// clear all the messages in MongoDB
	    .otherwise(new PingController()) // will call default response on PingController
})