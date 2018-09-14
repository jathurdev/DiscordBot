exports.run = async (client,message,args,config,tools) => {
    message.guild.me.voiceChannel.leave();
    message.channel.send("Yes master :(")
}