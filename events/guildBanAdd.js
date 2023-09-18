const { EmbedBuilder } = require("discord.js");
const { logger } = require("../index");

client.on("guildBanAdd", (ban) => {
    file = null;
    extra = null;
    const embed = new EmbedBuilder()
    .setTitle(" > User Banned")
    .addFields(
        { name: 'Username', value: `\`\`\`elm\n${ban.user.username}\`\`\``, inline: true},
        { name: 'ID', value: `\`\`\`elm\n${ban.user.id}\`\`\``, inline: true},
        { name: ' ', value: ' '},
        { name: 'Reason', value: `\`\`\`elm\n${ban.reason}\`\`\``, inline: true},
        { name: 'Guild', value: `\`\`\`elm\n${ban.guild.name}\`\`\``, inline: true}
    )
    .setThumbnail(ban.user.avatarURL());
    logger(embed, config.TagID, extra, file);
});