const { EmbedBuilder } = require("discord.js");
const { logger } = require("../index");

client.on("inviteDelete", (invite) => {
    file = null;
    extra = null;
    const embed = new EmbedBuilder()
    .setTitle(" > Invite Deleted")
    .addFields(
        { name: 'Invite Code', value: `\`\`\`elm\n${invite.code}\`\`\``}
    )
    logger(embed, invite.inviterid, extra, file);
});