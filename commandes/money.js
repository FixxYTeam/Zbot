const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (bot, message, args) => {

let bal = db.get('userInfo.balance')
if (bal === null) bal = 500;
    const embedN = new Discord.RichEmbed()
        .setColor('PURPLE')
        .setDescription(`**${message.guild.name} Bank**`)
        .addField('Titulaire de compte',message.author.username,true)
        .addField('Solde du compte',bal,true)
        message.channel.send(embedN);
}
