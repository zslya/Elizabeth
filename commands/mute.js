/*
  Author: Prithul Niraula (Zafirua)
  Date Created: 5th October 2018
  Date Updated: NA/NA/NA
*/

// Declaration Section
const Discord     = require("discord.js");

// Procedure Section
module.exports.run  = async (bot, message, args) => {
  if (message.member.hasPermission("BAN_MEMBERS")) {
    const userToMute = message.guild.members.find('id', args.user.id);

    if (!userMute) {
      return message.reply("I cannot find the user. Please try again.");
    }

    const muteRole    = message.guild.roles.find("name", "muted");

    if (!muteRole) {
      return message.reply("I cannot find the role. Please try again.");
    }

    if (arg2 <= 7) {
      return message.reply("You cannot mute a user for less than a seven minutes.")
    }

    arg2  = 10;
    const timeMute    = (60 * arg2);

    userMute.addRole(muteRole);
    message.channel.send("Muted the user for " + arg2 + "minutes");

    setTimeout (() => {
      userMute.removeRole(muteRole)
    }, timeMute);
  }
  else {
    return message.reply("You do not have enough permissions to use this command. Action Revoked.");
  }
};

// Output Section
module.exports.help   = {
  name        : "mute",
  description : "mutes the member for a certain given amount of time. If not specified, automatically puts 1 hour"
};
