/*
  Author: Prithul Niraula (Zafirua)
  Date Created: 5th October 2018
  Date Updated: NA/NA/NA
*/

// Declaration Section
const Discord   = require("discord.js");

// Procedure Section
module.exports.run     = async (bot, message, arguements) => {
  let Chance    = Math.floor(Math.random() * 2);

  if (Chance == 0) {
    return message.reply("Heads!");
  }
  else {
    return message.reply("Tails!");
  }
};

// Output Section
module.exports.help   = {
  name: "flip"
};
