module.exports = {
    name: 'iplookup',
    description: 'IP LOOKUP USING API',
    execute(message, args) {
        discord = require('discord.js');
        snekfetch = require('snekfetch');
        if(!args[0]) return message.channel.send('No arguments');
        snekfetch.get(`http://ip-api.com/json/${args}` ).then(r => {
        const Geo = new discord.MessageEmbed()
        .setTimestamp()
        .setThumbnail(`https://i.ibb.co/vcs0p72/logo.png`)
        .setTitle(`IP Lookup Love Lyubite`)
        .setDescription(`Looked up
        Status: ${r.body.status}
        IP: ${args}
        City: ${r.body.city}
        Region: ${r.body.region}
        Country: ${r.body.country}
        Timezone: ${r.body.timezone}
        ISP: ${r.body.isp}
        ASN: ${r.body.as}`)
        if(r.body.status === 'fail') return message.channel.send('Not A Valid IP');
        message.channel.send(Geo);
        })
    }
}