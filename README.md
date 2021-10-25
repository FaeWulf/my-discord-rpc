# Discord RPC
This is a small script I make with some feature for my discord profile, using nodejs.

## Table of contents
**[Feature](#features)**<br>
**[Requirements](#requirements)**<br>
**[Installation](#installation)**<br>
**[How to Config.json](#how-to-config.json)**<br>

## Features
- Auto reconnect when exist discord and when discord is not opened yet
- Infomation of the current focus app
- Rotate between assests
- Easy to config

## Requirements
[nodejs](https://nodejs.org/en/)
[Discord Application](https://discord.com/developers/applications)

## Installation
1. Install nodejs
2. Download this repo via release section or `git clone`
3. Run `npm i` inside the package directory
4. Make sure to edit your config.json file
5. Run `node index.js` to start the script
6. (Extra) If you want to start it automatically on startup, use `node process manager` or use [`Task scheduler`](https://bfy.tw/RtOh) (Windows OS)

## How to Config.json
| Element | Usage |
| ------ | ------ |
| clientID | Your discord application ID |
| exitOnDiscordClose | True if you want process exit when close discord app|
| UsingProgram | Show your current focus program's name on rpc (default true)|
| assetsCycle | Toggle assests cycle mode, example below |
| stateCycle | Toggle state cycle mode, example below |
| assets | List of assests from your discord application |
| state | List of states you want to display|
|largeImageText| Display text when holding on application icon|
|buttons| Buttons in your rpc. Max: 2 |

*assets: name is the name of asset, quote is the word when drag into it, leave it "" will disable it.
*Note: If you use `UsingProgram`, make sure this script is not running in admin mode or sudo mode, or else it won't work. Because in my theory, script gets current focus program's name from the user account which is running this script, so if system running this script, boom nothing happens.

#### Example config.js
```json
{
	"clientID" : "890059136694386738",
	"exitOnDiscordClose": false,
	"UsingProgram": true,
	"assetsCycle" : true,
	"stateCycle" : true,
	"assets": [
		{
			"name": "ninim",
			"quote": "Waifu #2: Ninim Raleigh"
		},
		{
			"name": "yue",
			"quote": "Waifu #1: Yue Aletia"
		},
		{
			"name": "sofa",
			"quote": "Game #1: Sofa Simulator"
		}
	],
	"state" : [
		"| Absorbing Dark humour",
		"Entering BigArc mode...",
		"Sofa coding...",
		"Entering Faewulf mode...",
		"Watching iAtneh"
	],
  	"largeImageText" : "Sofa Grand Master - Level 250",
	"buttons": [
		{
			"label" : "Play with me?",
			"url" : "https://www.youtube.com/watch?v=o-YBDTqX_ZU"
		},
		{
			"label" : "My discord bot", 
			"url" : "https://discord.com/api/oauth2/authorize?client_id=874974280495026186&permissions=534760651328&redirect_uri=http%3A%2F%2Fbigat.duckdns.org%2Fapi%2Fcallback&scope=bot%20applications.commands"
		}
	]
}
```
#### Result 
![Breakdown](https://raw.githubusercontent.com/FaeWulf/my-discord-rpc/master/ss/result1.png)
![Breakdown](https://raw.githubusercontent.com/FaeWulf/my-discord-rpc/master/ss/result.gif)
