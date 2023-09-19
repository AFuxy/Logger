const { EmbedBuilder, AttachmentBuilder } = require("discord.js");
const { logger, fulllogs } = require("../index");

client.on("messageCreate", (message) => {
	if(message.author.bot == true) return;
    file = null;
    extra = null;
    const embed = new EmbedBuilder()
    .setTitle(" > New Message")
    .addFields(
        { name: 'Username', value: `\`\`\`elm\n${message.author.username}\`\`\``, inline: true},
        { name: 'Channel', value: `\`\`\`elm\n${message.channel.name}\`\`\``, inline: true}
    )
    if(message.content.length > 1023) {
        embed.setDescription(`\`\`\`diff\n+ ${message.content}\`\`\``);
    }else{
        embed.addFields({ name: 'Message', value: `\`\`\`diff\n+ ${message.content}\`\`\``});
    }
    if (message.attachments && message.attachments.size > 0) {
        const messagAttach = message.attachments.first().contentType;
        if(messagAttach.startsWith("image")) embed.addFields({ name: 'Attachment', value: `[Image](${message.attachments.first().url})`});
        if(messagAttach.startsWith("audio")) embed.addFields({ name: 'Attachment', value: `[Audio](${message.attachments.first().url})`});
        if(messagAttach.startsWith("video")) embed.addFields({ name: "Attachment", value: `[Video](${message.attachments.first().url})`});
    }

    if (message.attachments.size > 0) {
        file = [];
        message.attachments.forEach(attachment => {
            file.push(new AttachmentBuilder(attachment.url));
        })
    }
    logger(embed, message.author.id, extra, file);
    fulllogs(message.guild.id, `${message.author.username} | ${message.channel.name}`, message.author.avatarURL(), message.content, file);
});