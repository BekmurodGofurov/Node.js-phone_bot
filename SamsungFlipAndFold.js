const zFold = {
  reply_markup: ({
    resize_keyboard: true,
    keyboard: [
      ["Z Fold4 5G", "Z Fold3 5G"],
      ["Z Fold2 5G"],
      ["Bosh menyuga qaytish"]
    ]
  })
}

const zFlip = {
  reply_markup: ({
    resize_keyboard: true,
    keyboard: [
      [" Z Flip 4 5G", "Z Flip 3 5G"],
      ["Z Flip 5G"],
      ["Bosh menyuga qaytish"]
    ]
  })
}

const zFold4 = async (chatId, bot) => {
  const photo = `D:/projects/Bot/phone/img/zFold/zfold4.jpg`;
  await bot.sendPhoto(chatId, photo, {caption:`Samsung Galaxy Z Fold4 5G
     
    📦Ishlab chiqarilgan sana: Avgust  2022 
    📱Ekran turi: Foldable Dynamic AMOLED 2X, 120Hz, HDR10+ 
    ↗️Ekran hajmi: 7.6 dyum 
    ↕️Ekran kengligi: 1812 x 2176 piksel 
     373 ppi  
    📱Hajmi: 155.1 x 67.1 x 14.2-15.8 mm 
    ⚖️Og'irligi:  263 gramm 
    📲OS: Android 12 
    📲UI: One UI    
    📁Ichki xotira: 256GB, 512GB, 1TB 
    📂Operativ xotira: 12GB 
    🎛 Asosiy protsessor: Qualcomm SM8475 Snapdragon 8+ Gen 1 (4 nm) 
    🎛 Ishchi protsessor: Octa-core (1x3.19 GHz Cortex-X2 & 3x2.75 GHz Cortex-A710 & 4x1.80 GHz Cortex-A510) 
    🎮Grafik karta: Adreno 730 
    🌀Barmoq izi skaneri: Bor (yon tomonda) 
    💦IPX8 (Suv va changdan himoya) bor 
    🔋Batareya: 4400  mAh 
    📷Asosiy kamera: 50 MP, 10MP, 12 MP  
    🎥Max video: 8K 24fps, 4K 60/30 fps, Full HD 60/240 fps,  
    📷Old-kamera: 4 MP, 10 MP  
    🎥Max video:  4K 60/30 fps, Full HD 60/30fps 
    🏳️Ranglari:  Graygreen, Phantom Black, Beige, Burgundy 
     
    Narxi bilan  kanalida tanishishingiz mumkin.`})
};

const zFold3 = async (chatId, bot) => {
  const photo = `D:/projects/Bot/phone/img/zFold/zfold3.webp`;
  await bot.sendPhoto(chatId, photo, {caption: `Samsung Galaxy Z Fold3 5G 

    📦Ishlab chiqarilgan sana: Avgust  2021 
    📱Ekran turi: Foldable Dynamic AMOLED 2X, 120Hz, HDR10+ 
    ↗️Ekran hajmi: 7.6 dyum 
    ↕️Ekran kengligi: 1768 x 2208 piksel 
     374 ppi  
    📱Hajmi: 158.2 x 67.1 x 14.4-16 mm 
    ⚖️Og'irligi:  271 gramm 
    📲OS: Android 11 
    📲UI: One UI    
    📁Ichki xotira: 256GB, 512GB 
    📂Operativ xotira: 12GB 
    🎛 Asosiy protsessor: Qualcomm SM8350 Snapdragon 888 5G (5 nm) 
    🎛 Ishchi protsessor: Octa-core (1x2.84 GHz Cortex-X1 & 3x2.42 GHz Cortex-A78 & 4x1.80 GHz Cortex-A55) 
    🎮Grafik karta: Adreno 660 
    🌀Barmoq izi skaneri: Bor (yon tomonda) 
    💦IPX8 (Suv va changdan himoya) bor 
    🔋Batareya: 4400  mAh 
    📷Asosiy kamera: 12 MP, 12MP, 12 MP  
    🎥Max video: 4K 60/30 fps, Full HD 60/240 fps,  
    📷Old-kamera: 4 MP, 10 MP  
    🎥Max video:  4K 30 fps, Full HD 30fps 
    🏳️Ranglari:  Phantom Black, Phantom Silver, Phantom Green, Thom Browne Edition 
     
    Narxi bilan  kanalida tanishishingiz mumkin.`})
};

const zFold2 = async (chatId, bot) => {
  const photo = `D:/projects/Bot/phone/img/zFold/zFold2.png`;
  await bot.sendPhoto(chatId, photo, {
    caption: `Samsung Galaxy Z Fold2 5G 

    📦Ishlab chiqarilgan sana: Sentabr 2020 
    📱Ekran turi: Foldable Dynamic AMOLED 2X, 120Hz, HDR10+ 
    ↗️Ekran hajmi: 7.6 dyum 
    ↕️Ekran kengligi: 1768 x 2208 piksel (Quad HD+) 
     373 ppi  
    📱Hajmi: 159.2 x 68 x 13.8-16.8 mm 
    ⚖️Og'irligi:  282 gramm 
    📲OS: Android 10 
    📲UI: One UI    
    📁Ichki xotira: 256GB, 512GB 
    📂Operativ xotira: 12GB 
    🎛 Asosiy protsessor: Qualcomm SM8250 Snapdragon 865 5G+ (7 nm+) 
    🎛 Ishchi protsessor: Octa-core (1x3.09 GHz Cortex-A77 & 3x2.42 GHz Cortex-A77 & 4x1.80 GHz 
    🎮Grafik karta: Adreno 650 
    🌀Barmoq izi skaneri: Bor (yon tomonda) 
    💦IP68 (Suv va changdan himoya) yo’q 
    🔋Batareya: 4500 mAh 
    📷Asosiy kamera: 12 MP, 12MP, 12 MP  
    🎥Max video: 4K 60/30 fps, Full HD 240 fps,  
    📷Old-kamera: 10 MP, 10 MP  
    🎥Max video:  4K 30 fps, Full HD 30fps 
    🏳️Ranglari:  Mystic Bronze, Mystic Black, Thom Browne Edition, Aston Martin Racing Edition 
     
    Narxi bilan  kanalida tanishishingiz mumkin`})
};

const zFlip4 = async (chatId, bot) => {
  const photo = `D:/projects/Bot/phone/img/zFlip/zFlip4.webp`;
  await bot.sendPhoto(chatId, photo, {caption:`Samsung Galaxy Z Flip 4 5G 
  Avgust  2022 
  📱Ekran turi: Foldable Dynamic AMOLED 2X, 120Hz, HDR10+ 
  ↗️Ekran hajmi: 6.7 dyum 
  ↕️Ekran kengligi: 1080 x 2640 piksel 
   426 ppi  
  📱Hajmi: 165.2 x 71.9 x 6.9 mm 
  ⚖️Og'irligi:  187 gramm 
  📲OS: Android 12 
  📲UI: One UI    
  📁Ichki xotira: 128GB, 256GB, 512GB 
  📂Operativ xotira: 8GB 
  🎛 Asosiy protsessor: Qualcomm SM8475 Snapdragon 8+ Gen 1 (4 nm) 
  🎛 Ishchi protsessor: Octa-core (1x3.19 GHz Cortex-X2 & 3x2.75 GHz Cortex-A710 & 4x1.80 GHz Cortex-A510) 
  🎮Grafik karta: Adreno 730 
  🌀Barmoq izi skaneri: Bor (yon tomonda) 
  💦IPX8 (Suv va changdan himoya) bor 
  🔋Batareya: 4400  mAh 
  📷Asosiy kamera: 12 MP, 12 MP  
  🎥Max video: 4K 60/30 fps, Full HD 60/240 fps,  
  📷Old-kamera: 10 MP  
  🎥Max video:  4K 30 fps  
  🏳️Ranglari:  Graygreen, Phantom Black, Beige, Burgundy 
   
  Narxi bilan  kanalida tanishishingiz mumkin.`})
};

const zFlip3 = async (chatId, bot) => {
  const photo = `D:/projects/Bot/phone/img/zFlip/zFlip3.jpg`;
  await bot.sendPhoto(chatId, photo, {caption:`Samsung Galaxy Z Flip 3 5G 
  Avgust  2021
  📱Ekran turi: Foldable Dynamic AMOLED 2X, 120Hz va Super AMOLED
  ↗️Ekran hajmi: 6.7 dyum va 1.9 dyum
  ↕️Ekran kengligi: 1080 x 2640 piksel va  260 x 512 piksel 
   426 ppi  
  📱Hajmi: 166 x 72.2 x 6.9 mm va 86.4 x 72.2 x 15.9-17.1 mm 
  ⚖️Og'irligi:  183 gramm 
  📲OS: Android  11 dan Android 13 gacha
  📲UI: One UI dan One UI 5.1gacha   
  📁Ichki xotira: 128GB, 256GB 
  📂Operativ xotira: 8GB 
  🎛 Asosiy protsessor: Qualcomm SM8350 Snapdragon 888 5G (5 nm) 
  🎛 Ishchi protsessor: Octa-core (1x2.84 GHz Cortex-X1 & 3x2.42 GHz Cortex-A78 & 4x1.80 GHz 
  🎮Grafik karta: Adreno 660
  🌀Barmoq izi skaneri: Bor (yon tomonda) 
  💦IPX8 (Suv va changdan himoya) bor 
  🔋Batareya: 3300 mAh 
  📷Asosiy kamera: 12 MP, 12 MP  
  🎥Max video: 4K 60/30 fps, Full HD 60/240 fps,  
  📷Old-kamera: 10 MP  
  🎥Max video:  4K 30 fps  
  🏳️Ranglari:  Phantom Black, Green, Lavender, Cream, White, Pink, Gray, Thom Browne
  
  Narxi bilan  kanalida tanishishingiz mumkin.`})
};

const zFlip2 = async (chatId, bot) => {
  const photo = `D:/projects/Bot/phone/img/zFlip/zFlip.webp`;
  await bot.sendPhoto(chatId, photo, {caption: `Samsung Galaxy Z Flip 5G 
  Avgust  2020
  📱Ekran turi: Foldable Dynamic AMOLED va Super AMOLED
  ↗️Ekran hajmi: 6.7 dyum va 1.1 dyum
  ↕️Ekran kengligi: 1080 x 2636 piksel  va  112 x 300 piksel 
   425 ppi  
  📱Hajmi: 167.3 x 73.6 x 7.2 mm va 87.4 x 73.6 x 17.3 mm
  ⚖️Og'irligi:  183 gramm 
  📲OS: Android  10 dan Android 13 gacha
  📲UI: One UI dan One UI 5 gacha   
  📁Ichki xotira: 128GB, 256GB 
  📂Operativ xotira: 8GB 
  🎛 Asosiy protsessor: Qualcomm SM8250 Snapdragon 865 5G+ (7 nm+) 
  🎛 Ishchi protsessor: Octa-core (1x3.09 GHz Cortex-A77 & 3x2.40 GHz Cortex-A77 & 4x1.80 GHz Cortex-A55)  
  🎮Grafik karta: Adreno 650
  🌀Barmoq izi skaneri: Bor (yon tomonda) 
  💦IPX8 (Suv va changdan himoya) yo’q 
  🔋Batareya: 3300 mAh 
  📷Asosiy kamera: 12 MP, 12 MP  
  🎥Max video: 4K 60/30 fps, Full HD 60/240 fps,  
  📷Old-kamera: 10 MP  
  🎥Max video:  4K 30 fps  
  🏳️Ranglari:  Mystic Grey, Mystic Bronze, Mystic White
  
   
  Narxi bilan  kanalida tanishishingiz mumkin.`})
};

module.exports = {
  zFold, zFlip, zFold4, zFold3, zFold2, zFlip4, zFlip3, zFlip2,
}