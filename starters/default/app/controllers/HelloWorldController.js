'use strict'
const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController

class HelloWorldController extends TelegramBaseController {

    /**
     * Handle default response of controller
     * @param  {Scope} $
     */
    handle($) {
        let response = "Hello "+$.
        $.sendMessgae("Default response")
    }

    get routes() {
        return {}
    }
}

module.exports = HelloWorldController