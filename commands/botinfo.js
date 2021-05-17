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
  let embed         = new Discord.RichEmbed()

  .setColor("#e5ff00") // Bright Yellow
  .setTitle(`${bot.user.username}'s Informations`)
  //.setURL("http://gintama.wikia.com/wiki/Elizabeth")
  .setAuthor(bot.user.username, botAvatar)
  .setFooter("Information Generated at: ") // Add a footer picture.
  .setTimestamp()
  .setThumbnail(botAvatar)

  .addField("Artificial Intellgence Name: ", bot.user.username, true)
  .addField("Japanese Name: ", "エリザベス", true)
  .addField("Date of Birth: ", "7th September", true)
  .addField("Race: ", "Renho", true)
  .addField("Gender: ", "Male", true)
  .addField("Height: ", "180 cm (5' 11)", true)
  .addField("Weight: ", "123 kg (271 lb)", true)
  .addField("Status: ", "Alive", true)
  .addField("Owner: ", "Zafirua", true)
  .addField("Total Servers: ", `${bot.guilds.size} servers`, true);

  return message.channel.send(embed);
};

// Output Section
module.exports.help   = {
  name: "botinfo", 
  description : "general informations regarding the bot."
};
