const Discord = require("discord.js");
const botconfig = require("../botconfig");

module.exports.run = async (bot, message, args) => {

let text = args.join(" ");

var block = `
'''html ${text}''' `;

message.channel.send(block);
}

module.exports.help = {
  name: "html"
}
