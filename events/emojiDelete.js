const { EmbedBuilder } = require("discord.js");
const { logger } = require("../index");

client.on("emojiDelete", (emoji) => {
    file = null;
    extra = null;
    const embed = new EmbedBuilder()
    .setTitle(" > Emoji Deleted")
    .addFields(
        { name: "Name", value: `\`\`\`elm\n${emoji.name}\`\`\``, inline: true},
        { name: "Guild", value: `\`\`\`elm\n${emoji.guild.name}\`\`\``, inline: true},
        { name: "Identifier", value: `\`\`\`elm\n${emoji.identifier}\`\`\``}
    )
    .setImage(emoji.url);
    logger(embed, config.TagID, extra, file);
})