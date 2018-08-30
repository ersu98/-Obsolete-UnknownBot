const Discord = require("discord.js");
const botconfig = require("../botconfig");

module.exports.run = async (bot, message, args) => {

message.channel.send(`https://discordapp.com/oauth2/authorize?client_id=${botconfig.clientid}&scope=bot&permissions=8`);

}

module.exports.help = {
  name: "invitelink"
}
