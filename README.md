# tbot-generator
A generator for Telegram Bots in nodeJS

## Installation

Install the package globally :  
```sh
npm install -g tbot-generator
```

## Usage

Go to your project folder :  

```sh
cd myProjectFolder/
```

Make sure to have a `package.json` file, if you havn't use the following command :  
```sh
npm init
```

To run it you'll need a version of node over 6.3.1, if you don't have it you can upgrade your `node` version using [nvm](https://github.com/creationix/nvm) doing the following :  
```sh
echo 6.3.1 > .nvmrc
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.31.4/install.sh | bash
nvm install
nvm use
```

To generate your bot use the command :  
```sh
tbot-gen
```

Follow the instructions.  
Your `package.json` file has been updated, so install the new packages with :  
```sh
npm install
```

Your bot is now **ready to run** !  
Run it with :  
```sh
node app/bot.js
```


## Generation


During the generation you must give your Bot Key that you can get from [@BotFather](https://telegram.me/botfather).  

### Basic Bot

No particularity for this bot, just basics.  
The structure of this bot is :  
```
app/                     --> all of the source files for the bot
  bot.js                  --> entry point, contains the router
  config.template.json    --> example versionned file for the configuration
  config.json             --> configuration file, not versionned
  controllers/             --> all the controllers
    HelloWorldController.js --> A Controller that replies "Hello World !" 
    PingController.js       --> A Controller that replies "ping" or "pong"
.gitignore               --> ignore 'app/config.json' file
```

This bot replies to :  
* the command `/ping`, replies 'pong'  
* the command `/pong`, replies 'ping'  
* the word `hello`, replies 'Hello World'  
* any other message by default with 'Default Message'  


### Bot with MongoDB

This bot is the same as the [Basic Bot](#basic-bot) but having MongoDB set up.  

If you don't have MongoDB, you can get it from [here](https://docs.mongodb.com/v3.2/administration/install-community/).  

Make sure to have the server up and running before starting the bot.

The structure of this bot is :  
```
app/                     --> all of the source files for the bot
  bot.js                  --> entry point, contains the router and DB connection
  config.template.json    --> example versionned file for the configuration
  config.json             --> configuration file, not versionned
  controllers/            --> all the controllers
    HelloWorldController.js --> A Controller that replies "Hello World !" 
    PingController.js       --> A Controller that replies "ping" or "pong"
    MessageController.js    --> A Controller that manage Message in the DB
  models/                 --> all the DB Models
    MessageModel.js         --> A Message MongoDB Model 
.gitignore               --> ignore 'app/config.json' file
```

This bot replies to :  
* the command `/ping`, replies 'pong'  
* the command `/pong`, replies 'ping'  
* the command `/save myMessage`, which save the Message 'myMessage' in the database  
* the command `/list`, which displays all the Messages stored  
* the command `/clear`, which remove all the Messages stored  
* the word `hello`, replies 'Hello World'  
* any other message by default with 'Default Message'  


## Programming

The structure depends on the bot you are using and are explained above for the [Basic bot](#basic-bot) and the [MongoDB Bot](#bot-with-mongodb).  

To program please use the following documentation :  
* For the communication with the Telegram API and understanding the bot structure, read [telegram-node-bot](https://www.npmjs.com/package/telegram-node-bot) documentation  
* To use the MongoDB database, explore the [mongoose](http://mongoosejs.com/index.html) website  

## Credits

[Loïc Touzard](https://github.com/LoicTouzard?tab=activity)