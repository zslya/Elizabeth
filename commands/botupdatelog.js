/*
  Author: Prithul Niraula (Zafirua)
  Date Created: 5th October 2018
  Date Updated: NA/NA/NA
*/

// Declaration Section
const Discord   = require("discord.js");

// Procedure Section
module.exports.run      = async (bot, message, args) => {
  let updateInformation =
  "```Bot Version 0.1.3 \n " +
  " => Revamped the entire source code. \n  => Added in new Commands \n   => >botlog \n   => >showstaff```"
  let botAvatar         = bot.user.displayAvatarURL;
  let serverAvatar      = message.guild.iconURL;
  let embed             = new Discord.RichEmbed()

  .setColor("#000000") // Black
  .setTitle(`Update Log for ${bot.user.username}`)
  .setAuthor(bot.user.username, botAvatar)
  .setFooter("Information Generated at: ") // Add a footer picture.
  .setTimestamp()

  .addField("=========================================================", "**Completion:** False")
  .addField("Bot Created Time: ", bot.user.createdAt)
  .setDescription(updateInformation);
  return message.channel.send(embed);
};

// Output Section
module.exports.help   = {
  name: "botlog"
};
