module.exports = {
    name: 'mute',
    description: 'timed mute',
    execute(message, args) {
        const discord = require('discord.js');
        if(!message.member.hasPermission('MUTE_MEMBERS')) return message.channel.send('You Do Not Have Permission To Mute Members');
        if (!args[0]) return message.channel.send('Who am i muting')
        const toMute = message.mentions.users.first();
        const MuteMember = message.guild.members.resolve(toMute);
        const MuteRole = message.guild.roles.cache.find(role => role.name === "Muted");
        if(!MuteRole) return message.channel.send('I Cant Find The Mute Role');
        let timeformute = args[1];
        let timemute = timeformute * 60000; 
        if(!timemute) return message.channel.send('How long for lol');
        if(timeformute >= 28800) return message.channel.send('Max Time Is 28800 Minutes This is To Prevent Issues');
        if(timemute <= 1) return message.channel.send('Time Needs To Be Over A Minute');
        if(toMute === message.author) return message.channel.send('You Cant Mute Yourself');
        if(MuteMember.hasPermission('MUTE_MEMBERS')) return message.channel.send(`${MuteMember} is protected in ${message.guild.name}`);
        if(!args[2]) return args[2] = 'm';
        if(MuteMember.roles.cache.has(MuteRole)) return message.channel.send(`${MuteMember} is already muted`);
        if (MuteMember) {
            MuteMember.roles.add(MuteRole).then( () => {
                let muteEmbed = new discord.MessageEmbed()
                  .setAuthor(`${message.author.username}`)
                  .addField('Muted',`${MuteMember}`)
                  .addField(`Muted For`,`${timeformute} minutes`)
                  .setColor('#ff1100')
                message.channel.send(muteEmbed);
                setTimeout( () => {
                  MuteMember.roles.remove(MuteRole);
                  let unmutedEmbed = new discord.MessageEmbed()
                    .setAuthor(`${message.author.username}`)
                    .addField(`Unmuted`,`${MuteMember}`)
                    .addField(`Unmuted Because`,`Times Up`)
                    .setColor('#ff1100')
                message.channel.send(unmutedEmbed)
                    }, timemute);
                 })
              }
    }
}