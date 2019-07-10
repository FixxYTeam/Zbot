const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    message.channel.send('La page d\'aide vous été envoyer en mp')
    message.author.createDM().then(channel => {
        let embedG = new Discord.RichEmbed()
            .setTitle("Liste des commandes !")
            .setThumbnail(message.author.avatarURL)
            .addField('money', 'permet de voir sa money')
            .addField('balance', 'pareil que la commande money')
            .addField('balset', 'permet d\'enlever ou donner de l\'argent a un utilisateur (:warning: **COMMANDE RESERVER A L\'OWNER**)')
            .addField('buy', 'permet de payer des commandes, des role sur le support du bot (:link: https://discord.io/ZbotSupport) et des items. :warning: **La commande est en dev donc elle n\'est pas encore fonctionnel**')
            .setColor('GREEN')
            .setFooter("XioBot™", bot.user.displayAvatarURL)
            .setTimestamp()
        channel.send(embedG)
    });
}