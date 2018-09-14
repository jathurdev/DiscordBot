const Discord = require("discord.js");
const DB = require("quick.db")
const fs = require(`fs`);

const webhookclient = new Discord.WebhookClient("486151309997899786","-r7BJjpync56yZpA5AgVaexb9y688SWbyTJnBsYt9Vyi5AFMy8Hm97AwORwEh6b3g-vA")

const client = new Discord.Client();
const bot = new Discord.Client();

const Config = require('./config.js');
const Tools = require('./tools.js')

let prefix = Config.Bot.Prefix;

const MainGuild = {
    GuildId : "334375673210601472",
    MemberCountId : "481837381369069568",
    BotCountId : "481837614010466356",
    TotalMemberCountId : "481837661900767252"
}

let inv = " ̷̧̟̭̺͕̜̦̔̏̊̍ͧ͊́̚̕͞"

function Disconnect(bool,token) {
    if (bool) {
        client.destroy()
        client.login(token)
    } else {
        client.destroy()
    }
}

client.on('message', message =>{

    let LogChannel = client.channels.get("483306730563043338")

    function Log(member,msg) {
        BotLogsChannel.send(member.tag + "with id of `" + member.id + "` in the guild " + member.guild.name + " with id of `" + member.guild.id + "` " + msg)
    }

    if (message.channel.type == "dm" || message.channel.type == "group") return;

    let Key = `User-${message.author.id}`

    let UserData = DB.get(Key)

    if (!UserData) {
        DB.set(Key,{Money : 100})
        message.author.send("Because it's the first time you see me. I'll give you a special gift. (100$)")
    }
    

    let args = message.content.slice(prefix.length).trim().split(' ');
    let cmd = args.shift().toLowerCase();

    let Owner = client.users.get(Config.Bot.OwnerId)

    if (message.author.bot) return;

    if (message.isMemberMentioned(Owner)) {
        let Embed = new Discord.RichEmbed();
        Embed.setAuthor("Ping :")
        Embed.setColor(Config.Bot.BotColor)
        Embed.addField("User :",`<@${message.author.id}>`,true)
        Embed.addField("Guild : ",message.guild.name,true)
        Embed.addField("Channel : ","#"+message.channel.name,true)
        Embed.addField("Message :",message.content)
        Owner.send(Embed)
    } 
    if (message.isMemberMentioned(client.user) && !message.mentions.everyone) {
        message.reply(`My prefix is "${prefix}"`)
    }

    if (!message.content.startsWith(prefix)) return;

    if (fs.existsSync(`./Commands/${cmd}.js`)) {
        try {

            delete require.cache[require.resolve(`./Commands/${cmd}.js`)];
    
            let CommandFile = require(`./Commands/${cmd}.js`);
                CommandFile.run(client,message,args,Config,Tools);
    
    
        } catch (Err) {
            console.log(Err.stack);
        }
    } else {
        message.reply("This command doesn't exist !").then(msg=>{
            setTimeout(function(){
                msg.delete()
            },2000)
        })
    }

});
  

client.on('ready',() => {
    
    let Statues = [`${prefix}ayy`,"OwO",`Jathur#0607 doesn't have friends.`]
    let Types = ["PLAYING","LISTENING","WATCHING"]
    let Activities = ["online"]//,"idle","dnd"]

    console.log('Logged as ' + client.user.tag)

    client.user.setActivity(`${prefix}ayy`, { type: 'WATCHING' })
    client.user.setStatus("online")
    

   setInterval(function() {
        let Status = Statues[Math.floor(Math.random()*Statues.length)]
        let Activity = Activities[Math.floor(Math.random()*Activities.length)]
        let Type = Types[Math.floor(Math.random()*Types.length)]

        client.user.setStatus(Activity)
        client.user.setActivity(Status, { type: Type })
   },30000)

});

bot.on('ready',() => {

    console.log('Logged as ' + bot.user.tag)

    bot.user.setActivity(`Jathur#0607`, { type: 'WATCHING' })
    bot.user.setStatus("online")

});

client.on('emojiCreate',emoji =>{
    let Embed = new Discord.RichEmbed();
    Embed.setAuthor("New emoji :")
    Embed.setColor(Config.Bot.BotColor)
    Embed.addField("Name :",emoji.name,true)
    Embed.addField("Id :",emoji.id,true)
    Embed.addField("Animated :",emoji.animated,true)
    Embed.addField("Preview :",`<:${emoji.name}:${emoji.id}>`,true)
    Embed.addField("From :",`**\`${emoji.guild.name}\`** with Id of **\`${emoji.guild.id}\`**`)
    Embed.setThumbnail(emoji.url)

    client.channels.get("483288874831839253").send(Embed)
});

client.on("guildMemberAdd",member=> {
    console.log(member.user.tag + " joinned")
})

client.on("guildMemberRemove",member=> {
    console.log(member.user.tag + " left")
})
 
client.login(process.env.Token);
bot.login(process.env.Token2)