const Discord = require("discord.js")

exports.run = async (client,message,args,config,tools) => {

    if (message.author.id != config.Bot.OwnerId) return
    let Embed = new Discord.RichEmbed({
        title: "Accounts :",
        color: config.Bot.BotColor,
        fields: [
            {name: "User#9326 :",value: "https://discordapp.com/oauth2/authorize?client_id=480755380457177109&scope=bot&permissions=3669056",inline: true},
            {name: "Jathur#5191 :",value: "https://discordapp.com/oauth2/authorize?client_id=480370737127882762&scope=bot&permissions=8",inline: true}
        ]
    })

    message.author.send(Embed)
};

