const posts = require("rule34js").posts;
const { RichEmbed } = require("discord.js");
let v = [];
module.exports = {
  name: "rule34",
  run: async (client, message, args) => {
    let mes = message.content.split(" ").slice(1);
    posts({ tags: [mes.join()] }).then(value => {
      let f = Math.floor(Math.random() * 100);
      let val = value.posts[parseInt(f)];
      var i = 0;
      
      let Rich = new RichEmbed()
        .setTitle(val.created_at)
        .setImage(val.file_url);
      message.channel.send(Rich);
    });
  }
};
