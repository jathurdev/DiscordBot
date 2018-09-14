exports.run = async (client,message,args,config,tools) => {
    
    if (message.author.id !== settings.ownerID) return message.channel.send("Sorry, You can't use this command.");

    try {
        delete require.cache[require.resolve(`./${args[0]}.js`)];;
    } catch(err) {
        return message.channel.send(`Can't reload : \`${args[0]}\` (Or this command doesn't exist.)`);
    }

    message.channel.send(`Reloaded : \`${args[0]}\``);
};