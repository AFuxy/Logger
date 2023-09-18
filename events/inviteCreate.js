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
        { name: ' ', value: ' '},
        { name: 'Expiration', value: `<t:${invite.expiresTimestamp / 1000}:R>`},
        { name: ' ', value: ' '},
        { name: 'Invite Code', value: `\`\`\`elm\n${invite.code}\`\`\``, inline: true},
        { name: 'Invite Link', value: `[Invite](${invite.url})`, inline: true}
    )
    invites.get(invite.guild.id).set(invite.code, invite.uses);
    logger(embed, invite.inviter.id, extra, file);
})