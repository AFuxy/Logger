const { EmbedBuilder, WebhookClient, ActionRowBuilder, ButtonBuilder, Modal, TextInputBuilder, OAuth2Scopes, Partials, resolveColor, Client, Collection, GatewayIntentBits, SelectMenuBuilder, ActivityType, PermissionsBitField } = require("discord.js");
const client = global.client = new Client({ fetchAllMembers: true, intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildModeration, GatewayIntentBits.GuildEmojisAndStickers, GatewayIntentBits.GuildIntegrations, GatewayIntentBits.GuildWebhooks, GatewayIntentBits.GuildInvites, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildMessageTyping, GatewayIntentBits.MessageContent], scopes: [OAuth2Scopes.Bot, OAuth2Scopes.ApplicationsCommands], partials: [Partials.Message, Partials.Channel, Partials.Reaction, Partials.User, Partials.GuildMember, Partials.ThreadMember, Partials.GuildScheduledEvent], ws: { version: "10" } });
const config = global.config = require("./config");
// var events = require("./events");
const wait = require("timers/promises").setTimeout;

const invites = global.invites = new Collection();

const webhookClient = new WebhookClient({ url: config.webHookURL });

async function logger(embed, userID, extra, file) {
    embed.setColor("#e36464");
    embed.setTimestamp();
    embed.setFooter({ text: 'Inspire Tracker • v0.0.3-Alpha by Bedlam Group', iconURL: 'https://yt3.googleusercontent.com/tDyrkpVDd08Bc67PaUwci855_yiIHv6arCEie-mVdYieBQRkj2_mIhMdiGrSZ6D3PBZfoHso=s176-c-k-c0x00ffffff-no-rj' });

    if(userID !== config.TagID) return;

    webhookClient.send({
        content: extra,
        username: 'Logger',
        avatarURL: 'https://yt3.googleusercontent.com/tDyrkpVDd08Bc67PaUwci855_yiIHv6arCEie-mVdYieBQRkj2_mIhMdiGrSZ6D3PBZfoHso=s176-c-k-c0x00ffffff-no-rj',
        embeds: [embed],
        files: file ? [file] : []
      }).catch(console.error);
}

module.exports = { logger };

var normalizedPath = require("path").join(__dirname, "events");

require("fs").readdirSync(normalizedPath).forEach(function(file) {
  require("./events/" + file);
  console.log(file);
});

// //

client.on("ready", async () => {
  console.log(`bot online | ${client.user.tag} | Bedlam Logger`);
  client.user.setPresence({ activities: [{ name: config.presence, type: ActivityType.Custom }], status: "dnd" })
  client.users.fetch(config.TagID).then((user) => {
    console.log(`${user.tag} | Tagged!`)
  })
  await wait(1000);
  client.guilds.cache.forEach(async (guild) => {
    const firstInvites = await guild.invites.fetch();
    invites.set(guild.id, new Collection(firstInvites.map((invite) => [invite.code, invite.uses])));
    console.log(`Guild: ${guild.name} | Invites: ${invites.get(guild.id).size}`);
  });
})

client.login(config.token);