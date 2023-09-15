const { EmbedBuilder } = require("discord.js");
const { logger } = require("../index");

client.on("guildDelete", (guild) => {
    file = null;
    extra = null;
    const embed = new EmbedBuilder()
    .setTitle(" > Guild Left")
    .addFields(
        { name: 'Name', value: `\`\`\`elm\n${guild.name}\`\`\``},
        { name: 'ID', value: `\`\`\`elm\n${guild.id}\`\`\``},
        { name: 'Owner', value: `\`\`\`elm\n${guild.owner.user.username}\`\`\``, inline: true},
        { name: 'Region', value: `\`\`\`elm\n${guild.region}\`\`\``, inline: true},
        { name: 'Verification Level', value: `\`\`\`elm\n${guild.verificationLevel}\`\`\``, inline: true},
        { name: 'Members', value: `\`\`\`elm\n${guild.memberCount}\`\`\``, inline: true}
    )
    .setThumbnail(guild.iconURL());
    invites.delete(guild.id);
    logger(embed, config.TagID, extra, file);
});