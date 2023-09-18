const { EmbedBuilder, AttachmentBuilder } = require("discord.js");
const { logger } = require("../index");

client.on("guildMemberUpdate", (oldMember, newMember) => {
    file = null;
    extra = null;
    const embed = new EmbedBuilder()
    .setTitle(" > Guild User Updated !bad")
    .addFields({ name: "User", value: `\`\`\`elm\n${newMember.user.username}\`\`\``});
    if(oldMember.nickname !== newMember.nickname) embed.addFields({ name: "Old Nickname", value: `\`\`\`diff\n- ${oldMember.nickname}\`\`\``, inline: true}, { name: 'New Nickname', value: `\`\`\`diff\n+ ${newMember.nickname}\`\`\``, inline: true});
    logger(embed, newMember.user.id, extra, file);
})