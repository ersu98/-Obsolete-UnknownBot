const Discord = require("discord.js");
const botconfig = require("../botconfig");

module.exports.run = async (bot, message, args) => {

message.channel.send(`:wink: Restarting!`)
bot.destroy();
bot.login(botconfig.token);
}

module.exports.help = {
  name: "restart"
}
