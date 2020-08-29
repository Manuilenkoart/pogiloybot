const Telegraf = require("telegraf");
const {
  voiceReplyText,
  voiceReplyImg,
  getRandomInt,
} = require("../src/voiceReply");
const { TOKEN } = require("../config");
const PORT = process.env.PORT || 3000;
const URL = process.env.URL || "https://pogiloytgbot.herokuapp.com/";
const bot = new Telegraf(TOKEN);

bot.telegram.setWebhook(`${URL}/bot${TOKEN}`);
bot.setWebhook(`/bot${TOKEN}`, null, PORT);

bot.catch((err, ctx) => {
  console.log(`Ooops, encountered an error for ${ctx.updateType}`, err);
});

bot.start((ctx) => {
  ctx.reply(`Включён режим ворчуна`);
});
bot.hears("негатив", (ctx) => ctx.reply("Кто тут раскукарекался? "));

bot.on("voice", (ctx) => {
  if (getRandomInt(2)) {
    ctx.reply(voiceReplyText());
    console.log("text");
  } else {
    ctx.replyWithPhoto(voiceReplyImg());
  }
});

bot.launch();