const Discord = require("discord.js");
const botconfig = require("../botconfig");

module.exports.run = async (bot, message, args) => {

if(args[1] == "online") return bot.user.setStatus("online");

if(args[1] == "dnd") return bot.user.setStatus("dnd");

if(args[1] == "invisible") return bot.user.setStatus("invisible");

if(args[1] == "idle") return bot.user.setStatus("idle");
}

//message.channel.send(msg);

module.exports.help = {
  name: "status"
}
