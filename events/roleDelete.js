const { EmbedBuilder } = require("discord.js");
const { logger } = require("../index");

client.on("roleDelete", (role) => {
    file = null;
    extra = null;
    const embed = new EmbedBuilder()
    .setTitle(" > Role Deleted")
    .addFields(
        { name: "Role", value: `\`\`\`elm\n${role.name}\`\`\``, inline: true},
        { name: "ID" , value: `\`\`\`elm\n${role.id}\`\`\``, inline: true},
    )
    logger(embed, config.TagID, extra, file);
})