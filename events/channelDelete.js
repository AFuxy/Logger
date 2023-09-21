const { EmbedBuilder } = require("discord.js");
const { logger } = require("../index");

client.on("channelDelete", (channel) => {
    file = null;
    extra = null;
    const embed = new EmbedBuilder()
    .setTitle(" > Channel Deleted")
    .addFields(
        { name: "Channel", value: `\`\`\`elm\n${channel.name}\`\`\``, inline: true},
        { name: "ID" , value: `\`\`\`elm\n${channel.id}\`\`\``, inline: true},
        { name: " ", value: ' '},
        { name: "Guild", value: `\`\`\`elm\n${channel.guild.name}\`\`\``, inline: true},
        { name: "Type", value: `\`\`\`elm\n${channel.type}\`\`\``, inline: true}
    );
    logger(embed, config.TagID, extra, file);
})