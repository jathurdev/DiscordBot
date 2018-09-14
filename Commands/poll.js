exports.run = async (client,message,args,config,tools) => {

    const Discord = require(`discord.js`)

    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Must be Administrator to run this command')

    if(!args[0]) return message.channel.send(`Usage : ${config.Bot.Prefix}poll <question>`)

    let Embed = new Discord.RichEmbed()
        .setColor(config.Bot.BotColor)
        .setAuthor("Poll :")
        .setDescription(args.join(` `))
        .setFooter("React to vote")


    message.channel.send(Embed).then(msg=> {
        msg.react(`✅`).then(m=> {
            msg.react(`❎`)
        })
    })
}