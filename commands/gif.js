const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const got = require("got");
const api = "dc6zaTOxFJmzC";

module.exports.run = async (bot, message, args) => {
message.delete();
let searchword = args.join(" ");
if (args.length < 1) return message.channel.send(`Enter a search word.`, {code: "py"})
const res = await got(`http://api.giphy.com/v1/gifs/random?api_key=${api}&tag=${encodeURIComponent(args.join(" "))}`, {json: true})
if (!res || !res.body || !res.body.data) return message.channel.send("@Failed to find a gif that matched your query!", {code: "py"})

const embed = new Discord.RichEmbed()
  .setImage(res.body.data.image_url)
  .setAuthor(message.author.tag, message.author.displayAvatarURL)
  .setFooter(`Search Word: ${searchword}`)

  message.channel.send(embed);
}

  module.exports.help = {
    name: "gif"
  }
