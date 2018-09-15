const Discord = require("discord.js")

exports.run = async (client,message,args,config,tools) => {

    let Embed = new Discord.RichEmbed()
    .setColor(config.Bot.BotColor)
    .setAuthor("How 2 Markdown",`${config.Bot.Icons}/Bot.png`)
    .setFooter(`Requested by ${message.author.tag}`,message.author.avatarURL)
    .addField("*Italics*","`*Italics*` or `_Italics_`",true)
    .addField("**Bold**","`**Bold**`",true)
    .addField("__Underline__","`__Underline__`",true)
    .addField("~~Strikethrough~~","`~~Strikethrough~~`",true)
    .addField("`Code`","``Code``",true)
    .addField("__~~***`Italics Bold Underline Strikethrough Code`***~~__","`__~~***`Italics Bold Underline Strikethrough Code`***~~__`",true)

    message.channel.send(Embed)

};