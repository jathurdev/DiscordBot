exports.run = async (client,message,args,config,tools) => {

    message.delete();
    
    message.channel.send(args.join(" "));

};