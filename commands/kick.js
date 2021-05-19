module.exports = {
    name: 'kick',
    description: 'kicks a user lol',
    execute(message, args) {
        if (!message.member.hasPermission('KICK_MEMBERS')) {
            message.channel.send(`${message.author} you cant kick`);
            console.log(`${message.author} tried using the kick command`);
            return;
        }
        const toKick = message.mentions.users.first();
        const memberkick = message.guild.members.resolve(toKick);
        if (!toKick) return message.channel.send('Who am i kicking??');
        let reason = args.join(" ");
        if (!args[1]) return message.channel.send('Use >kick for (reason)');
        if (toKick) {
            memberkick
            if (message.author === toKick) return message.channel.send('Are you really gonna try to kick yourself');
            if (memberkick.hasPermission('KICK_MEMBERS')) return message.channel.send(`${toKick} is protected ${message.author} in ${message.guild.name}`) && console.log(`${message.author} tried kicking ${toKick}`);
        }
        if (memberkick) {

            memberkick.kick(reason);
            message.channel.send(`${message.author} has kicked ${reason}`);
            console.log(`${message.author} has kicked ${toKick}`);
        }
        else {
            message.channel.send('Something has gone wrong');
            return;
            }
    }
}