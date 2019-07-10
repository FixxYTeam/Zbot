const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    let embed = new Discord.RichEmbed()
        .setTitle(`${bot.user.tag} Store`)
        .setThumbnail(message.author.avatarURL)
        .setDescription('Pour payer utilise la commande: z!buy <item>')
        .addField('『』Membre prenium', 'Vous permet de débloquer la grade membre prenium (il y\'aura des avantages plus tard')
        .setFooter("XioBot™", bot.user.displayAvatarURL)
        .setColor('PURPLE')
        .setTimestamp()
    message.channel.send(embed);

}
