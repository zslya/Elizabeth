/*
  Author: Prithul Niraula (Zafirua)
  Date Created: 5th October 2018
  Date Updated: NA/NA/NA
*/

// Declaration Section
const Discord   = require("discord.js");

// Procedure Section
module.exports.run      = async (bot, message, args) => {
  let botAvatar         = bot.user.displayAvatarURL;
  let serverAvatar      = message.guild.iconURL;

  if (message.member.hasPermission("BAN_MEMBERS")){
    let s_embed = new Discord.RichEmbed()

    .setColor("#00ffed") // Cyan
    .setTitle(`General Commands for: ${message.guild.name}`)
    .setAuthor(bot.user.username, botAvatar)
    .setFooter("Information Generated at: ") // Add a footer picture.
    .setTimestamp()
    .setThumbnail(serverAvatar)

    .addField(">cmds", "Commands Available", true)
    .addField(">botinfo", "General Bot Informations", true)
    .addField(">serverinfo", "General Server Information", true)
    .addField(">showstaff", "All Staff Members", true)
    .addField(">membercount", "Total Member Count", true)
    .addField(">botlog", "Bot Update Log", true)

    .addField(">flip", "Coin Toss", true)
    .addField(">roll", "Die Roll", true)
    .addField(">speak", "Elizabeth's message", true)
    .addField(">rpc [type]", "Rock Paper Scissors game", true)
    .addField("Ping", "Pong [Latency]", true)
    .addField(">quote [Not Initialized]", "Quote of the day", true)

    .addField(">report [Not Initialized]", "Report user", true)
    .addField(">verify [Not Initialized]", "Verifies the user.", true)
    .addField(">who [Not Initizlied]", "Discord Profile inquiry", true)
    .addField(">whois [Not Initizlied]", "Roblox Profile inquiry", true)

    .addField(">ban [Not Initilzlized]", "Bans a user", true)
    .addField(">warn [Not Initizlized]", "Warns a user", true)
    .addField(">kick [Not Initialized]", "Kicks a user", true)
    .addField(">mute [Not Initialized]", "Mutes a user", true)

    if (message.member.guild.owner) {
      console.log(`${message.member.guild.owner} has request to see the commands`)

      let o_embed = new Discord.RichEmbed()

      .setColor("#ff00ff")
      .setTitle("Extra Commands for the Administrators")
      .setAuthor(bot.user.username, botAvatar)
      .setFooter("Information Generated at: ") // Add a footer picture.
      .setTimestamp()

      .addField(">purgemessage [Not Initialized]", "purges specific amount of messages")
      .addField(">purgeallmessage [Not Initialized]", "purges all messages")
      .addField(">purgebotmessage [Not Initialized]", "purges all bot messages")
      .addField(">purgeallimage [NotInitialized]", "purges all images")
      .addField("rankstaff [Not Initialized]", "ranks the staff member")
      .addField("derankstaff [Not Initialized]", "removes staff rank");

             message.author.send(s_embed);
      return message.author.send(o_embed);
    }
    else {
      return message.author.send(s_embed);
    }
  }
  else {
    let m_embed = new Discord.RichEmbed()

    .setColor("#00ffed") // Cyan
    .setTitle(`General Commands for: ${message.guild.name}`)
    .setAuthor(bot.user.username, botAvatar)
    .setFooter("Information Generated at: ") // Add a footer picture.
    .setTimestamp()
    .setThumbnail(serverAvatar)

    .addField(">cmds", "Commands Available", true)
    .addField(">botinfo", "General Bot Informations", true)
    .addField(">serverinfo", "General Server Information", true)
    .addField(">showstaff", "All Staff Members", true)
    .addField(">membercount", "Total Member Count", true)
    .addField(">botlog", "Bot Update Log", true)

    .addField(">flip", "Coin Toss", true)
    .addField(">roll", "Die Roll", true)
    .addField(">speak", "Elizabeth's message", true)
    .addField(">rpc [type]", "Rock Paper Scissors game", true)
    .addField("Ping", "Pong [Latency]", true)
    .addField(">quote [Not Initialized]", "Quote of the day", true)

    .addField(">report [Not Initialized]", "Report user", true)
    .addField(">verify [Not Initialized]", "Verifies the user.", true)
    .addField(">who [Not Initizlied]", "Discord Profile inquiry", true)
    .addField(">whois [Not Initizlied]", "Roblox Profile inquiry", true);
    return message.author.send(m_embed);
  }
};

// Output Section
module.exports.help   = {
  name: "cmds"
};
