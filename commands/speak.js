/*
  Author: Prithul Niraula (Zafirua)
  Date Created: 5th October 2018
  Date Updated: NA/NA/NA
*/

// Declaration Section
const Discord     = require("discord.js");

// Initialization Section
let Conversation  = [
  "Hi. Please be nice to me!",
  "Well, well, well, look at what we got here baby brother!",
  "I like to rap (Although I am horrible)",
  "My other name is called Dragonia!",
  "I like rainy days.",
  "Most of the times, I love eating ice cream.",
  "You may think I am fat, I think you are blind.",
  "Goodbye, I do not wish to talk to you!",
  "I am called an Amanto, Ah-Mahn-to",
  "Yes, I am a penguin.",
  "No. I cannot dance. Even for you!",
  "Um. I am quite hairy actually.....",
  "I have pink eyes.",
  "Am I cute yet?",
  "I love you! :heart:",
  "Did you realize? I cannot speak! I use sign boards to communicate with you!",
  "Alohomora!",
  "Expecto Petronum",
  "I live in Japan, if you are curious..",
  "Zura jani Katsura da.",
  "NANI?",
  "I shoot laser through my eyes.",
  "I am awfually tall.",
  "I need to sleep.",
];

// Procedure Section
module.exports.run  = async (bot, message, args) => {

  let Length        = Conversation.length;
  let botAvatar     = bot.user.displayAvatarURL;
  let randomNumber  = Math.floor(Math.random() * Length);
  let convo         = Conversation[randomNumber];
  let embed         = new Discord.RichEmbed()
  .setColor("#ffffff") // Bright White
  .setTitle("Elizabeth's Response")
  .setAuthor(bot.user.username, botAvatar)
  .setFooter("Information Generated at: ") // Add a footer picture.
  .setTimestamp()
  .setThumbnail(botAvatar)
  .addField("Message: ", convo, true);

  return message.channel.send(embed);
};

// Output Section
module.exports.help   = {
  name: "speak"
};
