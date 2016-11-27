'use strict'
const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController
const MessageModel = require('../models/MessageModel')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise;

class MessageController extends TelegramBaseController {

    /**
     * Handle default response of controller
     * @param  {Scope} $
     */
    handle($) {
        $.sendMessage("Default response")
    }

    /**
     * Handle response to route 'save'
     * Save the message sent in the MongoDB database
     * @param  {Scope} $
     */
    saveMessage($) {
        let message = new MessageModel({
            value: $.message.text.replace("/save ","")
        })
        message.save()
        .then(savedWord => $.sendMessage("Message saved !"))
        .catch(err => {
            $.sendMessage("Sorry unable to save the message...")
            console.error(err)
        })
    }

    /**
     * Handle response to route 'clear'
     * Remove all the messages from the MongoDB database
     * @param  {Scope} $
     */
    removeAllMessage($) {
        MessageModel.remove({})
        .then(result => $.sendMessage("Cleared all the messages !"))
        .catch(err => {
            $.sendMessage("Sorry unable to clear the messages...")
            console.error(err)
        })
    }

    /**
     * Handle response to route 'list'
     * Display all the messages in the MongoDB database
     * @param  {Scope} $
     */
    displayAllMessage($) {
        MessageModel.find({})
        .then(results => {
            if(results.length == 0){
                $.sendMessage("There is no message in the database, use /save msg , to save them")
            }
            else{
                $.sendMessage("List of the messages :\n"+results.map(msg => msg.value).join('\n'))
            }
        })
        .catch(err => {
            $.sendMessage("Sorry unable to retreive the messages...")
            console.error(err)
        })
    }

    /**
     * getter for the route. Do the association between route names and route handlers
     * @return {Object}
     */
    get routes() {
        return {
            'save': 'saveMessage',
            'clear': 'removeAllMessage',
            'list': 'displayAllMessage'
        }
    }
}

module.exports = MessageController