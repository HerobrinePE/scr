const { RichEmbed } = require("discord.js");
module.exports = {
    name: "stats",
    aliases: ["stat"],
    category: "Info",
    description: "Stats",
    usage: "check server stats",
    run: (client, message, args) => {
    const embed = new RichEmbed()
    .setThumbnail("https://cdn.glitch.com/34219f89-5da9-4107-b722-a71edf79699b%2Ftenor.gif?v=1590626769885")
    .setTitle("<a:NitroBoost728:709614699041259570>   Stats   <a:NitroBoost728:709614699041259570>")
    .setDescription("-------------")
    .setColor("RANDOM")
    .addField("Command called by", message.author.username)
    .addField("Bot's Guild Count", client.guilds.size)
    .addField("Global User Count", client.users.size)
    .addField("This Server Membercount", message.guild.memberCount)
    .addField('This Server Channel Count', message.guild.channels.size)
    .addField('This Server Role Count', message.guild.roles.size+"\n || ||")
    
     message.channel.send(embed)
          
        }
        
}
