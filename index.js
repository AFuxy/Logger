const { EmbedBuilder, WebhookClient, ActionRowBuilder, ButtonBuilder, Events, Modal, TextInputBuilder, OAuth2Scopes, Partials, resolveColor, Client, Collection, GatewayIntentBits, SelectMenuBuilder, ActivityType, PermissionsBitField, AttachmentBuilder } = require("discord.js");
const { exit } = require("process");
const client = global.client = new Client({ fetchAllMembers: true, intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildModeration, GatewayIntentBits.GuildEmojisAndStickers, GatewayIntentBits.GuildIntegrations, GatewayIntentBits.GuildWebhooks, GatewayIntentBits.GuildInvites, GatewayIntentBits.GuildVoiceStates, GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildMessageTyping, GatewayIntentBits.MessageContent], scopes: [OAuth2Scopes.Bot, OAuth2Scopes.ApplicationsCommands], partials: [Partials.Message, Partials.Channel, Partials.Reaction, Partials.User, Partials.GuildMember, Partials.ThreadMember, Partials.GuildScheduledEvent], ws: { version: "10" } });
const config = global.config = require("./config");
// var events = require("./events");
const wait = require("timers/promises").setTimeout;

// START | To be moved!

if(config.V !== "0.0.3"){
  console.error("Config version does not match, please update your config.js file");
  exit();
}
if(config.token == null || config.token == ""){
  console.error("The token cannot be left as null, please update your config.js file");
  exit();
}
if(config.webHookURL == null || config.webHookURL == ""){
  console.error("The webHookURL cannot be left as null, please update your config.js file");
  exit();
}
if(config.TagID == null || config.TagID == ""){
  console.error("The TagID cannot be left as null, please update your config.js file");
  exit();
}
if(config.clientId == null || config.clientId == ""){
  console.error("The clientId cannot be left as null, please update your config.js file");
  exit();
}
if(config.guildId == null || config.guildId == ""){
  console.error("Currently the guildId cannot be left as null, please update your config.js file");
  exit();
}

// END

const invites = global.invites = new Collection();
client.commands = new Collection();

const webhookClient = new WebhookClient({ url: config.webHookURL });

if(config.webHookFULLURL){
  webhookClientFULL = new WebhookClient({ url: config.webHookFULLURL });
  console.log("Extra WebHook is connected");
}

async function logger(embed, userID, extra, file = null) {
    embed.setColor("#e36464");
    embed.setTimestamp();
    embed.setFooter({ text: 'Logger • v1.9.30 by Bedlam Group', iconURL: 'https://yt3.googleusercontent.com/tDyrkpVDd08Bc67PaUwci855_yiIHv6arCEie-mVdYieBQRkj2_mIhMdiGrSZ6D3PBZfoHso=s176-c-k-c0x00ffffff-no-rj' });

    if(userID !== config.TagID) return;

    webhookClient.send({
        content: extra,
        username: 'Logger',
        avatarURL: 'https://yt3.googleusercontent.com/tDyrkpVDd08Bc67PaUwci855_yiIHv6arCEie-mVdYieBQRkj2_mIhMdiGrSZ6D3PBZfoHso=s176-c-k-c0x00ffffff-no-rj',
        embeds: [embed],
        files: file ? file : []
      }).catch(console.error);
}

async function fulllogs(guildID, username, icon, message, file = null) {
  if(guildID !== config.TagGuildID) return;

  webhookClientFULL.send({
    username: username,
    avatarURL: icon,
    content: message ? message : "Probably a system message.",
    files: file ? file : []
  })
}

module.exports = { logger, fulllogs };

var normalizedPathEvents = require("path").join(__dirname, "events");
var foldersPath = require("path").join(__dirname, "commands");

require("fs").readdirSync(normalizedPathEvents).forEach(function(file) {
  require("./events/" + file);
  console.log("Events: " + file);
});

// require("fs").readdirSync(normalizedPathCommands).forEach(function(file) {
//   require("./commands/" + file);
//   console.log("Commands: " + file);
// });

const commandFolders = require("fs").readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = require("path").join(foldersPath, folder);
	const commandFiles = require("fs").readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = require("path").join(commandsPath, file);
		const command = require(filePath);
		// Set a new item in the Collection with the key as the command name and the value as the exported module
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
      console.log("Commands: " + file);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}

// //

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);

	if (!command) {
		console.error(`No command matching ${interaction.commandName} was found.`);
		return;
	}

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		if (interaction.replied || interaction.deferred) {
			await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
		} else {
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	}
});

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