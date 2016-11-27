'use strict'
const prompt = require('prompt')
const fse = require('fs-extra')
const fs = require('fs')
const path = require('path')


// Welcome !
console.log("Welcome to the NodeJS Telegram Bot Generator !")

// do not generate if it is not initialized with npm
try {
    fs.accessSync(path.join(process.cwd(), "package.json"), fs.F_OK);
} catch (e) {
    console.error("This directory has no package.json file, please run 'npm init' first.")
    process.exit()
}
try {
    fs.accessSync(path.join(process.cwd(), "app"), fs.F_OK);
    console.error("The directory 'app/' already exists here. Please remove it, or change directory.")
    process.exit()
} catch (e) {
	// ok the folder app/ doesn't exists, we can continue
}



const form = {
	properties: {
		botkey: {
			description: 'Telegram Bot Key',
			type: 'string',
			message: 'You can have it from @BothFather in Telegram',
			required: true
		},
		mongoBase: {
			message: "Please enter 't', 'f', 'true' or 'false'",
			description: 'Will you use a MongoDB database (true/false)',
			default: false,
			type: 'boolean',
			required: true
		},
		mongoBaseURL: {
			description: 'Database URL',
			default: 'mongodb://localhost/myDatabase',
			ask: () => prompt.history('mongoBase').value
	  	}
	}
}

prompt.message = "tbot-generator"
prompt.get(form, function (err, config) {
    //
    // Log the configs.
    //
    console.log('You will create a nodeJS Telegram Bot with the following settings :');
    console.log('  Bot Key : ' + config.botkey);
    console.log('  With MongoDB database : ' + config.mongoBase);
    if(config.mongoBase) console.log('  mongoBaseURL: ' + config.mongoBaseURL);

    const confirm = {
		properties: {
			confirm: {
				message: "Please enter 't', 'f', 'true' or 'false'",
				description: 'Confirm the generation ? (true/false)',
				type: 'boolean',
				default: true,
				required: true
			}
		}
	}

	prompt.get(confirm, function (err, result) {
		if(result.confirm){
			console.log("Starting the generation...")
			copyDefaultDirectory(config)
		}
		else{
			console.log("Exiting the generation...")
		}
	})
})


function copyDefaultDirectory(config){

	// copy the default starter folder
	try {
		fse.copySync(path.join(__dirname, 'starters', 'default', 'app'), path.join(process.cwd(), 'app'))
		console.log("- Main forlder copied.")
	} catch (err) {
		console.error("X Error when copying the main folder.", err)
	}

	console.log("Default generated.")
}