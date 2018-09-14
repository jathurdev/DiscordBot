const ytdl = require('ytdl-core');
const streamOptions = { seek: 0, volume: 1 };

exports.run = async (client,message,args,config,tools) => {
    message.channel.send("**T E S T**")
}