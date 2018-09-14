const DB = require('quick.db')

exports.run = async (client,message,args,config,tools) => {
   let Key = `User-${message.author.id}`
   let UserData = DB.get(Key)

   if (!args[0]) return message.channel.send(`Money : ${UserData.Money}`)

   if (args[0] && args[1]) {
        if (args[0] == "add" && !isNaN(args[1])) {
          message.channel.send(`Added ${args[1]} Money to your account.`)
          DB.add(`${Key}.Money`,parseInt(args[1]))
       }
   }  
}