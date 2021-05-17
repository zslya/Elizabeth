/*
  Author: Prithul Niraula (Zafirua)
  Date Created: 5th October 2018
  Date Updated: NA/NA/NA
*/

// Declaration Section
const Discord   = require("discord.js");

// Procedure Section
module.exports.run  = async (bot, message, args) => {
  let botAvatar     = bot.user.displayAvatarURL;
  let serverAvatar  = message.guild.iconURL;
  let embed         = new Discord.RichEmbed()

  .setColor("#bf02ff") // Bright Yellow
  .setTitle(`Member count for: ${message.guild.name}`)
  .setThumbnail(serverAvatar)
  .setAuthor(bot.user.username, botAvatar)
  .setFooter("Information Generated at: ") // Add a footer picture.
  .setTimestamp()

  .addField("Member Count: ", message.guild.memberCount, true);

  return message.channel.send(embed);
};

// Output Section
module.exports.help   = {
  name: "membercount"
};
