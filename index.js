const { Client } = require('discord-rpc')

require('dotenv').config()
const active = require('active-windows')
const config = require('./config.json')

let client = new Client({transport: 'ipc'})
let activityHandle
let firstTime = true
let currentAsset = 0
let recent_state = config.state[rand(0, config.state.length - 1)]

function rand(min, max) {
	return Math.floor( (Math.random() * (max - min + 1)) + min )
}



function handleLogin() {

	if(client) {
		client.destroy()
		client = new Client({transport: 'ipc'})
	}

	activityHandle = client.on('ready', () => {
	
		console.log('Authed for user', client.user.username);
		const time = new Date()

		if(firstTime == true)
		setInterval(() => {
			const windowsGet = active.getActiveWindow()
			const currentAppTitle = windowsGet.windowName?.split("-").pop()

			if(rand(0, 5) == 2 && config.stateCycle)
				recent_state = config.state[rand(0, config.state.length - 1)]

			client.setActivity({
				details : config.UsingProgram ? `🖥️ Using: ${currentAppTitle}` : undefined,
    			startTimestamp : time,
    			largeImageKey : config.assets[currentAsset == 0 ? config.assets.length - 1 : currentAsset - 1].name,
    			largeImageText : config.largeImageText ? config.largeImageText : undefined,
				smallImageText: config.assets[currentAsset].quote ? config.assets[currentAsset].quote : undefined,
				smallImageKey:	config.assets[currentAsset].name,
				state: recent_state,
				buttons: config.buttons 
			})

			if(config.assetsCycle) {
				currentAsset++
				if(currentAsset == config.assets.length)
					currentAsset = 0
			}
		}, 5 * 1000 )

		firstTime = false
	})


	setTimeout(() => {
		client.login({clientId: config.clientID})
			.then(() => {
				client.on("disconnected", () => {
					if(config.exitOnDiscordClose) {
						console.log("Discord app closed. Exit process...")
						process.exit(1)
					}
					else {
						console.log("Discord app closed. Retry to connect when start discord again...")
						handleLogin()
					}
				})
			})
	}, 5 * 1000)
}

handleLogin()

process.on('unhandledRejection', err => {
	if(err.message == "Could not connect") {
		console.log("Could not connect to Discord, make sure you already open Discord. Retry...")
		handleLogin()
	}
})