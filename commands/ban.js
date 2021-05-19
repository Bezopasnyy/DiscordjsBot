module.exports = {
    name: 'ban',
    description: 'it bans a user',
    execute(message, args) {
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send('You Cant Ban People') && console.log(`${message.author} tried using the ban command`);
        const toBan = message.mentions.users.first();
        const memberban = message.guild.members.resolve(toBan);
        let reason = args.join(" ");
        if (!toBan) return message.channel.send('Who am i banning');
        if (!args[1]) return message.channel.send('Why are you banning');
        if (toBan) {
            memberban
            if (message.author === toBan) return message.channel.send('You cant ban yourself');
            if (memberban.hasPermission('BAN_MEMBERS')) return message.channel.send(`You cant ban ${toBan} they are protected in ${message.guild.name}`);
        }
        if (memberban) {
            memberban.ban({ days: 7, reason: reason })
            message.channel.send(`${message.author} has banned ${reason}`)
            console.log(`${memberban} has been banned by ${message.author}`)
        }
        else {
            message.channel.send('Unknown error')
        }
    }
}