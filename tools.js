const Discord = require("discord.js")

module.exports = {
    Reply: function(Member,Message) {
        return `<@${Member.id}>, ${Message}`
    }
};