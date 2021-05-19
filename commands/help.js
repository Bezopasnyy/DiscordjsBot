module.exports = {
    name: 'help',
    description: 'Help Command',
    execute(message, args) {
        const discord = require('discord.js');
        const embed = new discord.MessageEmbed()
        .setColor('#008000')
        .setTitle('Help')
        .setThumbnail(`https://tenor.com/view/bounce-wink-boobs-gif-14988779`)
        .setDescription('Displays all the commands')
        .addField('Prefix', '>')
        .addField('See If Bot Is Online', '>status')
        .addField('IP Lookup', '>iplookup')
        .addField('Nukes messages', '>nuke')
        .addField('Kick a member', '>kick')
        .addField('Ban a member', '>ban')
        .addField('Mute a memeber', '>mute')
        .addField('Unmute a member', '>unmute')
        .addField('Verify User', '>verify')
        .addField('See the changelog', '>changelog')
        .addField('Suggest Anything', '>suggestions')
        
    message.channel.send(embed);
    console.log(`${message.author} used help command`);
    }
}