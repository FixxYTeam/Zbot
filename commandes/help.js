const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    message.channel.send('La page d\'aide vous été envoyer en mp')
    message.author.createDM().then(channel => {
        let embedH = new Discord.RichEmbed()
            .setTitle("Liste des commandes !")
            .setThumbnail(message.author.avatarURL)
            .setDescription('Usage: z!<catégorie>')
            .addField('mod', 'permet de voir les commandes de modérations')
            .addField('fun', 'permet de voir les commandes fun')
            .addField('eco', 'permet de voir les commandes liés à l\'économie')
            .addField('autres', 'permet de voir les commandes autres')
            .setColor('GREEN')
            .setFooter("XioBot™", bot.user.displayAvatarURL)
            .setTimestamp()
        channel.send(embedH)
    });
}