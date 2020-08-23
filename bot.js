const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');
const {Client , Attachment} = require('discord.js');

//logging in as bot
client.on('ready', () => 
{
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(auth.token);

//responds to commands and messages
client.on('message', msg => 
{
    if(msg.content.includes('binch') || msg.content.includes('bich')) //calls you a bich
    {
        msg.reply ('no u');
    }

    if(msg.content === '!george')
    {
        msg.channel.send 
        (
        {embed: 
            {
                color: 3447003,
                author: 
            {
                name: client.user.username,
                icon_url: client.user.avatarURL
            },
                title: "This is bathroom George",
                url: "http://bathroomgeorge.space",
                description: "Bathroom George",
             }
        }
        );
    }

    // incomplete
    // if(msg.content === '!memes') //sends memes
    // {
    //     msg.channel.send('Here are some dank memes!');
    //     var memes = Math.floor((Math.random() * 10) + 1);
        
    //     switch (memes)
    //     {
    //         case 1: 
    //             const Attachment = new Attachment ('')

    //     }
    // }

    if(msg.content === '!help')
    {
        msg.reply('Type !cmd to see a list of my commands');
    }

    if(msg.content.includes('water')) //stay hydrated
    {
        msg.react('💦');
        msg.channel.send (':sweat_drops: STAY HYDRATED :sweat_drops:')
    }
    
    if(msg.content.includes ("🍻") || msg.content === '!cheers') //cheers function
    {
        msg.react('🍻');
        msg.channel.send(':beers:');
    }
    
    if(msg.content === '!cmd') //displays a list of commands
    {
        msg.reply('Here are a list of my commands: \n!speak - I say things \n!marco - polo \n!facts - I give random penguin facts \n!cheers: 🍻');
    }
    
    if(msg.content === '!speak') //introduces itself
    {
        msg.channel.send('Hello I am Penguin Bot! I do nothing as of right now');
    }
    
    if(msg.content === '!marco') //marco polo test
    {
        msg.reply('polo');
    }
    
    if(msg.content === '🐧' || msg.content === '!facts') //penguin facts 
    {
        var facts = Math.floor((Math.random() * 10) + 1); //generates a random number from 1-10 

        switch(facts) //random penguin facts 
        {
            case 1: 
                msg.channel.send('Penguins are flightless birds :penguin:');
                break;
            case 2:
                msg.channel.send('While other birds have wings for flying, penguins have adapted flippers to help them swim in the water :penguin:');
                break;
            case 3:
                msg.channel.send('Most penguins live in the Southern Hemisphere :penguin:');
                break; 
            case 4:
                msg.channel.send('No penguins live at the North Pole :penguin:');
                break;   
            case 5:
                msg.channel.send('Penguins can drink sea water :penguin:');
                break;  
            case 6:
                msg.channel.send('Penguins spend around half their time in water and the other half on land :penguin:');
                break;    
            case 7:
                msg.channel.send('Emperor Penguins can stay underwater for around 20 minutes at a time :penguin:');
                break; 
            case 8:
                msg.channel.send('Penguins eat a range of fish and other sealife that they catch underwater :penguin:');
                break; 
            case 9:
                msg.channel.send('Penguins in Antarctica have no land based predators :penguin:');
                break;     
            case 10:
                msg.channel.send('Crested penguins have yellow crests, as well as red bills and eyes :penguin:');
                break;          
        }
    }
});