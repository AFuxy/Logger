const { EmbedBuilder } = require("discord.js");
const { logger } = require("../index");

client.on("emojiUpdate", (oldEmoji, newEmoji) => {
    file = null;
    extra = null;
    const embed = new EmbedBuilder()
    .setTitle(" > Emoji Updated")
    if(oldEmoji.name != newEmoji.name) embed.addFields({ name: "Old Name", value: `\`\`\`diff\n- ${oldEmoji.name}\`\`\``, inline: true}, { name: 'New Name', value: `\`\`\`diff\n+ ${newEmoji.name}\`\`\``, inline: true});
    logger(embed, config.TagID, extra, file);
})