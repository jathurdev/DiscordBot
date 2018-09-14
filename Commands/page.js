const Discord = require("discord.js")

exports.run = async (client,message,args,config,tools) => {

    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Must be Administrator to run this command')

    let Pages = ["**Sample**","`Text`","You are a ~~noob~~ pro"]
    let Page = 0

    let Embed = new Discord.RichEmbed()
        .setColor(config.Bot.BotColor)
        .setAuthor("Book :")
        .setDescription(Pages[Page])
        .setFooter(`${Page}/${Pages.length-1}`)

    message.channel.send(Embed).then(msg=> {
        msg.react("◀").then(m=> {
            msg.react("▶")

            

            const ForwardFilter = (reaction,user) => reaction.emoji.name == "▶" && user.id == message.author.id
            const BackwardFilter = (reaction,user) => reaction.emoji.name == "◀" && user.id == message.author.id

            const Forward = msg.createReactionCollector(ForwardFilter,{time:60000})
            const Backward = msg.createReactionCollector(BackwardFilter,{time:60000})

            Forward.on('collect', r=> {
                if (Page == Pages.length-1) return;
                Page++;
                Embed.setDescription(Pages[Page])
                Embed.setFooter(`${Page}/${Pages.length-1}`)
                msg.edit(Embed)
            })

            Backward.on('collect', r=> {
                if (Page == 0) return;
                Page--;
                Embed.setDescription(Pages[Page])
                Embed.setFooter(`${Page}/${Pages.length-1}`)
                msg.edit(Embed)
            })

        })
    })
};

