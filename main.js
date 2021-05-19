const discord = require('discord.js');
const client = new discord.Client();
const prefix = '>';
const fs = require('fs');
client.commands = new discord.Collection();
const { token } = require('./data.json');
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));


for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

var Welcome = (function() { /*
░██╗░░░░░░░██╗███████╗██╗░░░░░░█████╗░░█████╗░███╗░░░███╗███████╗
░██║░░██╗░░██║██╔════╝██║░░░░░██╔══██╗██╔══██╗████╗░████║██╔════╝
░╚██╗████╗██╔╝█████╗░░██║░░░░░██║░░╚═╝██║░░██║██╔████╔██║█████╗░░
░░████╔═████║░██╔══╝░░██║░░░░░██║░░██╗██║░░██║██║╚██╔╝██║██╔══╝░░
░░╚██╔╝░╚██╔╝░███████╗███████╗╚█████╔╝╚█████╔╝██║░╚═╝░██║███████╗
░░░╚═╝░░░╚═╝░░╚══════╝╚══════╝░╚════╝░░╚════╝░╚═╝░░░░░╚═╝╚══════╝
*/}).toString().split('\n').slice(1, -1).join('\n');

var LyuV2 = (function(){ /*
██╗░░░░░██╗░░░██╗██╗░░░██╗██████╗░██╗████████╗███████╗██╗░░░██╗██████╗░
██║░░░░░╚██╗░██╔╝██║░░░██║██╔══██╗██║╚══██╔══╝██╔════╝██║░░░██║╚════██╗
██║░░░░░░╚████╔╝░██║░░░██║██████╦╝██║░░░██║░░░█████╗░░╚██╗░██╔╝░░███╔═╝
██║░░░░░░░╚██╔╝░░██║░░░██║██╔══██╗██║░░░██║░░░██╔══╝░░░╚████╔╝░██╔══╝░░
███████╗░░░██║░░░╚██████╔╝██████╦╝██║░░░██║░░░███████╗░░╚██╔╝░░███████╗
╚══════╝░░░╚═╝░░░░╚═════╝░╚═════╝░╚═╝░░░╚═╝░░░╚══════╝░░░╚═╝░░░╚══════╝   
  */}).toString().split('\n').slice(1, -1).join('\n');


client.on("ready", () => {
    console.log(`${Welcome}`);
    console.log(`${LyuV2}`);
    console.log(" ");
        console.log(`        ${client.user.tag} IS NOW ONLINE`);
            client.user.setActivity('Bezopasnyy Bot', {
            type: 'PLAYING'
    })

    console.log(" ");
});


client.on('message', message => {
    if(message.author.bot) return;
    const CheckIf = message.guild.me.roles.cache.find(role => role.name === "Bit");
    if (!CheckIf) return;
    client.emit('checkMessage', message);
    
    const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

    if(message.channel.id === '843071964775579648') return;
    if (message.channel.type === 'dm') return message.channel.send(`Please Dont Message Me, Ok? ${message.author}`);
    if(message.content.startsWith("<@!815054184339472394>")) return message.channel.send("My prefix is >");
    if(!message.content.startsWith(prefix)) return;

    if(message.content.length >= 200) {
        if(message.member.hasPermission('ADMINISTRATOR')) return; 
        message.author.send('Your message ');
        message.author.send(message);
        message.author.send('is too long please shortner it');
        message.channel.send('Your message is too long, please shortern it');
        message.delete();
        console.log(`${message.author} tried sending a message over 200 characters`)
    }

    try {
        client.commands.get(command).execute(message, args);
    } catch (err) {
        console.log(err);
    }
});


client.login(token);