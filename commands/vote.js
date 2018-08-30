const Discord = require("discord.js");
const botconfig = require("../botconfig");
const agree    = "✅";
const disagree = "❎";

  module.exports.run = async (bot, message, args) => {

    message.delete();
    let ques = args.join(' ');
    let msg = await message.channel.send(`**Vote:** ${ques}`);
    await msg.react(agree);
    await msg.react(disagree);

    const reactions = await msg.awaitReactions(reaction => reaction.emoji.name === agree || reaction.emoji.name === disagree, {time: 60000});
    msg.delete();

    var NO_Count = reactions.get(disagree).count;
    var YES_Count = reactions.get(agree);

    if(YES_Count == undefined){
      var YES_Count = 1;
    }else{
      var YES_Count = reactions.get(agree).count;
    }

    var sumsum = new Discord.RichEmbed()

              .addField("Voting Finished:", "----------------------------------------\n" +
                                            "Total votes (NO): " + `${NO_Count-1}\n` +
                                            "Total votes (Yes): " + `${YES_Count-1}\n` +
                                            "----------------------------------------", true)
              .addField("Current Vote:", `${ques}`)
              .setColor("0x#FF0000")

    await message.channel.send({embed: sumsum});

}

module.exports.help = {
  name: "vote"
}
