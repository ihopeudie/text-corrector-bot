import {Telegraf} from 'telegraf';

const bot = new Telegraf('5950344090:AAEHj0wKbB1tuom7k_3-qfITrRU0uNBZ3D8');

bot.start((ctx) => ctx.reply('Welcome'));

function normalizeText(text) {
  return text
    .replace(/[\r\n]/gm, ' ')
    .replace(/[.]/gm, '. ')
    .replace(/,/gm, ', ')
    .replace(/\(/gm, ' (')
    .replace(/\)/gm, ') ')
    .replace(/\s\s+/gm, ' ');
}

bot.on('text', (ctx) => ctx.reply(normalizeText(ctx.message.text)));

bot.launch(
  {
    webhook: {
      // Public domain for webhook; e.g.: example.com
      domain: "v170578.hosted-by-vdsina.ru",

      // Port to listen on; e.g.: 8080
      port: 80,

      // Optional secret to be sent back in a header for security.
      // e.g.: `crypto.randomBytes(64).toString("hex")`
      //secretToken: randomAlphaNumericString,
    }
  }
);

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
