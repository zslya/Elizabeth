const Discord     = require("discord.js");

// Procedure Section
module.exports.run  = async (bot, message, args) => {
    if (!(message.member.hasPermission("BAN_MEMBERS"))) {
        return message.reply("You do not have enough permissions");
    }
    else {

        let roleToAdd = message.guild.roles.find("name", "Member");
        message.guild.members.filter(m => !m.user.bot).map(async member => await member.addRole(roleToAdd));

    }
};

// Output Section
module.exports.help   = {
    name        : "roleAll",
    description : "adds role member"
};
