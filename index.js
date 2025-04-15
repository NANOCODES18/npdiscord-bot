const { Client } = require('discord.js-selfbot-v13');

const USER_TOKEN = 'dk'; // Replace with your pgersonal Discord user token
const CHANNEL_ID = '1342602'; // Replace with the ID of the channel where you want notifications
	

const client = new Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', (member) => {
    const serverName = member.guild.name;
    const userName = member.user.tag;

    console.log(`User ${userName} joined server: ${serverName}`);

    // Send notification to a specific channel
    const notificationChannel = client.channels.cache.get(CHANNEL_ID);
    if (notificationChannel) {
        notificationChannel.send(`Notification: User ${userName} joined the server: ${serverName}`).catch((err) => {
            console.error(`Could not send notification to the channel:`, err);
        });
    } else {
        console.error('Failed to fetch the notification channel.');
    }
});

client.login(USER_TOKEN).catch((err) => {
    console.error('Failed to login:', err);
});
