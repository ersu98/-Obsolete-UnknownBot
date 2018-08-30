const Discord = require("discord.js");
const botconfig = require("../botconfig");

module.exports.run = function(client, message) {
    message.channel.send(`${message.author.username} has died.`).then(Message => {
        setTimeout(() => { Message.edit("Respawning..."); }, 1000);
        setTimeout(() => { Message.edit(`Revival complete. Welcome back, ${message.author.username}`); }, 1000);
    })
}

module.exports.help = {
  name: "killme"
}
