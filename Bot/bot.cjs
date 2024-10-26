const { Telegraf } = require('telegraf');

const TOKEN = '7580693879:AAHS1Al4psgGbZnKGPZvdPquNCNZbbEI5QU';
const web_link = 'https://cerulean-youtiao-da6e50.netlify.app/';
const bot = new Telegraf(TOKEN);
bot.start((ctx) => ctx.reply('Welcome', {reply_markup:{keyboard:[[{text: 'web app', web_app: {url: web_link}}]]}}))
bot.launch();