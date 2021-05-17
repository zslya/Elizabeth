/*
  Author: Prithul Niraula (Zafirua)
  Date Created: 5th October 2018
  Date Updated: NA/NA/NA
*/

// Declaration Section
const Discord     = require("discord.js");

// Procedure Section
module.exports.run  = async (bot, message, args) => {

  let membersWithRole = message.guild.members.filter(member => {
      return member.roles.find("name", "Staff");
  }).map(member => {
      return member.user.username;
  })

  let botAvatar     = bot.user.displayAvatarURL;
  let serverAvatar  = message.guild.iconURL;
  let embed         = new Discord.RichEmbed()
  .setColor("#495cff") // Bright Yellow
  .setTitle(`Staff members in: ${message.guild.name}`)
  .setAuthor(bot.user.username, botAvatar)
  .setFooter("Information Generated at: ") // Add a footer picture.
  .setTimestamp()
  .setThumbnail(serverAvatar)

  .addField("Staff: ", membersWithRole, true)
  .addField("For further inquiry: ", "Ask users with Staff Role.", true);

  return message.channel.send(embed);
};

// Output Section
module.exports.help   = {
  name: "showstaff"
};
