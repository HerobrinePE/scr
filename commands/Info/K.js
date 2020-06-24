const superagent = require('superagent')
   const { discord, RichEmbed }= require("discord.js")
module.exports = {
    name: "kill",
    category: null,
    run: async (client, msg, args) => {
    if(!msg.member.hasPermission == "ADMINISTRATOR") return msg.reply("you cant kill this interval")
    msg.channel.send("Turning off please wait")
            msg.reply("reboot sucessful").then(()=>{ process.exit(1)})
}
}
