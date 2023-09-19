const { EmbedBuilder } = require("discord.js");
const { logger } = require("../index");

client.on("roleCreate", (role) => {
    file = null;
    extra = null;
    const embed = new EmbedBuilder()
    .setTitle(" > Role Created")
    .addFields(
        { name: "Role", value: `\`\`\`elm\n${role.name}\`\`\``, inline: true},
        { name: "ID" , value: `\`\`\`elm\n${role.id}\`\`\``, inline: true},
        { name: "Colour" , value: `\`\`\`elm\n${role.hexColor}\`\`\``},
        { name: "Position" , value: `\`\`\`elm\n${role.position}\`\`\``, inline: true},
        { name: "Managed" , value: `\`\`\`elm\n${role.managed}\`\`\``, inline: true},
        { name: "Hoisted" , value: `\`\`\`elm\n${role.hoist}\`\`\``},
        { name: "Mentionable" , value: `\`\`\`elm\n${role.mentionable}\`\`\``, inline: true}
    )
    logger(embed, config.TagID, extra, file);
});