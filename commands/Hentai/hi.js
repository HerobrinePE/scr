const superagent = require('superagent')
   const { discord, RichEmbed }= require("discord.js")
module.exports = {
    name: "setloop",
    category: null,
    run: async (client, msg, args) => {
      msg.delete()
    if(!msg.member.hasPermission== "ADMINISTRATOR") return msg.reply("you cant set interval")
  if (msg.channel.nsfw === true) {
    msg.channel.send("Turning on please wait")
    setInterval(()=>{
    let message = ["hentai", "lewdneko", "hentai_anal", "hthigh", "hkitsune", "hmidriff"]
    let rand = message[Math.floor(Math.random()* message.length)]
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: rand})
    .end((err, response) => {
      var embed = new RichEmbed()
      msg.channel.send(rand,{ file: response.body.message });
    });
    }, 5000)
  } else {
  msg.channel.send("This isn't NSFW channel!").then(m=>{
      m.react("❌")
    m.delete(5000)
    })
  }
    }
}
