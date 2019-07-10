const Discord = require('discord.js');

exports.run = (bot, message, args) => {
    let totalSeconds = (bot.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = parseInt(totalSeconds % 60);

    let BotinfoEmbed = new Discord.RichEmbed()
        .setColor("GREEN")
        .setAuthor(bot.user.username, client.user.displayAvatarURL)
        .setThumbnail(message.author.avatarURL)
        .setDescription("**• Informations du bot •**")
        .addField("👑 Créateurs →", "- ``fIXXyLEbEST``\n- ``#2177``", true)
        .addField("⏲ Uptime →", `__${days}__ j, __${hours}__ h, __${minutes}__ m et __${seconds}__ s`, true)
        .addBlankField()
        .addField("📰 Informations →", `- \`ID\` → ${bot.user.id}\n- \`Langage\` → Français | FR | French\n- \`Invitation du bot\` → https://discordapp.com/oauth2/authorize?client_id=597779286040248341&scope=bot&permissions=2146958847 \n- \`Préfix(Par Défaut)\` → z!`, true)
        .addField("📊 Statistiques →", "- `Serveurs` → "+bot.guilds.size+"\n"+"- `Utilisateurs` → "+bot.users.size+"\n"+"- `Salons` → "+bot.channels.size+"\n"+"- `Ping` → "+Math.round(bot.ping)+" ms", true)
        .setFooter("XioBot™", bot.user.displayAvatarURL)
        .setTimestamp();

    message.channel.send(BotinfoEmbed);
}