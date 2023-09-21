const { EmbedBuilder } = require("discord.js");
const { logger } = require("../index");

client.on("channelUpdate", (oldChannel, newChannel) => {
    file = null;
    extra = null;
    const embed = new EmbedBuilder()
    .setTitle(" > Channel Updated")
    .addFields({ name: 'Name', value: `\`\`\`elm\n${newChannel.name}\`\`\``})
    if(oldChannel.name != newChannel.name) embed.addFields({ name: 'Old Name', value: `\`\`\`diff\n- ${oldChannel.name}\`\`\``, inline: true}, { name: 'New Name', value: `\`\`\`diff\n+ ${newChannel.name}\`\`\``, inline: true});
    else return;
    logger(embed, config.TagID, extra, file);
})