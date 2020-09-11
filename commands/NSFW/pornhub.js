const PornHub = require("@bowwow/pornhub_api");
const pornhub = new PornHub();
const { RichEmbed } = require("discord.js");

const search = [];
const links = [];
module.exports = {
  name: "porn",
  run: async (client, message, args) => {
    let mb = args[0];
    if (mb.toLowerCase() == "random") return random();
    if (!mb) return random();
    if (mb.toLowerCase() == "all") return all();

    async function all() {
      const msg = message.content.split(" ").slice(2);
      var i = 0;
      pornhub.search({ search: msg.join(" ") }).then(res => {
        let porn = res.videos;
        for (i in porn) {
          let m = porn[i].title;
          let f = porn[i].url;
          links.push(m);
          search.push(f);
        }

        console.log(links);
        const bed = new RichEmbed()
          .setTitle(msg.join(" "))
          .setDescription("Searches" + `${links}`)
          .setThumbnail(porn[0].thumb);
        message.channel.send(bed).then(() => {
          const fe = new RichEmbed()
            .setTitle(msg.join(" ") + "links")
            .setThumbnail(porn[1].thumb)
            .setDescription(search);
          message.channel.send(fe);
        });
      });
    }

    function random() {
      const msg = message.content.split(" ").slice(2);
      pornhub.search({ search: msg.join(" ") }).then(res => {
        console.log(res);
        let math = Math.floor(Math.random() * 30);

        let porn = res.videos[parseInt(math)];
        const bed = new RichEmbed()
          .setTitle(porn.title)
          .addField("Duration", porn.duration)
          .addField("Views", porn.views)
          .addField("Publish date", porn.publish_date)
          .addField("Link", `[click here to go to the search](${porn.url})`)
          .setImage(porn.default_thumb)
          .setThumbnail(porn.thumb);
        message.channel.send(bed);
      });
    }
  }
};
