/*
  Author: Prithul Niraula (Zafirua)
  Date Created: 5th October 2018
  Date Updated: NA/NA/NA
*/

// Declaration Section
const Discord     = require("discord.js");

// Procedure Section
module.exports.run  = async (bot, message, args) => {
  const x = await message.channel.send("Pinging...");

  return message.channel.send(x.edit(`Pong! ${x.createdTimestamp - message.createdTimestamp} ms`));
};

// Output Section
module.exports.help   = {
  name        : "ping",
  description : "Shows the latency"
};
