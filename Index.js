const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('The bot is online!');
});

// Prefix can be changed depending on bots
const prefix = '!';
const botver = '1.0.1';

client.on('message', message => { 
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

// bot version change eveytime bot is edited

	if (command === 'botver') {
		message.channel.send('This bot is on version ' + botver); 
    };
    
client.user.setActivity('Shit programming', { type: 'WATCHING' });

// other commands...


// server info cmd
const Server = message.author
    if(command === 'serverinfo') {
        const infoEmbed = new Discord.MessageEmbed()
            .setColor('#fce404')
            .setTitle('Server info!')
            .setDescription('Just a little bit of server info!')
            .setImage("")

            .addFields(
            { name: 'Server version', value: "This server is on version 1.0.1" },
            { name:'Bot version', value: "This bot is on version " + botver},
        )
            .setFooter("")
    message.channel.send(infoEmbed);
    };  


// special thanks!

const thanks = message.author
    if(command === 'thx') {
        const thxEmbed = new Discord.MessageEmbed()
            .setColor('#fce404')
            .setTitle('Special thanks to!')
            .setDescription('People that helped in someway')
            .setImage('')

            .addFields(
/*            { name: '', value: "" },
            { name: '', value: "" },
            { name: '', value: "" },
            { name: '', value: "" },
            { name: '', value: "" }
*/
        )
            .setFooter("")
    message.channel.send(thxEmbed);
    };

    

// staff info cmd

const Staff = message.author
    if(command === 'staff') {
        const staffEmbed = new Discord.MessageEmbed()
            .setColor('#fce404')
            .setTitle('List of staff')
            .setDescription('Staff on the server!')
            .setImage('')

            .addFields(
/*            { name: '', value: "" },
            { name:'', value: "" },
            { name: '', value: "" },
            { name: '', value: "" },
            { name: '', value: "" },
            { name: '', value: "" },
            { name: '', value: "" }
*/
            )
            .setFooter("")
    message.channel.send(staffEmbed);
    };

//rules cmd

const rules = message.author
    if (command === 'rules') {
        const rulesEmbed = new Discord.MessageEmbed()
            .setColor('#ff00ff')
            .setTitle('Rules!')
            .setDescription('Read the rules')
            .setImage('')  
            .addFields(
            { name: 'Rule 1', value: "No spamming in text channels. (apart from spam channels)" },
            { name: 'Rule 2', value: "Do not mention @everyone or @here." },
            { name: 'Rule 3', value: "Follow the community guidelines given by Discord https://discordapp.com/guidelines" },
            { name: 'Rule 4', value: "Don’t promote/sell anything in the server." },
            { name: 'Rule 5', value: "Do not spam several channels with the same post." },
            { name: 'Rule 6', value: "Don’t talk about religion or politics." },
            { name: 'Rule 7', value: "Don't earrape!" },
            { name: 'Rule 8', value: "Only play music in the music channels." },
            { name: 'Rule 9', value: "Don’t queue big playlists." },
            { name: 'Rule 10', value: "Do NOT be racist in the server." },
            { name: 'Rule 11', value: "Keep channels topical. (use the right channels)" },
            { name: 'Rule 12', value: "Don’t be sexist, say anything homophobic, etc." },
            { name: 'Rule 13', value: "No begging for anything." },
            { name: 'Rule 14', value: "Please avoid staff when there providing support." },
            { name: 'Rule 15', value: "Listen to staff." },
            { name: 'Rule 16', value: "Use common sense." },
            )

            .setFooter('')
    message.channel.send(rulesEmbed);
    };

        

// games help cmd

const helpfun = message.author
    if(command === 'helpfun') {
        const helpfun = new Discord.MessageEmbed()
            .setColor('#fce404')
            .setTitle('Games help!')    
            .setDescription('List of cmds')
            .setImage('')

            .addFields(
/*            { name: '', value: ""},

            { name: '', value: ""},
            { name: '', value: ""},
            { name: '', value: ""}
*/
        )
            .setFooter("")
    message.channel.send(helpfun);
};


// help cmd

const Help = message.author
    if(command === 'help') {
        const helpEmbed = new Discord.MessageEmbed()
            .setColor('#fce404')
            .setTitle('cmd help!')
            .setDescription('List of cmds')
            .setImage('')

            .addFields(
            { name: '!help', value: "Displays list of cmds" },
            { name: '!help2', value: "Show the second help page"},
            { name: '!helpfun', value: "Games and other stuff"},
            { name: '!rules', value: "The server rules! Read them" },
            { name: '!bothelp', value: "Bot info" },
        )
            .setFooter("")
    message.channel.send(helpEmbed);
    };

// help2 cmd

const help2 = message.author
    if(command === 'help2') {
        const help2Embed = new Discord.MessageEmbed()
            .setColor('#fce404')
            .setTitle('cmd help!')
            .setDescription('List of cmds')
            .setImage('')

            .addFields(
            { name: '!help', value: "Displays list of cmds" },
            { name: '!thx', value: "Special thanks to anyone that has done anything to help make this bot!"},
            { name: '!botver', value: "Shows the bot version"},
			{ name: '!serverinfo', value: "Displays a bit of server info" },
            { name: '!staff', value: "Displays staff" },
        )
            .setFooter("")
    message.channel.send(help2Embed);
    };




// Bot help
// All bots here always stay and get used depending on whats in the server, Use comments!
const bothelp = message.author
    if(command === 'bothelp') {
        const bothelpEmbed = new Discord.MessageEmbed()
            .setColor('#fce404')
            .setTitle('bot cmds help!')
            .setDescription('List of cmds')
            .setImage('')

            .addFields(
//                { name: 'prefix: [~] SFTT [CUSTOM BOTS]', value: "Custom made by chintzyaxis7, for everything"},
//                { name: 'prefix: [~~] SFTT Canary [CUSTOM BOTS]', value: "Custom made by chintzyaxis7, To test new features for the SFTT bot"},
//                { name: 'prefix: [!] water bottle [CUSTOM BOTS]', value: "Custom made by Jayke, for flipping bottles"},
//                { name: 'prefix: [%] Virtual Fisher Bot [VERIFIED BOT]', value: "Prefix %, Use cmd %help to get started" }, 
//                { name: 'prefix: [] Ticket Tool [VERIFIED BOT]', value: "Just a tool to keep support super privet"},
//                { name: 'prefix: []Simple Poll [VERIFIED BOT]', value: "Simple bot for polls (staff only)"},
//                { name: 'prefix: [] ServerStats [BOT]', value: "Shows how many people are in the server and some other things"},
//                { name: 'prefix: [!] Rythm [VERIFIED BOT]', value: "Music bot"},
//                { name: 'prefix: [owo] OwO [VERIFIED BOT]', value: "What is this?????"},
//                { name: 'prefix: [] ModMail [VERIFIED BOT]', value: "Message staff using this bot"},
//                { name: 'prefix: [!] MEE6 [VERIFIED BOT]', value: "Its everything (and we have premium)"},
//                { name: 'prefix: [] MarriageBot [VERIFIED BOT]', value: "Marry people"},
//                { name: 'prefix: [?v, ?c] Dyno [VERIFIED BOT]', value: "Used for the hidden channels use ?v and ?c"},
//                { name: 'prefix: [] Discordservers.me [BOT]', value: "Advertising"},
//                { name: 'prefix: [] Discord Server List [BOT]', value: "Advertising"},
//                { name: 'prefix: [!d bump] DISBOARD [VERIFIED BOT]', value: "Advertising"},
//                { name: 'prefix: [] Discord.Me [VERIFIED BOT]', value: "Advertising"},
//                { name: 'prefix: [pls] Dank Memer [VERIFIED BOT]', value: "Memezzzzzzzzzzzzzzzzzz"},
//                { name: 'prefix: [] counting [VERIFIED BOT]', value: "Counting thats it"},
//                { name: 'prefix: [] Birthday Bot [VERIFIED BOT]', value: "For birthdays"}
    

        )
            .setFooter("")
    message.channel.send(bothelpEmbed);
    };

});
client.login('');

// Made by chintzyaxis7
// Discord: Chintzyaxis7#8875