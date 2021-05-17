/*
  Author: Prithul Niraula
  Created Date: 5th October 2018
  Updated Date: NA/NA/NA
*/

// Declaration Section
const tokenfile   = "TOKEN-GOES-HERE";
const Discord     = require("discord.js");
const fs          = require("fs");
const mutesFile   = require("./mutes.json");
const bot         = new Discord.Client({disableEveryone: true});
const prefix      = ">";

bot.commands      = new Discord.Collection();

var UserArray     = new Array ();
var countLink     = 0;
var AuthorLink    = "ZafiruaTestVersion1";

// Initialization Section
// Init Commands
fs.readdir("./commands/", (errors, files) => {
  if (errors) {
    console.error(errors);
  }

  let jsfile = files.filter(f => f.split(".").pop() === "js")

  if(jsfile.length <= 0){
    return console.error("Did not find any files.");
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});

// Init Bot
bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("I am dead. :(");
})

// Guild Member Add
bot.on("guildMemberAdd", member =>{
  let MemRole     = member.guild.roles.find("name", "Member");
  console.log("New user: "+ member.user.username + " has entered the server: "+ member.guild.name);
  member.addRole(MemRole);
})

/* Processing Section */
bot.on("message", async message => {

    geturl = new RegExp("(^|[ \t\r\n])((ftp|http|https|gopher|mailto|news|nntp|telnet|wais|file|prospero|aim|webcal):(([A-Za-z0-9$_.+!*(),;/?:@&~=-])|%[A-Fa-f0-9]{2}){2,}(#([a-zA-Z0-9][a-zA-Z0-9$_.+!*(),;/?:@&~=%-]*))?([A-Za-z0-9$_+!*();/?:~-]))");
    var url = geturl.exec(message);
    if (url){
      console.log("URL FOUND! Posted by the user: " + message.author.username);

      if (!(message.member.hasPermission("MANAGE_MESSAGES") )){
        if (AuthorLink == message.author.username){
          message.delete();
          countLink = countLink + 1;

          if (countLink == 2){
            console.log("Posted link multiple times. Will Ban " + AuthorLink);
            message.member.ban();
            return message.reply("Banned for attempting to post link consecutive times");
          }
          else {
            return message.reply("You do not have enough permissions to post link. You will be Banned after " + (2 - countLink) + " attempts.");
          }
        }
        else {
          countLink = 0;
          AuthorLink  = message.author.username;
          console.log("A new user has initiated on a link: User name, " + AuthorLink);
          UserArray[AuthorLink, message.member.id];
          console.log(UserArray[AuthorLink, message.member.id]);
          message.delete();
          return message.reply("You do not have enough permissions to post link. Action Revoked");
        }
      }
      else {
        return console.log("Authorized link: Link initiated by user: " + message.member.user.username);
      }
    }
    
  if (message.author.bot) {
    return;
  };

  if (message.channel.type === "dm") {
    return;
  };

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));

  if (commandfile) {
    if (cmd.indexOf(">") > -1){
      commandfile.run(bot, message, args);
    }
  };
});

/* Output Section */
bot.login(tokenfile);
