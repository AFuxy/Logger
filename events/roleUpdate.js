const { EmbedBuilder } = require("discord.js");
const { logger } = require("../index");

client.on("roleUpdate", (oldRole, newRole) => {
    file = null;
    extra = null;
    const embed = new EmbedBuilder()
    .setTitle(" > Role Updated")
    .addFields(
        { name: "Role", value: `\`\`\`elm\n${newRole.name}\`\`\``}
    )
    if(oldRole.name != newRole.name) embed.addFields({ name: "Old Name", value: `\`\`\`diff\n- ${oldRole.name}\`\`\``, inline: true}, { name: 'New Name', value: `\`\`\`diff\n+ ${newRole.name}\`\`\``, inline: true});
    if(oldRole.hexColor != newRole.hexColor) embed.addFields({ name: "Old Colour", value: `\`\`\`diff\n- ${oldRole.hexColor}\`\`\``, inline: true}, { name: 'New Colour', value: `\`\`\`diff\n+ ${newRole.hexColor}\`\`\``, inline: true});
    if(oldRole.hoist != newRole.hoist) embed.addFields({ name: "Old Hoist", value: `\`\`\`diff\n- ${oldRole.hoist}\`\`\``, inline: true}, { name: 'New Hoist', value: `\`\`\`diff\n+ ${newRole.hoist}\`\`\``, inline: true});
    if(oldRole.icon != newRole.icon) embed.addFields({ name: "Old Icon", value: `\`\`\`diff\n- ${oldRole.icon}\`\`\``, inline: true}, { name: 'New Icon', value: `\`\`\`diff\n+ ${newRole.icon}\`\`\``, inline: true});
    if(oldRole.mentionable != newRole.mentionable) embed.addFields({ name: "Old Mentionable", value: `\`\`\`diff\n- ${oldRole.mentionable}\`\`\``, inline: true}, { name: 'New Mentionable', value: `\`\`\`diff\n+ ${newRole.mentionable}\`\`\``, inline: true});
    if(oldRole.position != newRole.position) return;

    logger(embed, config.TagID, extra, file);
});