const Discord = require("discord.js");
const botconfig = require("../botconfig");

module.exports.run = async (bot, message, args) => {

let text = args.join(" ");

var block = `
'''js ${text}''' `;

message.channel.send(block);
}

module.exports.help = {
  name: "js"
}
