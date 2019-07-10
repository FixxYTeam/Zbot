const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    message.channel.send('La page d\'aide vous été envoyer en mp')
    message.author.createDM().then(channel => {
        let embedE = new Discord.RichEmbed()
            .setTitle("Liste des commandes !")
            .setThumbnail(message.author.avatarURL)
            .addField('En dev', false)
            .setColor('GREEN')
            .setFooter("XioBot™", bot.user.displayAvatarURL)
            .setTimestamp()
        channel.send(embedE)
    });
}