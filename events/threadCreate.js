const { EmbedBuilder } = require("discord.js");
const { logger } = require("../index");

client.on("threadCreate", (thread) => {
    file = null;
    extra = null;
    const embed = new EmbedBuilder()
    .setTitle(" > Thread Created")
    .addFields(
        { name: "Name", value: `\`\`\`elm\n${thread.name}\`\`\``, inline: true},
        { name: "ID" , value: `\`\`\`elm\n${thread.id}\`\`\``, inline: true},
        { name: "Guild", value: `\`\`\`elm\n${thread.guild.name}\`\`\``, inline: true},
        { name: " ", value: ' '},
        { name: "Member Count", value: `\`\`\`elm\n${thread.memberCount}\`\`\``, inline: true},
        { name: "Archived", value: `\`\`\`elm\n${thread.archived}\`\`\``, inline: true},
        { name: "Locked", value: `\`\`\`elm\n${thread.locked}\`\`\``, inline: true},
        { name: " ", value: ' '},
        { name: "URL", value: `[Thread](${thread.url})`}
    )
    logger(embed, config.TagID, extra, file);
})