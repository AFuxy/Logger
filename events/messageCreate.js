const { EmbedBuilder, AttachmentBuilder } = require("discord.js");
const { logger } = require("../index");

client.on("messageCreate", (message) => {
	if(message.author.bot == true) return;
    file = null;
    extra = null;
    const embed = new EmbedBuilder()
    .setTitle(" > New Message")
    .addFields(
        { name: 'Username', value: `\`\`\`elm\n${message.author.username}\`\`\``, inline: true},
        { name: 'Channel', value: `\`\`\`elm\n${message.channel.name}\`\`\``, inline: true},
        { name: 'Message', value: `\`\`\`diff\n+ ${message.content}\`\`\``}
    )
    if (message.attachments && message.attachments.size > 0) {
        file = new AttachmentBuilder(message.attachments.first().url);
        const messagAttach = message.attachments.first().contentType;
        if(messagAttach.startsWith("image")) embed.addFields({ name: 'Attachment', value: `[Image](${message.attachments.first().url})`});
        if(messagAttach.startsWith("audio")) embed.addFields({ name: 'Attachment', value: `[Audio](${message.attachments.first().url})`});
        if(messagAttach.startsWith("video")) embed.addFields({ name: "Attachment", value: `[Video](${message.attachments.first().url})`});
    }

    logger(embed, message.author.id, extra, file);
});