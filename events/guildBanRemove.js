const { EmbedBuilder } = require("discord.js");
const { logger } = require("../index");

client.on("guildBanRemove", (ban) => {
    file = null;
    extra = null;
    const embed = new EmbedBuilder()
    .setTitle(" > User Unbanned")
    .addFields(
        { name: 'Username', value: `\`\`\`elm\n${ban.user.username}\`\`\``, inline: true},
        { name: 'ID', value: `\`\`\`elm\n${ban.user.id}\`\`\``, inline: true},
        { name: 'Guild', value: `\`\`\`elm\n${ban.guild.name}\`\`\``}
    )
    .setThumbnail(ban.user.avatarURL());
    logger(embed, config.TagID, extra, file);
})