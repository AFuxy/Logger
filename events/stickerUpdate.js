const { EmbedBuilder, AttachmentBuilder } = require("discord.js");
const { logger } = require("../index");

client.on("stickerUpdate", (oldSticker, newSticker) => {
    file = null;
    extra = null;
    const embed = new EmbedBuilder()
    .setTitle(" > Sticker Updated")
    if(oldSticker.name != newSticker.name) embed.addFields({ name: "Old Name", value: `\`\`\`diff\n- ${oldSticker.name}\`\`\``, inline: true}, { name: 'New Name', value: `\`\`\`diff\n+ ${newSticker.name}\`\`\``, inline: true});
    // if(oldSticker.description != newSticker.description) embed.addFields({ name: "Old Description", value: `\`\`\`diff\n- ${oldSticker.description}\`\`\``, inline: true}, { name: 'New Description', value: `\`\`\`diff\n+ ${newSticker.description}\`\`\``, inline: true});
    // if(oldSticker.name == newSticker.name && oldSticker.description == newSticker.description) return;

    logger(embed, config.TagID, extra, [file]);
})

// no idea why this is erroring, will try fix later