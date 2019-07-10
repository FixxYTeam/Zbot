const Discord = require('discord.js');

exports.run = (bot, message, args) => {
        message.channel.send('La page d\'aide vous été envoyer en mp')
        message.author.createDM().then(channel => {
            let embedF = new Discord.RichEmbed()
                .setTitle("Liste des commandes !")
                .setThumbnail(message.author.avatarURL)
                .addField('bot', 'permet de voir les infos du bot')
                .addField('ping', 'permet de voir le ping du serveur, du bot et de l\'api speedtest-net (ne fonctionne plus)')
                .setColor('GREEN')
                .setFooter("XioBot™", bot.user.displayAvatarURL)
                .setTimestamp()
            channel.send(embedF)
        });
}

