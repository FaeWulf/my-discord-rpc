const RPC = require('discord-rpc')

require('dotenv').config()
const { windowManager } = require("node-window-manager");

const config = {
	clientId : "890059136694386738"
}

const client = new RPC.Client({transport: 'ipc'})

const waifu = [
	"Waifu #2: Ninim Raleigh",
	"Waifu #1: Yue Aletia"
]

const imageWaifu = [
	"ninim",
	"yue"
]

const state = [
	"| Absorbing Dark humour",
	"| AduDarkwa",
	" \"Only bigat\" ",
	"Entering BigArc mode...",
	"Sofa coding...",
	"Entering Faewulf mode...",
	"Watching iAtneh"
]

let chooseWaifu = true

function rand(min, max) {
	return Math.floor( (Math.random() * (max - min + 1)) + min )
}

client.on('ready', () => {
	
	console.log('Authed for user', client.user.username);

	const time = new Date()

	setInterval( () => {

		const currentAppTitle = windowManager.getActiveWindow().getTitle().split("-").pop()

		client.setActivity({

			details : "[Using] " + currentAppTitle,
    		startTimestamp : time,
    		largeImageKey : "sofa",
    		largeImageText : "Sofa Grand Master - Level 250",
			smallImageText: waifu[ chooseWaifu ? 1 : 0 ],
			smallImageKey:	imageWaifu[ chooseWaifu ? 1 : 0],
			state:  state[rand(0, state.length - 1)],
			buttons: [
			{
				label : 'Play with me?',
				url : 'https://www.youtube.com/watch?v=o-YBDTqX_ZU'
			},
			{
				label : 'Discord bot', 
				url : 'https://discord.com/api/oauth2/authorize?client_id=874974280495026186&permissions=534760651328&redirect_uri=http%3A%2F%2Fbigat.duckdns.org%2Fapi%2Fcallback&scope=bot%20applications.commands'
			}
		]
		})

		chooseWaifu = !chooseWaifu

	}, 5 * 1000 )

});

const scopes = ['rpc', 'guilds'];

client.login({ 
	clientId: config.clientId, 
	clientSecret: process.env.token, 
	//redirectUri: 'https://localhost/lol',
	//scopes: scopes
})