/*
	@channelID   : string(var) : The ID of any Discord server or '@me' for the DM view
	@userListURL : string(var) : The Discord API endpoint to retrieve list of users.
*/
let channelID = '@me'
let userListURL = `https://discordapp.com/api/v8/users/${channelID}/affinities/users`

const users = () => {
	return fetch("", {
					"credentials":"include",
					"headers": {
						"accept":"*/*",
						"sec-fetch-mode":"cors",
						"sec-fetch-site":"same-origin",
					},

					"body":null,
					"method":"GET",
					"mode":"cors"
				});
};

const banBT
const ban_message = "message here";

const user_token = "user token here"

await users.forEach(e => do console.log(e))
