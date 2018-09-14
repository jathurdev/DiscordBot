exports.run = async (client,message,args,config,tools) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Must have `Manage messages` permission.")

    if (!args[0]) return message.channel.send("Please input a number.")

    if (!isNaN(args[0])) {
        if (args[0] >= 101 || args[0] <= 0) return message.channel.send("Input a number number between 1 and 100")
        message.delete().then(
            message.channel.bulkDelete(args[0])
        )
        
    }
};
