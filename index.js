import { Telegraf } from 'telegraf';

const bot = new Telegraf('5950344090:AAEHj0wKbB1tuom7k_3-qfITrRU0uNBZ3D8');

bot.start((ctx) => ctx.reply('Welcome'));

function normalizeText(text) {
  return text
    .replace(/[\r\n]/gm, '')
    .replace(/[.]/gm, '. ')
    .replace(/,/gm, ', ')
    .replace(/\(/gm, ' (')
    .replace(/\)/gm, ') ')
    .replace(/\s\s+/gm, ' ');
}

bot.on('text', (ctx) => ctx.reply(normalizeText(ctx.message.text)));
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
