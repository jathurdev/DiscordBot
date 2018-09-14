const Discord = require("discord.js")
const DB = require('quick.db')

exports.run = async (client,message,args,config,tools) => {
    let Key = `User-${message.author.id}`

    let UserData = DB.get(Key)

    let Embed = new Discord.RichEmbed();
    Embed.setAuthor("**Bank**")
    Embed.addField("Account :",message.author.user.username)
    Embed.addField("Money:",UserData.Money)
    //Embed.setColor(config.Bot.BotColor)


    message.channel.send(Embed)
}