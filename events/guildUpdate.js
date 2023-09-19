const { EmbedBuilder } = require("discord.js");
const { logger } = require("../index");

client.on("guildUpdate", (oldGuild, newGuild) => {
    file = null;
    extra = null;
    const embed = new EmbedBuilder()
    .setTitle(" > Guild Updated")
    .addFields({ name: "Guild", value: `\`\`\`elm\n${newGuild.name}\`\`\``});
    if(oldGuild.name != newGuild.name) embed.addFields({ name: "Old Name", value: `\`\`\`diff\n- ${oldGuild.name}\`\`\``, inline: true}, { name: 'New Name', value: `\`\`\`diff\n+ ${newGuild.name}\`\`\``, inline: true});
    if(oldGuild.iconURL() != newGuild.iconURL()) file = new AttachmentBuilder(newGuild.iconURL(), { name: "New Icon.jpeg" });
    if(oldGuild.name == newGuild.name && oldGuild.iconURL() == newGuild.iconURL()) embed.addFields({ name: "Whoops", value: "something changed but i could not tell you what!!!", inline: true});
    logger(embed, config.TagID, extra, file);
});