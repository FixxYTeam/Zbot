const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (bot, message, args) => {

    if (!message.member.hasPermission('ADMINISTRATOR')) {
        return message.reply(':x: Tu ne peux pas utiliser c\'est commande');
    }

    if (![args[0]]) return message.reply(':x: Veuillez spécifier un montant');
    if (isNaN(args[0])) return message.reply(':x: Commande invalide');

    let user = message.mentions.users.first() || message.author
    message.channel.send(args[0] + '$ ajouté avec succès')
    db.add('userInfo.balance', args[0])

}