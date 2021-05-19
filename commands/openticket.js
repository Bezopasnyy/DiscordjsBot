module.exports = {
    name: 'openticket',
    descriptions: 'opens a ticket to get support',
    execute(message, args) {
        if(args[0]) return message.channel.send('YOU DONT NEED TO ADD ANY ARGUMENTS JUST DO THE COMMAND BY ITSELF LOL')
        
		if(message.guild.channels.cache.find(channel => channel.name === `support-${message.author}`)) return message.channel.send('A TICKET IS STILL OPEN, PLEASE CLOSE IT! IF YOU CANT SEE THE TICKET CONTACT AN ADMIN');

        message.guild.channels.create(`support-${message.author}`, {
            type: 'text',
            permissionOverwrites: [
                {
                    id: message.author.id,
                    allow: ['VIEW_CHANNEL'],
                },
                {
                    id: message.guild.roles.everyone,
                    deny: ['VIEW_CHANNEL']
                },
            ],
        })

        message.channel.send(`You have created a new ticket please wait for an mod to respond they will allow you to send messages once its been reviewed`);

    }
}