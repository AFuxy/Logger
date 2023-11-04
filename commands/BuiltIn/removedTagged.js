const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const fs = require('node:fs');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('untag')
        .setDescription('untag a user')
        .addUserOption(option => 
            option.setName('user')
            .setDescription('The user to untag')
            .setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(interaction) {
        const user = await client.users.fetch(interaction.options.getUser('user'));
        if(user == null){
            interaction.reply("user not found!");
            return;
        }
        // removed tag player from tagged.json
        const tagged = fs.readFileSync("./tagged.json");
        let taggedParsed = JSON.parse(tagged);
        if(taggedParsed.includes(user.id)){
            const index = taggedParsed.indexOf(user.id);
            taggedParsed.splice(index, 1);
            fs.writeFileSync("./tagged.json", JSON.stringify(taggedParsed));
            interaction.reply("untagged: " + user.tag);
        }
    }
}