# How to use Logger Bot

## config file setup
1. using the `config_template.js` file 
```js
module.exports = {
    V: "0.0.3", //NO NOT TOUCH, THE BOT WILL NOT START!!!
    token: "", // the token of the bot
    presence: "Watching the fish swim.", // a silly presence
    webHookURL: "", // the URL of the webhook to send logs
    TagID: "", // the ID of the user you'd like to log, leave blank to log EVERYTHING!!
    webHookFULLURL: "", // this does not need to be used to use the bot
    TagGuildID: "", // also doesn't need to be used
    clientId: "", // the ID of the bot
    guildId: "", // the ID of the guild you want the commands to register too
}
```
make sure to input **ALL** required info or the bot will not start.  
2. rename the `config_template.js` file to `config.js`
3. run `npm install` to install the dependencies  .
4. run `npm run deploy` to deploy the bot commands to your server.  
5. run `npm start` to start the bot.  

## Creating Events

Creating events is simple all you need is to always start with  
```js
const { EmbedBuilder } = require("discord.js");  
const { logger } = require("../index");
```
and always send your info too  
```js
logger(embed, config.TagID, extra, file);
```

## Command Creation

Please note, you must always put commands into a sub folder so make sure to make yourself your own folder OR use the builtin folder  
then all you need to do is follow the `Discord.js` etiquette  
you can check that out here [Discord JS Guide](https://discordjs.guide/slash-commands/advanced-creation.html)