const Discord = require("discord.js");
const botconfig = require("../botconfig");

module.exports.run = async (bot, message, args) => {
  message.delete();
  let parsed = args.join(" ");

  if (parsed.length < 1) {
      throw 'You must provide something to search for!';
  }

  const query = encodeURIComponent(parsed);

  message.channel.send(`**Wow!** :arrow_right: http://www.lmgtfy.com/?q=${query}`);
}

module.exports.help = {
  name: "imgtfy"
}
