import tmi from "tmi.js"
import dotenv from "dotenv"
import { KeepAlive } from "./server.js"
dotenv.config()

const BOT_USERNAME = process.env.TWITCH_BOT_USERNAME
const ACCESS_TOKEN = process.env.TWITCH_ACCESS_TOKEN


// Define configuration options
const client = new tmi.Client({
	options: {
		debug: true,
	},
	connection: {
		reconnect: true,
		secure: true,
	},
	identity: {
		username: BOT_USERNAME, // bot username
		password: ACCESS_TOKEN, // accessToken
	},
	channels: ["kaoscc"],
})


client.on("message", async (channel, tags, message, self) => {
	// Ignore echoed messages.
	if (self) return
	
	if (message.toLowerCase() === "!code") {
		// "@alca, heya!"
		client.say(channel, `@${tags.username}, heya!`).catch(console.error)
	}
})

client.connect()
KeepAlive()

// // Create a client with our options
// const client = new tmi.client(opts);

// // Register our event handlers (defined below)
// client.on('message', onMessageHandler);
// client.on('connected', onConnectedHandler);

// // Connect to Twitch:
// client.connect();

// // Called every time a message comes in
// function onMessageHandler (target, context, msg, self) {
//   if (self) { return; } // Ignore messages from the bot

//   // Remove whitespace from chat message
//   const commandName = msg.trim();

//   // If the command is known, let's execute it
//   if (commandName === '!dice') {
//     const num = rollDice();
//     client.say(target, `You rolled a ${num}`);
//     console.log(`* Executed ${commandName} command`);
//   } else {
//     console.log(`* Unknown command ${commandName}`);
//   }
// }

// // Function called when the "dice" command is issued
// function rollDice () {
//   const sides = 6;
//   return Math.floor(Math.random() * sides) + 1;
// }

// // Called every time the bot connects to Twitch chat
// function onConnectedHandler (addr, port) {
//   console.log(`* Connected to ${addr}:${port}`);
// }
