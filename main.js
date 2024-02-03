const TelegramBot = require('node-telegram-bot-api');
const token = 'Token';
const bot = new TelegramBot(token, { polling: true });
const chats = {};

const ihones = require('./iphone.js');
const FoldAndFlip = require('./SamsungFlipAndFold.js');
const samsungS = require('./SamsungS.js');
const samsungNote = require('./SamsungNot.js');
const samsungA = require('./SamsungA.js');

const channelId = 'channel id';
const welcomeMessage = "Botimizga hush kelibsiz, Botdan foydalinish uchun Obuna bo'lish tugmasini bosing va kanlimizga obuna bo'ling.";

const home = {
  reply_markup: ({
    resize_keyboard: true,
    keyboard: [
      ["IPHONE"],
      ["Samsung"],
      ["Admin bilan bog'lanish"]
    ],
  })
};

const back = {
  reply_markup: ({
    resize_keyboard: true,
    keyboard: [
      ["IPHONE"],
      ["Samsung"],
      ["Admin bilan bog'lanish"]
    ]
  })
};

bot.setMyCommands([
  { command: '/start', description: "Botni boshlash" },
  { command: '/info', description: "Bot haqida malumot olish" },
  { command: '/phones', description: "Telefon haqida" }
]);

const admin = async (chatId) => {
  const adminPanel = `O'zigizinng taklifingiz bo'lsa yoki reklama bermoqchi bo'lsangin "Admin" tugmachasini bosing`;
  await bot.sendMessage(chatId, adminPanel, {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Admin", url: 'url of your channel' }]
      ]
    }
  })
}

const typeOfPhone = async (chatId) => {
  await bot.sendMessage(chatId, "Sizga kerak bo'lgan telofoni tanlang.", home);
};

const start = () => {
  bot.on('message', async msg => {
    const text = msg.text;
    const chatId = msg.chat.id;
    const userId = msg.from.id;

    bot.getChatMember(channelId, userId).then((chatMember) => {
      const isMember = chatMember.status !== 'left' && chatMember.status !== 'kicked';

      if (isMember) {
        // bot.sendMessage(chatId, `Salom ${msg.from.first_name} . Siz bu buyuq orqali /phones telefonlar haqida malumot olishingiz mumkun.`); // Send a greeting message if the user is already a member

        if (text === '/start') {
          bot.sendMessage(chatId, `Salom ${msg.from.first_name}, bo'timizga hush kelibsiz.`);
          return typeOfPhone(chatId)
        }

        if (text === '/phones') return typeOfPhone(chatId);
        if (text === "Bosh menyuga qaytish") return bot.sendMessage(chatId, "Bosh meyuga qaytish.", back)
        if (text === 'IPHONE') bot.sendMessage(chatId, 'Ihpone telefonlarrini modellari', ihones.iphoneType);
        if (text === "Samsung") return bot.sendMessage(chatId, "Samsung turlari", samsungS.samsungType);
        if (text === "S telfonlari") return bot.sendMessage(chatId, "Samsungning s turdagi telfonlari", samsungS.typeOfS);
        if (text === "Note telfonlari") return bot.sendMessage(chatId, "Samsungning Note turdagi telfonlari", samsungNote.typeOfNote);
        if (text === "A telfonlari") return bot.sendMessage(chatId, "Samsungning A turdagi telfonlari", samsungA.typeOfA);
        if (text === "Z Fold") return bot.sendMessage(chatId, "Samsung Galaxy Z Fold turdagi telfonlari", FoldAndFlip.zFold);
        if (text === "Z Flip") return bot.sendMessage(chatId, "Samsung Galaxy Z Flip telfonlari", FoldAndFlip.zFlip);
        if (text === "Iphone 14 Pro Max") return ihones.promax14(chatId, bot);
        if (text === "Iphone 14 Pro") return ihones.pro14(chatId, bot);
        if (text === "Iphone 14 Plus") return ihones.plus14(chatId, bot);
        if (text === "Iphone 14") return ihones.o14(chatId, bot);
        if (text === "Iphone 13 Pro Max") return ihones.promax13(chatId, bot);
        if (text === "Iphone 13 Pro") return ihones.pro13(chatId, bot);
        if (text === "Iphone 13 Mini") return ihones.mini13(chatId, bot);
        if (text === "Iphone 13") return ihones.o13(chatId, bot);
        if (text === "Iphone 12 Pro Max") return ihones.promax12(chatId, bot);
        if (text === "Iphone 12 Pro") return ihones.pro12(chatId, bot);
        if (text === "Ihpone 12 Mini") return ihones.mini12(chatId, bot);
        if (text === "Iphone 12") return ihones.o12(chatId, bot);
        if (text === "Iphone 11 Pro Max") return ihones.promax11(chatId, bot);
        if (text === "Iphone 11 Pro") return ihones.pro11(chatId, bot);
        if (text === "Iphone 11") return ihones.o11(chatId, bot);
        if (text === "Iphone XS Max") return ihones.xsmax(chatId, bot);
        if (text === "Iphone XS") return ihones.xs(chatId, bot);
        if (text === "Iphone XR") return ihones.xr(chatId, bot);
        if (text === "Iphone X") return ihones.x(chatId, bot);
        if (text === "Iphone 8 Plus") return ihones.plus8(chatId, bot);
        if (text === "Iphone 8") return ihones.sakz(chatId, bot);
        if (text === "Iphone 7 Plus") return ihones.plus7(chatId, bot);
        if (text === "Iphone 7") return ihones.yeti(chatId, bot);
        if (text === "Iphone 6s Plus") return ihones.plus6s(chatId, bot);
        if (text === "Iphone 6s") return ihones.s6(chatId, bot);
        if (text === "Iphone 6 Plus") return ihones.plus6(chatId, bot);
        if (text === "Iphone 6") return ihones.olti(chatId, bot);
        if (text === "Iphone SE 2022") return ihones.se2022(chatId, bot);
        if (text === "Iphone SE 2020") return ihones.se2020(chatId, bot);

        if (text === "S23 Ulta") return samsungS.s23ultra(chatId, bot);
        if (text === "S23 Plus") return samsungS.s23plus(chatId, bot);
        if (text === "S23") return samsungS.s23(chatId, bot);
        if (text === "S22 Ulta") return samsungS.s22ultra(chatId, bot);
        if (text === "S22 Plus") return samsungS.s22plus(chatId, bot);
        if (text === "S22") return samsungS.s22(chatId, bot);
        if (text === "S21 Ulta") return samsungS.s21ultra(chatId, bot);
        if (text === "S21 Plus") return samsungS.s21plus(chatId, bot);
        if (text === "S21") return samsungS.s21(chatId, bot);
        if (text === "S20 Ulta") return samsungS.s20ultra(chatId, bot);
        if (text === "S20 Plus") return samsungS.s20plus(chatId, bot);
        if (text === "S20") return samsungS.s20(chatId, bot);
        if (text === "S10") return samsungS.s10(chatId, bot);
        if (text === "S10 Plus") return samsungS.s10plus(chatId, bot);
        if (text === "S10 5G") return samsungS.s105g(chatId, bot);
        if (text === "S9") return samsungS.s9(chatId, bot);
        if (text === "S9 Plus") return samsungS.s9plus(chatId, bot);
        if (text === "S8") return samsungS.s8(chatId, bot);
        if (text === "S8 Plus") return samsungS.s8plus(chatId, bot);
        if (text === "Z Fold4 5G") return FoldAndFlip.zFold4(chatId, bot)
        if (text === "Z Fold3 5G") return FoldAndFlip.zFold3(chatId, bot)
        if (text === "Z Fold2 5G") return FoldAndFlip.zFold2(chatId, bot)
        if (text === "Z Flip 4 5G") return FoldAndFlip.zFlip4(chatId, bot)
        if (text === "Z Flip 3 5G") return FoldAndFlip.zFlip3(chatId, bot)
        if (text === "Z Flip 5G") return FoldAndFlip.zFlip2(chatId, bot)

      } else {

        bot.sendMessage(chatId, welcomeMessage, {
          reply_markup: {
            inline_keyboard: [
              [{ text: "Obuna bo'lish", url: 'your channel link' }],
              [{ text: 'Tekshirish', callback_data: "chekin" }]
            ]
          }
        });
      }
    })

    if (text === '/info') {
      return bot.sendMessage(chatId, `Salom ${msg.from.first_name} siz biznig bot orqali o'zingizga kerakli bo'lgan telfonga oid bo'lgan malumotlarni olshingiz mumkun`);
    }

    if (text === "Admin bilan bog'lanish") return admin(chatId);
  })

  bot.on("callback_query", msg => {
    const data = msg.data;
    const chatId = msg.message.chat.id;

    if (data === "chekin") {
      bot.sendMessage(chatId, `Salom ${msg.from.first_name}, bo'timizga hush kelibsiz. Ushbu bo'limlarda ozingizga kerakli bo'lgan bo'limni tanlang`, home);
    }
  })
}

start()