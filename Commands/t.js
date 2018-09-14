exports.run = async (client,message,args,config,tools) => {

    const fs = require('fs');

    let T = fs.readFileSync("./t.txt", {"encoding": "utf-8"});
  
     message.channel.send(T)

};