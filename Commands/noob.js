const Discord = require("discord.js")

exports.run = async (client,message,args,config,tools) => {
    message.channel.startTyping()

    let Image = new Discord.Attachment("../")
    setTimeout(function(){
        message.channel.send("The person above big gay",Image)
        message.channel.stopTyping(true)
    },1500)
};