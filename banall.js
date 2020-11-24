const users = [
	'123',
	'321'
];

const ban_message = "message here";
//
const user_token = "user token here"

while (count <= users.length)) {
	let url = `https://discord.com/api/v8/guilds/571727683491332117/bans/${users[count]}`;
	let token = `${user_token}`;
	let xhr = new XMLHttpRequest();

	xhr.open('PUT', url);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.setRequestHeader('authorization', token)
	xhr.send(`{"delete_message_days":"1","reason":"${ban_message}"}`);

	xhr.onload = function() {
	  if (xhr.status !== 204) { 
		alert(`Error ${xhr.status}: ${xhr.statusText}`);
	  } else { 
		alert(`Done, got ${xhr.response.length} bytes`); 
	  }
	};

	xhr.onerror = function() {
	  alert("Request failed");
	};
}