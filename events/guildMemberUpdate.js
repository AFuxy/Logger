const { EmbedBuilder, AttachmentBuilder } = require("discord.js");
const { logger } = require("../index");

client.on("guildMemberUpdate", (oldMember, newMember) => {
    file = null;
    extra = null;
    const embed = new EmbedBuilder()
    .setTitle(" > Guild User Updated !bad")
    .addFields({ name: "User", value: `\`\`\`elm\n${newMember.user.username}\`\`\``});
    // if(oldMember.user.username != newMember.user.username) embed.addFields({ name: "Old Username", value: `\`\`\`diff\n- ${oldMember.user.username}\`\`\``, inline: true}, { name: 'New Username', value: `\`\`\`diff\n+ ${newMember.user.username}\`\`\``, inline: true});
    // if(oldMember.user.displayName != newMember.user.displayName) embed.addFields({ name: "Old Display Name", value: `\`\`\`diff\n- ${oldMember.user.displayName}\`\`\``, inline: true}, { name: 'New Display Name', value: `\`\`\`diff\n+ ${newMember.user.displayName}\`\`\``, inline: true});
    if(oldMember.nickname !== newMember.nickname) embed.addFields({ name: "Old Nickname", value: `\`\`\`diff\n- ${oldMember.nickname}\`\`\``, inline: true}, { name: 'New Nickname', value: `\`\`\`diff\n+ ${newMember.nickname}\`\`\``, inline: true});
    // if(oldMember.user.avatarURL() != newMember.user.avatarURL()) {
    //     file = new AttachmentBuilder(oldMember.user.avatarURL(), { name: "Old Avatar" });
    //     file = new AttachmentBuilder(newMember.user.avatarURL(), { name: "New Avatar" });
    // }
    logger(embed, newMember.user.id, extra, file);
})