const { EmbedBuilder } = require("discord.js");
const { logger } = require("../index");

client.on("inviteCreate", (invite) => {
    file = null;
    extra = null;
    const embed = new EmbedBuilder()
    .setTitle(" > Invite Created")
    .addFields(
        { name: 'Inviter', value: `\`\`\`elm\n${invite.inviter.username}\`\`\``, inline: true},
        { name: 'Channel', value: `\`\`\`elm\n${invite.channel.name}\`\`\``, inline: true},
        { name: 'Expiration', value: `<t:${invite.expiresTimestamp / 1000}:R>`},
        { name: 'Invite Code', value: `\`\`\`elm\n${invite.code}\`\`\``},
        { name: 'Invite Link', value: `[Invite](${invite.url})`}
    )
    logger(embed, invite.inviter.id, extra, file);
})