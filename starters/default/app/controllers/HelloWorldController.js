'use strict'
const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController

class HelloWorldController extends TelegramBaseController {

    /**
     * Handle default response of controller
     * @param  {Scope} $
     */
    handle($) {
        let response = "Hello World !"
        $.sendMessage(response)
    }

    /**
     * getter for the route. Do the association between route names and route handlers
     * @return {Object}
     */
    get routes() {
        return {}
    }
}

module.exports = HelloWorldController