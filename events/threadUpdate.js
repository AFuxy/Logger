const { EmbedBuilder } = require("discord.js");
const { logger } = require("../index");

client.on("threadUpdate", (oldThread, newThread) => {
    file = null;
    extra = null;
    const embed = new EmbedBuilder()
    .setTitle(" > Thread Updated")
    .addFields({ name: "Name", value: `\`\`\`elm\n${newThread.name}\`\`\``})
    if(oldThread.name != newThread.name) embed.addFields({ name: "Old Name", value: `\`\`\`diff\n- ${oldThread.name}\`\`\``, inline: true}, { name: 'New Name', value: `\`\`\`diff\n+ ${newThread.name}\`\`\``, inline: true});
    if(oldThread.archived != newThread.archived) embed.addFields({ name: "Old Archived", value: `\`\`\`diff\n- ${oldThread.archived}\`\`\``, inline: true}, { name: 'New Archived', value: `\`\`\`diff\n+ ${newThread.archived}\`\`\``, inline: true});
    if(oldThread.locked != newThread.locked) embed.addFields({ name: "Old Locked", value: `\`\`\`diff\n- ${oldThread.locked}\`\`\``, inline: true}, { name: 'New Locked', value: `\`\`\`diff\n+ ${newThread.locked}\`\`\``, inline: true});
    if(oldThread.memberCount != newThread.memberCount) embed.addFields({ name: "Old Member Count", value: `\`\`\`diff\n- ${oldThread.memberCount}\`\`\``, inline: true}, { name: 'New Member Count', value: `\`\`\`diff\n+ ${newThread.memberCount}\`\`\``, inline: true});
    if(oldThread.name == newThread.name && oldThread.archived == newThread.archived && oldThread.locked == newThread.locked && oldThread.memberCount == newThread.memberCount) return;
    logger(embed, config.TagID, extra, file);
})