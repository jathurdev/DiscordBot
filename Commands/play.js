const ytdl = require('ytdl-core');
const streamOptions = { seek: 0, volume: 1 };

exports.run = async (client,message,args,config,tools) => {
    if (!message.member.voiceChannel) return message.channel.send("Must be in a voice channel to use this command.");
    if (!args[0]) return message.channel.send("Please input a youtube link.")
    if (!ytdl.validateURL(args[0])) return message.channel.send("Please input a **valid** youtube link.")

    message.member.voiceChannel.join().then(connection => {
        let stream = ytdl(args[0], { filter : 'audioonly' });
        let dispatcher = connection.playStream(stream, streamOptions)

  })

  .catch(console.error);
}