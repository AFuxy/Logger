const { EmbedBuilder } = require("discord.js");
const { logger } = require("../index");

client.on("guildCreate", (guild) => {
    file = null;
    extra = null;
    const embed = new EmbedBuilder()
    .setTitle(" > Guild Joined")
    .addFields(
        { name: 'Name', value: `\`\`\`elm\n${guild.name}\`\`\``, inline: true},
        { name: 'ID', value: `\`\`\`elm\n${guild.id}\`\`\``, inline: true},
        { name: ' ', value: ' '},
        { name: 'Owner', value: `\`\`\`elm\n${guild.owner}\`\`\``, inline: true},
        { name: 'Region', value: `\`\`\`elm\n${guild.region}\`\`\``, inline: true},
        { name: ' ', value: ' '},
        { name: 'Verification Level', value: `\`\`\`elm\n${guild.verificationLevel}\`\`\``, inline: true},
        { name: 'Members', value: `\`\`\`elm\n${guild.memberCount}\`\`\``, inline: true}
    )
    .setThumbnail(guild.iconURL());
    guild.invites.fetch().then(guildInvites => {
        invites.set(guild.id, new Map(guildInvites.map((invite) => [invite.code, invite.uses])));
    })
    logger(embed, config.TagID, extra, file);
});