const { EmbedBuilder, AttachmentBuilder } = require("discord.js");
const { logger } = require("../index");

client.on("messageDelete", async(messageDelete) => {
    if (messageDelete.author == null || messageDelete.content == null || messageDelete.author.bot) return;
    file = null;
    extra = null;
    const embed = new EmbedBuilder()
    .setTitle(" > Message Deleted")
    .addFields(
        { name: 'Username', value: `\`\`\`elm\n${messageDelete.author.username}\`\`\``, inline: true},
        { name: 'Channel', value: `\`\`\`elm\n${messageDelete.channel.name}\`\`\``, inline: true}
    )
    if(messageDelete.content.length > 1011) {
        embed.setDescription(`\`\`\`diff\n- ${messageDelete.content}\`\`\``);
    }else{
        embed.addFields({ name: 'Message', value: `\`\`\`diff\n- ${messageDelete.content}\`\`\``});
    }
    if (messageDelete.attachments && messageDelete.attachments.size > 0) {
        file = new AttachmentBuilder(messageDelete.attachments.first().url);
        const messagAttach = messageDelete.attachments.first().contentType;
        if(messagAttach.startsWith("image")) embed.addFields({ name: 'Attachment', value: `[Image](${messageDelete.attachments.first().url})`});
        if(messagAttach.startsWith("audio")) embed.addFields({ name: 'Attachment', value: `[Audio](${messageDelete.attachments.first().url})`});
        if(messagAttach.startsWith("video")) embed.addFields({ name: "Attachment", value: `[Video](${messageDelete.attachments.first().url})`});
    }
    logger(embed, messageDelete.author.id, extra, file);
});