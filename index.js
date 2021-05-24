const discord = require("discord.js");
const botConfig = require("./botconfig.json");
const fetch = require(`node-fetch`);

const client = new discord.Client();
client.login(botConfig.token);
 
client.on("ready", async () => {
 
    console.log(`${client.user.username} is online.`);
 
    client.user.setActivity("Guus", { type: "LISTENING" });
 
});

client.on("message", async message => {
 
    if(message.author.bot) return;
 
    if(message.channel.type === "dm") return;
 
    var prefix = botConfig.prefix;
 
    var messageArray = message.content.split(" ");
 
    var command = messageArray[0];
 
    if (command === `${prefix}cmds`){
            var embed = new discord.MessageEmbed()
            .setTitle("commands")
            .setDescription("alle commandos van guus")
            .addField("1.", "guus.hallo")
            .addField("2.", "guus.favoeten")
            .addField("3.", "guus.kay")
            .addField("4.", "guus.meme")
            .addField("5.", "guus.tagmeme")
            .addField("6.", "guus.prn")
            .addField("7.", "guus.tagprn")
            .setColor(`RANDOM`);

            message.channel.send("<@"+ message.author.id + ">" + "vroeg om alle commands");
            message.channel.send(embed);
        }
        
    
    
    if (command === `${prefix}hallo`) {
 
        return message.channel.send("Hallo!!");
    
    }

    if (command === `${prefix}favoeten`) {
        return message.channel.send("Kaas");
    }
    if (command === `${prefix}kay`) {
 
        var serverEmbed = new discord.MessageEmbed()
            .setTitle("ei kay")
            .setDescription("Zet de beschrijving")
            .setColor("#kleur")
            .addField("Bot naam", client.user.username)
            .addField("Je bent deze server gejoind op", message.member.joinedAt)
            .addField("Totaal memebers", message.guild.memberCount);
 
        return message.channel.send(serverEmbed);
    }
    if (command === `${prefix}meme`){
        fetch(`https://www.reddit.com/r/memes/random/.json`).then(resp => resp.json()).then(respOmgevorm => {
            var permaLink = respOmgevorm[0].data.children[0].data.permaLink;
            var memeUrl = `https://www.reddit.com${permaLink}`;
            var memeFoto = respOmgevorm[0].data.children[0].data.url;
            var memeTitle = respOmgevorm[0].data.children[0].data.title;

            var embed = new discord.MessageEmbed()
            .setTitle(`${memeTitle}`)
            .setURL(`${memeUrl}`)
            .setImage(`${memeFoto}`)
            .setColor(`RANDOM`);

            message.channel.send(embed);
        })
        
    }
    if (command === `${prefix}prn`){
        fetch(`https://www.reddit.com/r/nsfw/random/.json`).then(resp => resp.json()).then(respOmgevorm => {
            var permaLink = respOmgevorm[0].data.children[0].data.permaLink;
            var memeUrl = `https://www.reddit.com${permaLink}`;
            var memeFoto = respOmgevorm[0].data.children[0].data.url;
            var memeTitle = respOmgevorm[0].data.children[0].data.title;

            var embed = new discord.MessageEmbed()
            .setTitle(`${memeTitle}`)
            .setURL(`${memeUrl}`)
            .setImage(`${memeFoto}`)
            .setColor(`RANDOM`);

            message.channel.send(embed);
        })
        
    }
    if (command === `${prefix}tagmeme`){
        fetch(`https://www.reddit.com/r/meme/random/.json`).then(resp => resp.json()).then(respOmgevorm => {
            var permaLink = respOmgevorm[0].data.children[0].data.permaLink;
            var memeUrl = `https://www.reddit.com${permaLink}`;
            var memeFoto = respOmgevorm[0].data.children[0].data.url;
            var memeTitle = respOmgevorm[0].data.children[0].data.title;

            var embed = new discord.MessageEmbed()
            .setTitle(`${memeTitle}`)
            .setURL(`${memeUrl}`)
            .setImage(`${memeFoto}`)
            .setColor(`RANDOM`);

            message.channel.send("<@"+message.author.id+ ">");
            message.channel.send(embed);
        })
        
    }
    if (command === `${prefix}tagprn`){
        fetch(`https://www.reddit.com/r/nsfw/random/.json`).then(resp => resp.json()).then(respOmgevorm => {
            var permaLink = respOmgevorm[0].data.children[0].data.permaLink;
            var memeUrl = `https://www.reddit.com${permaLink}`;
            var memeFoto = respOmgevorm[0].data.children[0].data.url;
            var memeTitle = respOmgevorm[0].data.children[0].data.title;

            var embed = new discord.MessageEmbed()
            .setTitle(`${memeTitle}`)
            .setURL(`${memeUrl}`)
            .setImage(`${memeFoto}`)
            .setColor(`RANDOM`);

            message.channel.send("<@"+message.author.id+ ">");
            message.channel.send(embed);
        })
        
    }
});