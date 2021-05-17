/*
  Author: Prithul Niraula (Zafirua)
  Date Created: 5th October 2018
  Date Updated: NA/NA/NA
*/

// Declaration Section
const Discord     = require("discord.js");

// Procedure Section
module.exports.run  = async (bot, message, args) => {
  if (!(message.member.hasPermission("BAN_MEMBERS"))) {
    return message.reply("You do not have enough permissions");
  }
  else {
    let userToAdd = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

    if (!(userToAdd)) {
      return message.reply("I could not find the user. Sorry.");
    }
    else {
      let roleToAdd = message.guild.roles.find("name", "Verified by amanda");

      if (userToAdd.roles.has(roleToAdd.id)) {
        return message.reply("It seems the user already has that role.");
      }
      else {
        userToAdd.addRole(roleToAdd);
      }
    }
  }
};

// Output Section
module.exports.help   = {
  name        : "verify",
  description : "adds role amanda-verified"
};
