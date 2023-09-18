const { EmbedBuilder } = require("discord.js");
const { logger } = require("../index");

client.on("guildMemberRemove", async (member) => {
    file = null;
    extra = null;
    const newInvites = await member.guild.invites.fetch()
    const oldInvites = invites.get(member.guild.id);
    const invite = newInvites.find(i => i.uses > oldInvites.get(i.code));
    const inviter = await client.users.fetch(invite.inviter.id);

    const embed = new EmbedBuilder()
    .setTitle(" > User Left")
    .addFields(
        { name: 'Username', value: `\`\`\`elm\n${member.user.username}\`\`\``, inline: true},
        { name: 'ID', value: `\`\`\`elm\n${member.user.id}\`\`\``, inline: true},
        { name: ' ', value: ' '},
        { name: 'Joined At', value: `<t:${Math.round(member.joinedTimestamp / 1000)}:F>`, inline: true},
        { name: 'Invite Code', value: `\`\`\`elm\n${inviter ? invite.code : "None"}\`\`\``, inline: true}
    )
    .setThumbnail(member.user.avatarURL());
    logger(embed, config.TagID, extra, file);
})