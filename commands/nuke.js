module.exports = {
    name: 'nuke',
    description: 'nukes up to 50 messages at a time',
    execute(message, args) {
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You need permissions to use this');
        if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
            return message.reply("Please specify a number above 0");
        }
        if (parseInt(args[0]) > 50) {
            message.channel.send('You can only delete under 50 messages at a time');
            deleteAmount = 50;
        } else {
            deleteAmount = parseInt(args[0]);
        }
        message.channel.bulkDelete(deleteAmount, true)
        .then(deleted => message.channel.send(`${deleted.size} messages were deleted.`))
        .catch(err => message.reply(`Error ${err}`));
    },
};