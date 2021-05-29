const mineflayer = require('mineflayer');
//const Discord = require('discord.js');

const serverName = "Full" // Put your server name here
const adMessage = "&b▁▂▃▆▉ &2INFECTED &cvs &6HUMANS &eMinigame ▍ &dPoints & Leveling System &b▉▆▃▂▁" // Put your self advertise msg here

const options = {
    username: 'SkriptDev', // Email OR Username
    password: '', // Password here
    host: 'minehut.com',
    port: 25565
  };
  
var bot;

function createBot(end = false) {
    if (end) // End then restart?
        bot.end();

    bot = mineflayer.createBot(options);
}

createBot();

function selfAdvertise(msg = "") {
    if (msg == "") { // Default msg
        bot.chat(`/ad ${serverName} ${adMessage}`);
        console.log("> Self Advertised"); // Debug
    }
    else // Custom msg
        bot.chat(`/ad ${serverName} ${msg}`);
}

function selfAutoAd() { // Auto Self Advertise
    setInterval(selfAdvertise, 430000) // every 430s OR 7m and 10s (VIP)
}

bot.on("messagestr", (msg) => {
    pattern = /\[AD\] (\[.+?\]|)(?: |)(\S+?): \/join (.+?) (.+)/g
    matches = pattern.exec(msg)
    if (matches) {
        console.log(`${new Date(Date.now()).toGMTString().replace(" GMT", "")}: ${msg}`) // Debug
        //console.log(`[DEBUG] ${matches[1]} - ${matches[2]} - ${matches[3]} - ${matches[4]}`) // Debug
        // matches[1] = Rank name if set or EMPTY
        // matches[2] = Player name
        // matches[3] = Server name
        // matches[4] = AD message
        if (matches[3] == serverName) {
            console.log(`[MATCH] ${msg}`) // Debug

        }
    }
});

bot.on("spawn", () => {
    console.log(`${new Date(Date.now()).toGMTString().replace(" GMT", "")}: Spawned as ${bot.username}.`);
    selfAdvertise();
    selfAutoAd(); // Start auto self advertiser
        
});

bot.on('error', console.log); // Log errors
