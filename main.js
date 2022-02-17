const { Telegraf } = require('telegraf')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const attachCommands = require('./modules/index')
const { getPassage } = require("not_enough_bibles")

dotenv.config()

const BOT_TOKEN = process.env.BOT_TOKEN;
const JOEL_ID = process.env.JOELCHAT;

const bot = new Telegraf(BOT_TOKEN);

mongoose.connect(
    process.env.MONGO_URL,
)
.then(() => console.log('Connected to MongoDB'))
.catch((err)=> console.log('Could not connect to MongoDB: ', err))

bot.start((ctx) => {
    try {
        ctx.reply('Welcome to Joel\'s Bot!');
        console.log(JOEL_ID);
        getPassage("Genesis 1:1-3", { translation: "web", processText: true}).then((p1) => {
            bot.telegram.sendMessage(JOEL_ID, p1.reference + ':\n\n' + p1.text);
        });
    } catch (err) {
        console.log(err);
    }
});

attachCommands(bot);

bot.launch();

bot.hears('test', ctx => {
    console.log(ctx.message);
})