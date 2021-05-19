module.exports = {
    name: 'changelog',
    description: 'shows changelog for bot',
    execute(message, args) {
        const discord = require('discord.js');
        const changeembed = new discord.MessageEmbed()
        .setColor('#DEEDCF')
        .setThumbnail('https://i.ibb.co/vcs0p72/logo.png')
        .setTitle('Bezo Bot Changelog')
        .setDescription(`Version 0.1
        [+] Added Help Command
        [+] Added Kick Command
        [+] Added Ban Command
        [+] Added Mute Command
        [+] Added IP Lookup Command
        [+] Added Nuke Command

        Version 0.2
        [+] Added Verfication Command
        [+] Added Anti Spam
        [+] Added Timed Mute
        [+] Added Unmute Command
        
        Todo 
        [-] Add IP Pinger If Possible
        [-] Auto Remove Role If Abusing Staff
        And More`);

    message.channel.send(changeembed);
    }
}