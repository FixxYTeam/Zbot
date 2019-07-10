const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (bot, message, args) => {

    let author = db.get('userInfo.balance');
    if (args[0] == 'Membre prenium') {
        if (!message.guild.roles.find('name', '『』Membre prenium')) return message.channel.send('Je ne trouve pas le grade: **『』Membre prenium**');
        if (author < 700) return message.channel.send(':x: Vous avez besoin d\'au moins `700` $ pour acheter cet articleous avez besoin d\'au moins 700 $ pour acheter cet article');
        message.guild.members.get(message.author.id).addRole(message.guild.roles.find('name', '『』Membre prenium'));
        db.subtract('userInfo.balance', 700);
        message.channel.send(message.author.tag + ' Tu a acheté le grade modérator avec succès pour `700`$');
    }
}
