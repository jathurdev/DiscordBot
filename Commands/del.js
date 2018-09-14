exports.run = async (client,message,args,config,tools) => {
    if (!message.author.id == config.Bot.OwnerId) return
    message.delete();
};