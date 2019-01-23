const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
client.on("message", msg => {
if(msg.content.startsWith(prefix + "count")){
msg.channel.send(`${msg.guild.memberCount}`)
}
});
client.login(process.env.BOT_TOKEN);
