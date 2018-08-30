const Discord = require("discord.js");
const botconfig = require("../botconfig");
const got = require("got");

module.exports.run = async (bot, message, args) => {
  if (args.length < 1) {
        throw 'Please provide a url to shorten!';
    }

    const url = args.join(' ');

    message.delete();

    const res = await got(`http://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
    let name = message.author.tag
    let time = new Date();
    var embed = new Discord.RichEmbed()
      .addField("User Tag", `${name}`)
      .addField("ShortURL", res.body)
      .setThumbnail(message.author.avatarURL)
      .setFooter(time);

    message.channel.send(embed);
}

module.exports.help = {
  name: "url"
}
