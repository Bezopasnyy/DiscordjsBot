module.exports = {
    name: 'unmute',
    description: 'can unmute a user',
    execute(message, args) {
        const discord = require('discord.js');
        if(!message.member.hasPermission('MUTE_MEMBERS')) return message.channel.send('You Dont Have Permission');
        let toUnmute = message.mentions.users.first();
        let unmuteMember = message.guild.members.resolve(toUnmute);
        let MuteRole = message.guild.roles.cache.find(role => role.name === "Muted");
        if(!args[0]) return message.channel.send('Who Am Unmuting Tho');
        if(unmuteMember) {
            unmuteMember.roles.remove(MuteRole);
            let unmuteCommandEmbed = new discord.MessageEmbed()
            .setAuthor('Bezo')
            .addField(`Unmuted`,`${unmuteMember}`)
            .addField(`Unmuted Because`,`Mod Used Unmute Command`)
            .setColor('#ff1100')
        message.channel.send(unmuteCommandEmbed);
        }
    }
}