'use strict'
const Telegram = require('telegram-node-bot')
const TelegramBaseController = Telegram.TelegramBaseController

class PingController extends TelegramBaseController {

    /**
     * Handle default response of controller
     * @param  {Scope} $
     */
    handle($) { 
        $.sendMessage("Default response")
    }

    /**
     * Handle response to route 'ping'
     * @param  {Scope} $
     */
    replyPong($) {
        $.sendMessage("Pong !")
    }

    /**
     * Handle response to route 'pong'
     * @param  {Scope} $
     */
    replyPing($) {
        $.sendMessage("Ping !")
    }
 
    /**
     * getter for the route. Do the association between route names and route handlers
     * @return {Object}
     */
    get routes() {
        return {
            'ping': 'replyPong',
            'pong': 'replyPing' 
        }
    }
}

module.exports = PingController