const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./conf/config.json");

// Client receive message event
client.on("message", receivedMessage => {
  receivedMessage.embeds.forEach(embed => {
    if (embed.description) {
      saveSong(embed.description);
    }
  });
});

client.on("ready", () => {
  console.log("Connected as " + client.user.tag);
});

function saveSong(song) {
  var saveSongChannel = client.channels.get(config.channel); // Replace with known channel ID
  saveSongChannel.send(song);
}

client.login(config.token);
