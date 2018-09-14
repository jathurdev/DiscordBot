exports.run = async (client,message,args,config,tools) => {

    let Discord = require('discord.js')

    let Embed = new Discord.RichEmbed();
        Embed.setTitle("🏓")
        Embed.setDescription("Pong !")
        Embed.addField(" Your ping is : ",Math.round(Date.now()-message.createdTimestamp) + " ms",true)
        Embed.addField("API Ping : ",(client.ping) + " ms",true)
        Embed.setColor(config.Bot.BotColor)

    message.channel.send(Embed)
};