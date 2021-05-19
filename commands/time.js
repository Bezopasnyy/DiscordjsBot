module.exports = {
    name: 'time',
    description: 'gets the current time',
    execute(message, args) {
        var gettime = new Date();
        if(gettime.getHours() >= 12) {
            message.channel.send("The Current Time Is " + gettime.getHours() + ":"  + gettime.getMinutes() + ":" + gettime.getSeconds() + " PM");
        } else {
        message.channel.send("The Current Time Is " + gettime.getHours() + ":"  + gettime.getMinutes() + ":" + gettime.getSeconds() + " AM");
            }
    }
}