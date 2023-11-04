const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const fs = require('node:fs');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('addtag')
        .setDescription('tag a user')
        .addUserOption(option => 
            option.setName('user')
            .setDescription('The user to tag')
            .setRequired(true))
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
    async execute(interaction) {
        const user = await client.users.fetch(interaction.options.getUser('user'));
        if(user == null){
            interaction.reply("user not found!");
            return;
        }
        // guild.bans.remove(user.id).then(() => {
        //     interaction.reply(user.tag + " unbanned! from: " + guild.name);
        // }).catch((err) => {
        //     interaction.reply("error: "+ err);
        // })
        // add tag player to tagged.json
        const tagged = fs.readFileSync("./tagged.json");
        let taggedParsed = JSON.parse(tagged);
        if(!taggedParsed.includes(user.id)){
            taggedParsed.push(user.id);
            fs.writeFileSync("./tagged.json", JSON.stringify(taggedParsed));
            interaction.reply("tagged: " + user.tag);
        }
    }
}