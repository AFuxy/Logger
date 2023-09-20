const { EmbedBuilder, AttachmentBuilder } = require("discord.js");
const { logger } = require("../index");

client.on("stickerDelete", (sticker) => {
    file = null;
    extra = null;
    const embed = new EmbedBuilder()
    .setTitle(" > Sticker Deleted")
    .addFields(
        { name: "Sticker", value: `\`\`\`elm\n${sticker.name}\`\`\``, inline: true},
        { name: "Guild" , value: `\`\`\`elm\n${sticker.guild.name}\`\`\``, inline: true},
        { name: "Tags" , value: `\`\`\`elm\n${sticker.tags}\`\`\``}
    )
    .setDescription(sticker.description);
    file = new AttachmentBuilder(sticker.url);
    logger(embed, config.TagID, extra, [file]);
})