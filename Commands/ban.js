const Discord = require('discord.js')

exports.run = async (client,message,args,config,tools) => {
    let Help = new Discord.RichEmbed({
        title: "Help",
        description: `Usage : ${config.Bot.Prefix}ban <user or mention> <reason>`,
        color: config.Bot.BotColor
    })

    let User = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let Reason = args.slice(1).join(" ");

    if (!User) return message.channel.send(Help);
    if (!Reason) Reason = `No reason given.`

    let KickEmbed = new Discord.RichEmbed({
        title: "Banned :",
        description: `@${User.user.tag} by <@${message.author.id}>`,
        color: config.Bot.BotColor,
        fields: [
            {name: "Reason :",value: Reason}
        ]
    })

    User.ban(Reason)

    message.channel.send(KickEmbed)
}