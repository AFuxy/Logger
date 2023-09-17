const { EmbedBuilder, AttachmentBuilder } = require("discord.js");
const { logger } = require("../index");

client.on("userUpdate", (oldUser, newUser) => {
    file = null;
    extra = null;
    const embed = new EmbedBuilder()
    .setTitle(" > User Updated")
    .addFields({ name: "User", value: `\`\`\`elm\n${newUser.tag}\`\`\``});
    if(oldUser.tag != newUser.tag) embed.addFields({ name: "Old Username", value: `\`\`\`diff\n- ${oldUser.tag}\`\`\``, inline: true}, { name: 'New Username', value: `\`\`\`diff\n+ ${newUser.tag}\`\`\``, inline: true});
    if(oldUser.displayName != newUser.displayName) embed.addFields({ name: "Old Display Name", value: `\`\`\`diff\n- ${oldUser.displayName}\`\`\``, inline: true}, { name: 'New Display Name', value: `\`\`\`diff\n+ ${newUser.displayName}\`\`\``, inline: true});
    if(oldUser.avatarURL() != newUser.avatarURL()) {
        // file = new AttachmentBuilder(oldUser.avatarURL(), { name: "Old Avatar.jpeg" });
        file = new AttachmentBuilder(newUser.avatarURL(), { name: "New Avatar.jpeg" });
    }
    logger(embed, newUser.id, extra, file);
})