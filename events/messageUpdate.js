const { EmbedBuilder } = require("discord.js");
const { logger } = require("../index");

client.on("messageUpdate", (oldContent, newContent) => {
    if(newContent.author.bot == true) return;
    file = null;
    extra = null;
    const embed = new EmbedBuilder()
    .setTitle(" > Message Edited")
    .addFields(
        { name: 'Username', value: `\`\`\`elm\n${newContent.author.username}\`\`\``, inline: true},
        { name: 'Channel', value: `\`\`\`elm\n${newContent.channel.name}\`\`\``, inline: true},
        { name: 'Old Message', value: `\`\`\`diff\n- ${oldContent}\`\`\``},
        { name: 'New Message', value: `\`\`\`diff\n+ ${newContent.content}\`\`\``, inline: true}
    )
    logger(embed, newContent.member.user.id, extra, file)
});