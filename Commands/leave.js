const Discord = require("discord.js")

exports.run = async (client,message,args,config,tools) => {
    message.guild.me.voiceChannel.leave();
}