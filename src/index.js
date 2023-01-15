import tmi from "tmi.js"
import dotenv from "dotenv"
import { KeepAlive } from "./server.js"

dotenv.config()

const BOT_USERNAME = process.env.TWITCH_BOT_USERNAME
const ACCESS_TOKEN = process.env.TWITCH_ACCESS_TOKEN

<<<<<<< HEAD
const clientTMI = new tmi.Client({
	options: {
		debug: true,
	},
	connection: {
		reconnect: true,
		secure: true,
	},
	identity: {
		username: BOT_USERNAME,
		password: ACCESS_TOKEN,
	},
	channels: ["kaoscc"],
})

clientTMI.on("message", async (channel, tags, message, self) => {
	// Ignore messages from the bot
	if (self) return

	if (message.toLowerCase().startsWith("!code")) {
		clientTMI.say(channel, `@${tags.username}, heya!`).catch(console.error)
	}
})

client.on("connected", (addr, port) => {
	console.log(`* Connected to ${addr}:${port}`)
})

clientTMI.connect()
KeepAlive()
=======
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
    username: BOT_USERNAME,
    password: ACCESS_TOKEN,
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

//KeepAlive()
>>>>>>> 08a11c1eaa18e8d6e3dd0a247460f1823de9921e
