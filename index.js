const mineflayer = require('mineflayer');
const Discord = require('discord.js');


const options = {
    username: `SkriptDev`,
    password: ``,
    host: 'minehut.com',
    port: 25565
  };
  
var bot;

function createBot(end = false) {
    if (end)
        bot.end();

    bot = mineflayer.createBot(options);
}

createBot();

function selfAdvertise(msg = "") {
    if (msg == "")
        bot.chat("/ad Full &b▁▂▃▆▉ &2INFECTED &cvs &6HUMANS &eMinigame ▍ &dPoints & Leveling System &b▉▆▃▂▁");
    else
        bot.chat(`/ad Full ${msg}`);
}

bot.on("messagestr", (msg) => {
    if (msg.match(/\[AD\] (\[.+?\] |)(\S+?): \/join (.+?) (.+)/)) {
        console.log(msg)
    }
});

bot.on("spawn", () => {
    console.log("Spawned.");
    selfAdvertise();
    () => {
        setInterval(() => {
            selfAdvertise();
        }, 430000) // every 430s OR 7m and 10s

    }
});
//▁▂▃▆▉ &2INFECTED &cvs &6HUMANS &eMinigame | &dPoints & Leveling System | &c1.8-1.16▉▆▃▂▁


bot.on('error', console.log);