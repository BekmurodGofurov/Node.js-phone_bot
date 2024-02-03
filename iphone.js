const iphoneType = {
  reply_markup: ({
    resize_keyboard: true,
    keyboard: [
      ["Iphone 14 Pro Max", "Iphone 14 Pro"],
      ["Iphone 14 Plus", "Iphone 14"],
      ["Iphone 13 Pro Max", "Iphone 13 Pro"],
      ["Iphone 13", "Iphone 13 Mini"],
      ["Iphone 12 Pro Max", "Iphone 12 Pro"],
      ["Iphone 12", "Ihpone 12 Mini"],
      ["Iphone 11 Pro Max", "Iphone 11 Pro"],
      ["Iphone 11", "Iphone XS Max"],
      ["Iphone XS", "Iphone XR", "Iphone X"],
      ["Iphone 8 Plus", "Iphone 8"],
      ["Iphone 7 Plus", "Iphone 7"],
      ["Iphone 6s Plus", "Iphone 6s"],
      ["Iphone 6 Plus", "Iphone 6"],
      ["Iphone SE 2022", "Iphone SE 2020"],
      ["Bosh menyuga qaytish"]
    ]
  })
}

const promax14 = async (chatId, bot) => {
  const photo = `D:/projects/Bot/phone/img/iphone/14promax.jpg`;
  // const photoOne = `D:/projects/Bot/phone/img/iphone/14promax1.png`
  await bot.sendPhoto(chatId, photo, {
    caption: `Apple iPhone 14 pro max
  
    📱Ekran turi: LTPO Super Retina XDR OLED, 120Hz
    📦Ishlab chiqarilgan sana: Sentabr 2022
    ↗️Ekran hajmi: 6.7 dyum
    ↕️Ekran kengligi: 1290 x 2796 piksel 
     (19.5:9) 460 ppi 
    📱Hajmi: 160.7 x 77.6 x 7.9 mm 
    ⚖️Og'irligi:  240 gramm
    📲OS: iOS 16
    📁Ichki xotira: 128GB, 256GB, 512GB, 1TB 
    📂Operativ xotira: 6GB
    🎛 Asosiy protsessor: Apple A16 Bionic (4 nm)
    🎛 Ishchi protsessor: Hexa-core (2x3.46 GHz Everest + 4x2.02 GHz Sawtooth)
    🎮Grafik karta:  Apple GPU (5-core graphics)
    🌀Barmoq izi skaneri: Yo’q
    💦IP68 Bor
    🔋Batareya: 4323 mAh
    📷Asosiy kamera: 48MP, 12MP, 12MP, TOF 3D LiDAR scanner
    🎥Max video: 4K 60/30/24fps, Full HD 240/30 fps 
    📷Old-kamera: 12 MP  
    🎥Max video: 4K 60/30/25fps, Full HD 120/30 fps 
    🏳️Ranglari: Space Black, Silver, Gold, Deep Purple
    
    Narxi bilan  kanalida tanishishingiz mumkin`})
};

const pro14 = async (chatId, bot) => {
  const photo = `D:/projects/Bot/phone/img/iphone/14pro.webp`;
  await bot.sendPhoto(chatId, photo, {
    caption: `Apple iPhone 14 pro
  
    📦Ishlab chiqarilgan sana:  Sentabr 2022
    📱Ekran turi: LTPO Super Retina XDR OLED, 120Hz
    ↗️Ekran hajmi: 6.1 dyum
    ↕️Ekran kengligi: 1179 x 2556 piksel 
     (19.5:9) 460 ppi 
    📱Hajmi: 147.5 x 71.5 x 7.9 mm 
    ⚖️Og'irligi:  206 gramm
    📲OS: iOS 16
    📁Ichki xotira: 128GB, 256GB, 512GB, 1TB 
    📂Operativ xotira: 6GB
    🎛 Asosiy protsessor: Apple A16 Bionic (4 nm)
    🎛 Ishchi protsessor: Hexa-core (2x3.46 GHz Everest + 4x2.02 GHz Sawtooth)
    🎮Grafik karta:  Apple GPU (5-core graphics)
    🌀Barmoq izi skaneri: Yo’q
    💦IP68 Bor
    🔋Batareya: 3200 mAh
    📷Asosiy kamera: 48MP, 12MP, 12MP, TOF 3D LiDAR scanner
    🎥Max video: 4K 60/30/24fps, Full HD 240/30 fps 
    📷Old-kamera: 12 MP  
    🎥Max video: 4K 60/30/25fps, Full HD 120/30 fps 
    🏳️Ranglari: Space Black, Silver, Gold, Deep Purple
    
    Narxi bilan  kanalida tanishishingiz mumkin`})
}

const plus14 = async (chatId, bot) => {
  const photo = `D:/projects/Bot/phone/img/iphone/14plus.jpg`;
  await bot.sendPhoto(chatId, photo, {
    caption: `Apple iPhone 14 Plus 
  
    📦Ishlab chiqarilgan sana:  Oktyabr 2022
    📱Ekran turi: Super Retina XDR OLED
    ↗️Ekran hajmi: 6.7 dyum
    ↕️Ekran kengligi: 1284 x 2778 piksel 
     (19.5:9) 458 ppi 
    📱Hajmi: 160.8 x 78.1 x 7.8 mm 
    ⚖️Og'irligi:  203 gramm
    📲OS: iOS 16
    📁Ichki xotira: 128GB, 256GB, 512GB 
    📂Operativ xotira: 6GB
    🎛 Asosiy protsessor: Apple A15 Bionic (5 nm)
    🎛 Ishchi protsessor: Hexa-core (2x3.23 GHz Avalanche + 4x1.82 GHz Blizzard)
    🎮Grafik karta:  Apple GPU (5-core graphics)
    🌀Barmoq izi skaneri: Yo’q
    💦IP68 Bor
    🔋Batareya: 4323 mAh
    📷Asosiy kamera: 12MP, 12MP
    🎥Max video: 4K 60/30/24fps, Full HD 240/30 fps 
    📷Old-kamera: 12 MP  
    🎥Max video: 4K 60/30/25fps, Full HD 120/30 fps 
    🏳️Ranglari: Midnight, Purple, Starlight, Blue, Red
    
    Narxi bilan  kanalida tanishishingiz mumkin`})
}

const o14 = async (chatId, bot) => {
  const photo = `D:/projects/Bot/phone/img/iphone/14.jpg`;
  await bot.sendPhoto(chatId, photo, {
    caption: `Apple iPhone 14
  
    📦Ishlab chiqarilgan sana:  Sentabr 2022
    📱Ekran turi: Super Retina XDR OLED
    ↗️Ekran hajmi: 6.1 dyum
    ↕️Ekran kengligi: 1170 x 2532 piksel 
     (19.5:9) 460 ppi 
    📱Hajmi: 146.7 x 71.5 x 7.8 mm
    ⚖️Og'irligi:  172 gramm
    📲OS: iOS 16
    📁Ichki xotira: 128GB, 256GB, 512GB 
    📂Operativ xotira: 6GB
    🎛 Asosiy protsessor: Apple A15 Bionic (5 nm)
    🎛 Ishchi protsessor: Hexa-core (2x3.23 GHz Avalanche + 4x1.82 GHz Blizzard)
    🎮Grafik karta:  Apple GPU (5-core graphics)
    🌀Barmoq izi skaneri: Yo’q
    💦IP68 Bor
    🔋Batareya: 3279 mAh
    📷Asosiy kamera: 12MP, 12MP
    🎥Max video: 4K 60/30/24fps, Full HD 240/30 fps 
    📷Old-kamera: 12 MP  
    🎥Max video: 4K 60/30/25fps, Full HD 120/30 fps 
    🏳️Ranglari: Midnight, Purple, Starlight, Blue, Red
    
    Narxi bilan  kanalida tanishishingiz mumkin`})
}

const promax13 = async (chatId, bot) => {
  const photo = `D:/projects/Bot/phone/img/iphone/13promax.jpg`;
  await bot.sendPhoto(chatId, photo, {
    caption: `Apple iPhone 13 pro Max
   
    📦Ishlab chiqarilgan sana:Sentabr 2021
    📱Ekran turi: Super Retina XDR OLED, 120Hz
    ↗️Ekran hajmi: 6.7 dyum
    ↕️Ekran kengligi: 1284 x 2778 piksel 
     (19.5:9) 458 ppi 
    📱Hajmi: 160.8 x 78.1 x 7.7 mm
    ⚖️Og'irligi:  240 gramm
    📲OS: iOS 15
    📁Ichki xotira: 128GB, 256GB, 512GB, 1TB 
    📂Operativ xotira: 6GB
    🎛 Asosiy protsessor: Apple A15 Bionic (5 nm)
    🎛 Ishchi protsessor: Hexa-core (2x3.23 GHz Avalanche + 4x1.82 GHz Blizzard)
    🎮Grafik karta:  Apple GPU (5-core graphics)
    🌀Barmoq izi skaneri: Yo’q
    💦IP68 Bor
    🔋Batareya: 4352 mAh
    📷Asosiy kamera: 12MP, 12MP, 12MP, TOF 3D LiDAR scanner 
    🎥Max video: 4K 60/30/24fps, Full HD 240/30 fps 
    📷Old-kamera: 12 MP  
    🎥Max video: 4K 60/30/25fps, Full HD 120/30 fps 
    🏳️Ranglari: Graphite, Gold, Silver, Sierra Blue, Alpine Green
    
    Narxi bilan  kanalida tanishishingiz mumkin`})
}

const pro13 = async (chatId, bot) => {
  const photo = `D:/projects/Bot/phone/img/iphone/13pro.jpg`;
  await bot.sendPhoto(chatId, photo, {
    caption: `Apple iPhone 13 pro
  
    📦Ishlab chiqarilgan sana: Sentabr 2021
    📱Ekran turi: Super Retina XDR OLED, 120Hz
    ↗️Ekran hajmi: 6.1 dyum
    ↕️Ekran kengligi: 1170 x 2532 piksel 
     (19.5:9) 460 ppi 
    📱Hajmi: 146.7 x 71.5 x 7.7 mm
    ⚖️Og'irligi:  204 gramm
    📲OS: iOS 15
    📁Ichki xotira: 128GB, 256GB, 512GB, 1TB 
    📂Operativ xotira: 6GB
    🎛 Asosiy protsessor: Apple A15 Bionic (5 nm)
    🎛 Ishchi protsessor: Hexa-core (2x3.23 GHz Avalanche + 4x1.82 GHz Blizzard)
    🎮Grafik karta:  Apple GPU (5-core graphics)
    🌀Barmoq izi skaneri: Yo’q
    💦IP68 Bor
    🔋Batareya: 3095 mAh
    📷Asosiy kamera: 12MP, 12MP, 12MP, TOF 3D LiDAR scanner 
    🎥Max video: 4K 60/30/24fps, Full HD 240/30 fps 
    📷Old-kamera: 12 MP  
    🎥Max video: 4K 60/30/25fps, Full HD 120/30 fps 
    🏳️Ranglari: Graphite, Gold, Silver, Sierra Blue, Alpine Green
    
    Narxi bilan  kanalida tanishishingiz mumkin`})
}

const mini13 = async (chatId, bot) => {
  const photo = `D:/projects/Bot/phone/img/iphone/13mini.png`;
  await bot.sendPhoto(chatId, photo, {
    caption: `Apple iPhone 13 mini
   
    📦Ishlab chiqarilgan sana: Sentabr 2021
    📱Ekran turi: Super Retina XDR OLED
    ↗️Ekran hajmi: 5.4 dyum
    ↕️Ekran kengligi: 1080 x 2340 piksel 
     (19.5:9) 476 ppi 
    📱Hajmi: 131.5 x 64.2 x 7.7 mm
    ⚖️Og'irligi:  141 gramm
    📲OS: iOS 15
    📁Ichki xotira: 128GB, 256GB, 512GB 
    📂Operativ xotira: 4GB
    🎛 Asosiy protsessor: Apple A15 Bionic (5 nm)
    🎛 Ishchi protsessor: Hexa-core (2x3.23 GHz Avalanche + 4x1.82 GHz Blizzard)
    🎮Grafik karta:  Apple GPU (4-core graphics)
    🌀Barmoq izi skaneri: Yo’q
    💦IP68 Bor
    🔋Batareya: 2438 mAh
    📷Asosiy kamera: 12MP, 12MP
    🎥Max video: 4K 60/30/24fps, Full HD 240/30 fps 
    📷Old-kamera: 12 MP  
    🎥Max video: 4K 60/30/25fps, Full HD 120/30 fps 
    🏳️Ranglari: Starlight, Midnight, Blue, Pink, Red, Green
    
    Narxi bilan  kanalida tanishishingiz mumkin`})
}

const o13 = async (chatId, bot) => {
  const photo = `D:/projects/Bot/phone/img/iphone/13.jpg`;
  await bot.sendPhoto(chatId, photo, {
    caption: `Apple iPhone 13
  
    📦Ishlab chiqarilgan sana:  Sentabr 2021
    📱Ekran turi: Super Retina XDR OLED
    ↗️Ekran hajmi: 6.1 dyum
    ↕️Ekran kengligi: 1170 x 2532 piksel 
     (19.5:9) 460 ppi 
    📱Hajmi: 146.7 x 71.5 x 7.7 mm
    ⚖️Og'irligi:  174 gramm
    📲OS: iOS 15
    📁Ichki xotira: 128GB, 256GB, 512GB 
    📂Operativ xotira: 4GB
    🎛 Asosiy protsessor: Apple A15 Bionic (5 nm)
    🎛 Ishchi protsessor: Hexa-core (2x3.23 GHz Avalanche + 4x1.82 GHz Blizzard)
    🎮Grafik karta:  Apple GPU (4-core graphics)
    🌀Barmoq izi skaneri: Yo’q
    💦IP68 Bor
    🔋Batareya: 3240 mAh
    📷Asosiy kamera: 12MP, 12MP
    🎥Max video: 4K 60/30/24fps, Full HD 240/30 fps 
    📷Old-kamera: 12 MP  
    🎥Max video: 4K 60/30/25fps, Full HD 120/30 fps 
    🏳️Ranglari: Starlight, Midnight, Blue, Pink, Red, Green
    
    Narxi bilan  kanalida tanishishingiz mumkin`})
}


const promax12 = async (chatId, bot) => {
  const photo = `D:/projects/Bot/phone/img/iphone/12promax.jpg`;
  await bot.sendPhoto(chatId, photo, {
    caption: `Apple iPhone 12 Pro Max
    
    📦Ishlab chiqarilgan sana: Noyabr 2020
    📱Ekran turi: Super Retina XDR OLED
    ↗️Ekran hajmi: 6.7 dyum
    ↕️Ekran kengligi: 1284 x 2778 piksel 
    (19.5:9) 458 ppi 
    📱Hajmi: 160.8 x 78.1 x 7.4 mm
    ⚖️Og'irligi:  228 gramm
    📲OS: iOS 14.1
    📁Ichki xotira: 128GB, 256GB, 512GB 
    📂Operativ xotira: 6GB
    🎛 Asosiy protsessor: Apple A14 Bionic (5 nm)
    🎛 Ishchi protsessor: Hexa-core (2x3.1 GHz Firestorm + 4x1.8 GHz Icestorm)
    🎮Grafik karta:  Apple GPU (4-core graphics)
    🌀Barmoq izi skaneri: Yo’q
    💦IP68 Bor
    🔋Batareya: 3687 mAh
    📷Asosiy kamera: 12MP, 12MP, 12MP, TOF 3D LiDAR scanner
    🎥Max video: 4K 60/30/24fps, Full HD 240/30 fps 
    📷Old-kamera: 12 MP  
    🎥Max video: 4K 60/30/24fps, Full HD 120/30 fps 
    🏳️Ranglari: Silver, Graphite, Gold, Pacific Blue
    
    Narxi bilan  kanalida tanishishingiz mumkin`})
}

const pro12 = async (chatId, bot) => {
  const photo = `D:/projects/Bot/phone/img/iphone/13.jpg`;
  await bot.sendPhoto(chatId, photo, {
    caption: `Apple iPhone 12 Pro
  
    📦Ishlab chiqarilgan sana:  Noyabr 2020
    📱Ekran turi: Super Retina XDR OLED
    ↗️Ekran hajmi: 6.1 dyum
    ↕️Ekran kengligi: 1170 x 2532q piksel 
     (19.5:9) 460 ppi 
    📱Hajmi: 146.7 x 71.5 x 7.4 mm
    ⚖️Og'irligi:  189 gramm
    📲OS: iOS 14.1
    📁Ichki xotira: 128GB, 256GB, 512GB 
    📂Operativ xotira: 6GB
    🎛 Asosiy protsessor: Apple A14 Bionic (5 nm)
    🎛 Ishchi protsessor: Hexa-core (2x3.1 GHz Firestorm + 4x1.8 GHz Icestorm)
    🎮Grafik karta:  Apple GPU (4-core graphics)
    🌀Barmoq izi skaneri: Yo’q
    💦IP68 Bor
    🔋Batareya: 2815 mAh
    📷Asosiy kamera: 12MP, 12MP, 12MP, TOF 3D LiDAR scanner
    🎥Max video: 4K 60/30/24fps, Full HD 240/30 fps 
    📷Old-kamera: 12 MP  
    🎥Max video: 4K 60/30/24fps, Full HD 120/30 fps 
    🏳️Ranglari: Silver, Graphite, Gold, Pacific Blue
    
    Narxi bilan  kanalida tanishishingiz mumkin`})
}

const mini12 = async (chatId, bot) => {
  const photo = `D:/projects/Bot/phone/img/iphone/12mini.webp`;
  await bot.sendPhoto(chatId, photo, {
    caption: `Apple iPhone 12 mini
   
    📦Ishlab chiqarilgan sana: Noyabr 2020
    📱Ekran turi: Super Retina XDR OLED
    ↗️Ekran hajmi: 5.4 dyum
    ↕️Ekran kengligi: 1080 x 2340 piksel 
     (19.5:9) 476 ppi 
    📱Hajmi: 131.5 x 64.2 x 7.4 mm
    ⚖️Og'irligi:  135 gramm
    📲OS: iOS 14.1
    📁Ichki xotira: 64GB, 128GB, 256GB 
    📂Operativ xotira: 4GB
    🎛 Asosiy protsessor: Apple A14 Bionic (5 nm)
    🎛 Ishchi protsessor: Hexa-core (2x3.1 GHz Firestorm + 4x1.8 GHz Icestorm) Thunder)
    🎮Grafik karta:  Apple GPU (4-core graphics)
    🌀Barmoq izi skaneri: Yo’q
    💦IP68 Bor
    🔋Batareya: 2227 mAh
    📷Asosiy kamera: 12MP, 12MP
    🎥Max video: 4K 60/30/24fps, Full HD 240/30 fps 
    📷Old-kamera: 12 MP  
    🎥Max video: 4K 60/30/24fps, Full HD 120/30 fps 
    🏳️Ranglari: Black, White, Red, Green, Blue, Purple
    
    Narxi bilan  kanalida tanishishingiz mumkin`})
}

const o12 = async (chatId, bot) => {
  const photo = `D:/projects/Bot/phone/img/iphone/12.jpg`;
  await bot.sendPhoto(chatId, photo, {
    caption: `Apple iPhone 12
   
    📦Ishlab chiqarilgan sana: Oktyabr 2020
    📱Ekran turi: Super Retina XDR OLED
    ↗️Ekran hajmi: 6.1 dyum
    ↕️Ekran kengligi: 1170 x 2532 piksel 
     (19.5:9) 460 ppi 
    📱Hajmi: 146.7 x 71.5 x 7.4 mm
    ⚖️Og'irligi:  164 gramm
    📲OS: iOS 14.1
    📁Ichki xotira: 64GB, 128GB, 256GB 
    📂Operativ xotira: 4GB
    🎛 Asosiy protsessor: Apple A14 Bionic (5 nm)
    🎛 Ishchi protsessor: Hexa-core (2x3.1 GHz Firestorm + 4x1.8 GHz Icestorm) Thunder)
    🎮Grafik karta:  Apple GPU (4-core graphics)
    🌀Barmoq izi skaneri: Yo’q
    💦IP68 Bor
    🔋Batareya: 2815 mAh
    📷Asosiy kamera: 12MP, 12MP
    🎥Max video: 4K 60/30/24fps, Full HD 240/30 fps 
    📷Old-kamera: 12 MP  
    🎥Max video: 4K 60/30/24fps, Full HD 120/30 fps 
    🏳️Ranglari: Black, White, Red, Green, Blue, Purple
    
    Narxi bilan  kanalida tanishishingiz mumkin`})
}

const promax11 = async (chatId, bot) => {
  const photo = `D:/projects/Bot/phone/img/iphone/11promax.jpg`;
  await bot.sendPhoto(chatId, photo, {
    caption: `Apple iPhone 11 pro max
   
    📦Ishlab chiqarilgan sana: Sentabr 2019
    📱Ekran turi: Super Retina XDR OLED
    ↗️Ekran hajmi: 6.5 dyum
    ↕️Ekran kengligi: 1242 x 2688 piksel 
     (19.5:9) 458 ppi 
    📱Hajmi: 158 x 77.8 x 8.1 mm
    ⚖️Og'irligi:  226 gramm
    📲OS: iOS 13
    📁Ichki xotira: 64GB, 256GB, 512GB 
    📂Operativ xotira: 4GB
    🎛 Asosiy protsessor: Apple A13 Bionic (7 nm+)
    🎛 Ishchi protsessor: Hexa-core (2x2.65 GHz Lightning + 4x1.8 GHz Thunder)
    🎮Grafik karta:  Apple GPU (4-core graphics)
    🌀Barmoq izi skaneri: Yo’q
    💦IP68 Bor
    🔋Batareya: 3969 mAh
    📷Asosiy kamera: 12MP, 12MP, 12MP
    🎥Max video: 4K 60/30/24fps, Full HD 240/30 fps 
    📷Old-kamera: 12 MP  
    🎥Max video: 4K 60/30/24fps, Full HD 120/30 fps 
    🏳️Ranglari: Matte Space Gray, Matte Silver, Matte Gold, Matte Midnight Green
    
    Narxi bilan  kanalida tanishishingiz mumkin`})
}

const pro11 = async (chatId, bot) => {
  const photo = `D:/projects/Bot/phone/img/iphone/11pro.jpg`;
  await bot.sendPhoto(chatId, photo, {
    caption: `Apple iPhone 11 pro
  
    📦Ishlab chiqarilgan sana:  Sentabr 2019
    📱Ekran turi: Super Retina XDR OLED
    ↗️Ekran hajmi: 5.8 dyum
    ↕️Ekran kengligi: 1125 x 2436 piksel 
     (19.5:9) 458 ppi 
    📱Hajmi: 144 x 71.4 x 8.1 mm
    ⚖️Og'irligi:  188 gramm
    📲OS: iOS 13
    📁Ichki xotira: 64GB, 256GB, 512GB 
    📂Operativ xotira: 4GB
    🎛 Asosiy protsessor: Apple A13 Bionic (7 nm+)
    🎛 Ishchi protsessor: Hexa-core (2x2.65 GHz Lightning + 4x1.8 GHz Thunder)
    🎮Grafik karta:  Apple GPU (4-core graphics)
    🌀Barmoq izi skaneri: Yo’q
    💦IP68 Bor
    🔋Batareya: 3046 mAh
    📷Asosiy kamera: 12MP, 12MP, 12MP
    🎥Max video: 4K 60/30/24fps, Full HD 240/30 fps 
    📷Old-kamera: 12 MP  
    🎥Max video: 4K 60/30/24fps, Full HD 120/30 fps 
    🏳️Ranglari: Matte Space Gray, Matte Silver, Matte Gold, Matte Midnight Green
    
    Narxi bilan  kanalida tanishishingiz mumkin`})
}

const o11 = async (chatId, bot) => {
  const photo = `D:/projects/Bot/phone/img/iphone/11.jpg`;
  await bot.sendPhoto(chatId, photo, {
    caption: `Apple iPhone 11
    
    📦Ishlab chiqarilgan sana:Sentabr 2019
    📱Ekran turi: Liquid Retina IPS LCD
    ↗️Ekran hajmi: 6.1 dyum
    ↕️Ekran kengligi: 828 x 1792 piksel 
     (19.5:9) 326 ppi 
    📱Hajmi: 150.9 x 75.7 x 8.3 mm
    ⚖️Og'irligi:  194 gramm
    📲OS: iOS 13
    📁Ichki xotira: 64GB, 128GB, 256GB 
    📂Operativ xotira: 4GB
    🎛 Asosiy protsessor: Apple A13 Bionic (7 nm+)
    🎛 Ishchi protsessor: Hexa-core (2x2.65 GHz Lightning + 4x1.8 GHz Thunder)
    🎮Grafik karta:  Apple GPU (4-core graphics)
    🌀Barmoq izi skaneri: Yo’q
    💦IP68 Bor
    🔋Batareya: 3110  mAh
    📷Asosiy kamera: 12MP, 12MP
    🎥Max video: 4K 60/30/24fps, Full HD 240/30 fps 
    📷Old-kamera: 12 MP  
    🎥Max video: 4K 60/30/24fps, Full HD 120/30 fps 
    🏳️Ranglari: Black, Green, Yellow, Purple, Red, White
    
    Narxi bilan  kanalida tanishishingiz mumkin`})
}

const xsmax = async (chatId, bot) => {
  const photo = `D:/projects/Bot/phone/img/iphone/xsmax.jpg`;
  await bot.sendPhoto(chatId, photo, {
    caption: `Apple iPhone X S Max
   
    📦Ishlab chiqarilgan sana: Sentabr 2018
    📱Ekran turi: Super Retina OLED
    ↗️Ekran hajmi: 6.5 dyum
    ↕️Ekran kengligi: 1242 x 2688 piksel 
     (19.5:9) 458 ppi 
    📱Hajmi: 157.5 x 77.4 x 7.7 mm
    ⚖️Og'irligi:  208 gramm
    📲OS: iOS 12
    📁Ichki xotira: 64GB, 256GB, 512GB
    📂Operativ xotira: 4GB
    🎛 Asosiy protsessor: Apple A12 Bionic (7 nm)
    🎛 Ishchi protsessor: Hexa-core (2x2.5 GHz Vortex + 4x1.6 GHz Tempest)
    🎮Grafik karta:  Apple GPU (4-core graphics)
    🌀Barmoq izi skaneri: Yo’q
    💦IP68 Bor
    🔋Batareya: 3174 mAh
    📷Asosiy kamera: 12MP, 12MP
    🎥Max video: 4K 60/30/24fps, Full HD 240/30 fps 
    📷Old-kamera: 7 MP  
    🎥Max video: Full HD 60/30 fps 
    🏳️Ranglari: Space Gray, Silver, Gold
    
    Narxi bilan  kanalida tanishishingiz mumkin`})
}

const xs = async (chatId, bot) => {
  const photo = `D:/projects/Bot/phone/img/iphone/xs.webp`;
  await bot.sendPhoto(chatId, photo, {
    caption: `Apple iPhone X S
    
    📦Ishlab chiqarilgan sana:Sentabr 2018
    📱Ekran turi: Super Retina OLED
    ↗️Ekran hajmi: 5.8 dyum
    ↕️Ekran kengligi: 1125 x 2436 piksel 
     (19.5:9) 458  ppi 
    📱Hajmi: 143.6 x 70.9 x 7.7 mm
    ⚖️Og'irligi:  177 gramm
    📲OS: iOS 12
    📁Ichki xotira: 64GB, 256GB, 512GB
    📂Operativ xotira: 4GB
    🎛 Asosiy protsessor: Apple A12 Bionic (7 nm)
    🎛 Ishchi protsessor: Hexa-core (2x2.5 GHz Vortex + 4x1.6 GHz Tempest)
    🎮Grafik karta:  Apple GPU (4-core graphics)
    🌀Barmoq izi skaneri: Yo’q
    💦IP68 Bor
    🔋Batareya: 2658 mAh
    📷Asosiy kamera: 12MP, 12MP
    🎥Max video: 4K 60/30/24fps, Full HD 240/30 fps 
    📷Old-kamera: 7 MP  
    🎥Max video: Full HD 60/30 fps 
    🏳️Ranglari: Space Gray, Silver, Gold
    
    Narxi bilan  kanalida tanishishingiz mumkin`})
}

const xr = async (chatId, bot) => {
  const photo = `D:/projects/Bot/phone/img/iphone/xr.jpg`;
  await bot.sendPhoto(chatId, photo, {
    caption: `Apple iPhone X R

    📦Ishlab chiqarilgan sana:  Oktabr 2018
    📱Ekran turi: Liquid Retina IPS LCD
    ↗️Ekran hajmi: 6.1 dyum
    ↕️Ekran kengligi: 828 x 1792 piksel 
     (19.5:9) 326 ppi 
    📱Hajmi: 150.9 x 75.7 x 8.3 mm
    ⚖️Og'irligi:  194 gramm
    📲OS: iOS 12 dan iOS 16.4.1 gacha
    📁Ichki xotira: 64GB, 128GB, 256GB
    📂Operativ xotira: 3GB
    🎛 Asosiy protsessor: Apple A12 Bionic (7 nm)
    🎛 Ishchi protsessor: Hexa-core (2x2.5 GHz Vortex + 4x1.6 GHz Tempest)
    🎮Grafik karta: Apple GPU (4-core graphics)
    🌀Barmoq izi skaneri: Yo’q
    💦IP67 Bor
    🔋Batareya: 2942 mAh
    📷Asosiy kamera: 12MP
    🎥Max video: 4K 60/30/24fps, Full HD 240/30 fps 
    📷Old-kamera: 7 MP  
    🎥Max video: Full HD 60 fps 
    🏳️Ranglari: Black, Red, Yellow, Blue, Coral, White
    
    Narxi bilan  kanalida tanishishingiz mumkin`})
}

const x = async (chatId, bot) => {
  const photo = `D:/projectsBot/phone/img/iphone/x.jpg`;
  await bot.sendPhoto(chatId, photo, {
    caption: `Apple iPhone X
  
    📦Ishlab chiqarilgan sana:  Noybar 2017
    📱Ekran turi: Super Retina OLED
    ↗️Ekran hajmi: 5.8 dyum
    ↕️Ekran kengligi: 1125 x 2436 piksel 
     (19.5:9) 458  ppi 
    📱Hajmi: 143.6 x 70.9 x 7.7 mm
    ⚖️Og'irligi:  174gramm
    📲OS: iOS 11.1.1
    📁Ichki xotira: 64GB, 256GB
    📂Operativ xotira: 3GB
    🎛 Asosiy protsessor: Apple A11 Bionic (10 nm)
    🎛 Ishchi protsessor: Hexa-core 2.39 GHz (2x Monsoon + 4x Mistral)
    🎮Grafik karta:  Apple GPU (three-core graphics)
    🌀Barmoq izi skaneri: Yo’q
    💦IP67 Bor
    🔋Batareya: 2716 mAh
    📷Asosiy kamera: 12MP, 12MP
    🎥Max video: 4K 60/30/24fps, Full HD 240/30 fps 
    📷Old-kamera: 7 MP  
    🎥Max video: Full HD 30 fps 
    🏳️Ranglari: Space Gray, Silver
    
    Narxi bilan  kanalida tanishishingiz mumkin`})
}

const plus8 = async (chatId, bot) => {
  const photo = `D:/projects/Bot/phone/img/iphone/8plus.jpeg`;
  await bot.sendPhoto(chatId, photo, {
    caption: `Apple iPhone 8 +
   
    📦Ishlab chiqarilgan sana: Sentabr 2017
    📱Ekran turi: Retina IPS LCD
    ↗️Ekran hajmi: 5.5 dyum
    ↕️Ekran kengligi: 1080 x 1920 piksel 
     (16:9) 401 ppi 
    📱Hajmi: 158.4 x 78.1 x 7.5 mm
    ⚖️Og'irligi:  202 gramm
    📲OS: iOS 11
    📁Ichki xotira: 64GB, 128GB, 256GB
    📂Operativ xotira: 3GB
    🎛 Asosiy protsessor: Apple A11 Bionic (10 nm)
    🎛 Ishchi protsessor: Hexa-core (2x Monsoon + 4x Mistral)
    🎮Grafik karta:  Apple GPU (three-core graphics)
    🌀Barmoq izi skaneri: Bor 
    💦IP67 Bor
    🔋Batareya: 2691 mAh
    📷Asosiy kamera: 12MP, 12MP
    🎥Max video: 4K 60/30/24fps, Full HD 240/30 fps 
    📷Old-kamera: 7 MP  
    🎥Max video: Full HD 30 fps 
    🏳️Ranglari: Gold, Space Gray, Silver, Red
    
    Narxi bilan  kanalida tanishishingiz mumkin`})
}

const sakz = async (chatId, bot) => {
  const photo = `D:/projects/Bot/phone/img/iphone/8.png`;
  await bot.sendPhoto(chatId, photo, {
    caption: `Apple iPhone 8
   
    📦Ishlab chiqarilgan sana: Sentabr 2017
    📱Ekran turi: Retina IPS LCD
    ↗️Ekran hajmi: 4.7 dyum
    ↕️Ekran kengligi: 750 x 1334 piksel 
     (16:9) 326 ppi 
    📱Hajmi: 138.4 x 67.3 x 7.3 mm
    ⚖️Og'irligi:  148 gramm
    📲OS: iOS 11
    📁Ichki xotira: 64GB, 128GB, 256GB
    📂Operativ xotira: 2GB
    🎛 Asosiy protsessor: Apple A11 Bionic (10 nm)
    🎛 Ishchi protsessor: Hexa-core (2x Monsoon + 4x Mistral)
    🎮Grafik karta:  Apple GPU (three-core graphics)
    🌀Barmoq izi skaneri: Bor 
    💦IP67 Bor
    🔋Batareya: 1821 mAh
    📷Asosiy kamera: 12MP
    🎥Max video: 4K 60/30/24fps, Full HD 240/30 fps 
    📷Old-kamera: 7 MP  
    🎥Max video: Full HD 30 fps 
    🏳️Ranglari: Silver, Space Gray, Gold, Red
    
    Narxi bilan  kanalida tanishishingiz mumkin`})
}

const plus7 = async (chatId, bot) => {
  const photo = `D:/projects/Bot/phone/img/iphone/7plus.jpg`;
  await bot.sendPhoto(chatId, photo, {
    caption: `Apple iPhone 7 + 
   
    📦Ishlab chiqarilgan sana: Sentabr 2016
    📱Ekran turi: Retina IPS LCD
    ↗️Ekran hajmi: 5.5 dyum
    ↕️Ekran kengligi: 1080 x 1920 piksel 
     (16:9) 401 ppi 
    📱Hajmi: 158.2 x 77.9 x 7.3 mm
    ⚖️Og'irligi:  188 gramm
    📲OS: iOS 10.0.1
    📁Ichki xotira: 32GB, 128GB, 256GB
    📂Operativ xotira: 3GB
    🎛 Asosiy protsessor: Apple A10 Fusion (16 nm)
    🎛 Ishchi protsessor: Quad-core 2.34 GHz (2x Hurricane + 2x Zephyr)
    🎮Grafik karta:  PowerVR Series7XT Plus (six-core graphics)
    🌀Barmoq izi skaneri: Bor 
    💦IP67 Bor
    🔋Batareya: 2900 mAh
    📷Asosiy kamera: 12MP, 12MP
    🎥Max video: 4K 30fps, Full HD 120/60/30 fps 
    📷Old-kamera: 7 MP  
    🎥Max video: Full HD 30 fps 
    🏳️Ranglari: Jet Black, Black, Silver, Gold, Rose Gold, Red
    
    Narxi bilan  kanalida tanishishingiz mumkin`})
}

const yeti = async (chatId, bot) => {
  const photo = `D:/projects/Bot/phone/img/iphone/7.jpg`;
  await bot.sendPhoto(chatId, photo, {
    caption: `Apple iPhone 7
  
    📦Ishlab chiqarilgan sana: Sentabr 2016
    📱Ekran turi: Retina IPS LCD
    ↗️Ekran hajmi: 4.7 dyum
    ↕️Ekran kengligi: 750 x 1334 piksel 
     (16:9) 326 ppi 
    📱Hajmi: 138.3 x 67.1 x 7.1 mm
    ⚖️Og'irligi:  138 gramm
    📲OS: iOS 10.0.1
    📁Ichki xotira: 32GB, 128GB, 256GB
    📂Operativ xotira: 2GB
    🎛 Asosiy protsessor: Apple A10 Fusion (16 nm)
    🎛 Ishchi protsessor: Quad-core 2.34 GHz (2x Hurricane + 2x Zephyr)
    🎮Grafik karta:  PowerVR Series7XT Plus (six-core graphics)
    🌀Barmoq izi skaneri: Bor 
    💦IP67 Bor
    🔋Batareya: 1960 mAh
    📷Asosiy kamera: 12MP
    🎥Max video: 4K 30fps, Full HD 120/60/30 fps 
    📷Old-kamera: 7 MP
    🎥Max video: Full HD 30 fps 
    🏳️Ranglari: Jet Black, Black, Silver, Gold, Rose Gold, Red
    
    Narxi bilan  kanalida tanishishingiz mumkin`})
}

const plus6s = async (chatId, bot) => {
  const photo = `D:/projects/Bot/phone/img/iphone/6splus.png`;
  await bot.sendPhoto(chatId, photo, {
    caption: `Apple iPhone 6S plus 
   
    📦Ishlab chiqarilgan sana: Sentabr 2015 
    📱Ekran turi: IPS LCD 
    ↗️Ekran hajmi: 5.5 dyum 
    ↕️Ekran kengligi: 1080 x 1920 piksel  
     (16:9) 401 ppi  
    📱Hajmi: 158.2 x 77.9 x 7.3 mm 
    ⚖️Og'irligi:  192 gramm 
    📲OS: IOS 9 
    📁Ichki xotira: 16GB, 32GB, 64GB, 128GB 
    📂Operativ xotira: 2GB 
    🎛 Asosiy protsessor: Apple A9 (14 nm) 
    🎛 Ishchi protsessor: Dual-core 1.84 GHz Twister 
    🎮Grafik karta:  PowerVR GT7600 (six-core graphics) 
    🌀Barmoq izi skaneri: Bor  
    💦IP67 yo’q 
    🔋Batareya:  2750   mAh 
    📷Asosiy kamera:  12 MP 
    🎥Max video: 4K 30fps,Full HD 30/60fps, HD 240fps  
    📷Old-kamera:  5 MP 
    🎥Max video: HD 30 fps  
    🏳️Ranglari:  Space Gray, Silver, Gold, Rose Gold 
     
     
    Narxi bilan  kanalida tanishishingiz mumkin`})
}

const s6 = async (chatId, bot) => {
  const photo = `D:/projects/Bot/phone/img/iphone/6s.png`;
  await bot.sendPhoto(chatId, photo, {
    caption: `Apple iPhone 6 S
  
    📦Ishlab chiqarilgan sana: Sentabr 2015
    📱Ekran turi: IPS LCD
    ↗️Ekran hajmi: 4.7 dyum
    ↕️Ekran kengligi: 750 x 1334 piksel 
     (16:9) 326 ppi 
    📱Hajmi: 138.3 x 67.1 x 7.1 mm
    ⚖️Og'irligi:  143 gramm
    📲OS: IOS 9
    📁Ichki xotira: 16GB, 32GB, 64GB, 128GB
    📂Operativ xotira: 2GB
    🎛 Asosiy protsessor: Apple A9 (14 nm)
    🎛 Ishchi protsessor: Dual-core 1.84 GHz Twister
    🎮Grafik karta:  PowerVR GT7600 (six-core graphics)
    🌀Barmoq izi skaneri: Bor 
    💦IP67 yo’q
    🔋Batareya:  1715  mAh
    📷Asosiy kamera:  12MP
    🎥Max video: 4K 30fps,  Full HD 60fps, HD 240fps 
    📷Old-kamera:  5 MP
    🎥Max video: HD 30 fps 
    🏳️Ranglari:  Space Gray, Silver, Gold, Rose Gold
    
    
    Narxi bilan  kanalida tanishishingiz mumkin`})
}

const plus6 = async (chatId, bot) => {
  const photo = `D:/projects/Bot/phone/img/iphone/6plus.png`;
  await bot.sendPhoto(chatId, photo, {
    caption: `Apple iPhone 6 plus 
   
    📦Ishlab chiqarilgan sana: Sentabr 2014 
    📱Ekran turi: IPS LCD 
    ↗️Ekran hajmi: 5.5 dyum 
    ↕️Ekran kengligi: 1080 x 1920 piksel  
     (16:9) 401 ppi  
    📱Hajmi: 158.1 x 77.8 x 7.1 mm 
    ⚖️Og'irligi:  172 gramm 
    📲OS: IOS 8 
    📁Ichki xotira: 16GB, 64GB, 128GB 
    📂Operativ xotira: 1GB 
    🎛 Asosiy protsessor: Apple A8 (20 nm) 
    🎛 Ishchi protsessor: Dual-core 1.4 GHz Typhoon (ARM v8-based) 
    🎮Grafik karta:  PowerVR GX6450 (quad-core graphics) 
    🌀Barmoq izi skaneri: Bor  
    💦IP67 yo’q 
    🔋Batareya:  2915  mAh 
    📷Asosiy kamera:  8 MP 
    🎥Max video: Full HD 60fps, HD 240fps  
    📷Old-kamera:  1.2 MP 
    🎥Max video: HD 30 fps  
    🏳️Ranglari:  Space Gray, Silver, Gold 
     
     
    Narxi bilan  kanalida tanishishingiz mumkin`})
}

const olti = async (chatId, bot) => {
  const photo = `D:/projects/Bot/phone/img/iphone/6.png`;
  await bot.sendPhoto(chatId, photo, {
    caption: `Apple iPhone 6
  
    📦Ishlab chiqarilgan sana: Sentabr 2014
    📱Ekran turi: IPS LCD
    ↗️Ekran hajmi: 4.7 dyum
    ↕️Ekran kengligi: 750 x 1334 piksel 
     (16:9) 326 ppi 
    📱Hajmi: 138.1 x 67 x 6.9 mm
    ⚖️Og'irligi:  129 gramm
    📲OS: iOS 8
    📁Ichki xotira: 16GB, 32GB, 64GB, 128GB
    📂Operativ xotira: 1GB
    🎛 Asosiy protsessor: Apple A8 (20 nm)
    🎛 Ishchi protsessor: Dual-core 1.4 GHz Typhoon (ARM v8-based)
    🎮Grafik karta:  PowerVR GX6450 (quad-core graphics)
    🌀Barmoq izi skaneri: Bor 
    💦IP67 yo’q
    🔋Batareya:  1810  mAh
    📷Asosiy kamera:  8MP
    🎥Max video:  Full HD 60fps, HD 120fps 
    📷Old-kamera:  1.2 MP
    🎥Max video: HD 30 fps 
    🏳️Ranglari:  Space Gray, Silver, Gold
    
    
    Narxi bilan  kanalida tanishishingiz mumkin`})
}

const se2022 = async (chatId, bot) => {
  const photo = `D:/projects/Bot/phone/img/iphone/se2022.webp`;
  await bot.sendPhoto(chatId, photo, {
    caption: `Apple iPhone SE 2022

    📦Ishlab chiqarilgan sana: Mart 2022
    📱Ekran turi: Retina IPS LCD
    ↗️Ekran hajmi: 4.7 dyum
    ↕️Ekran kengligi: 750 x 1334 piksel 
     (16:9) 326 ppi 
    📱Hajmi: 138,4 x 67,3 x 7,3 mm
    ⚖️Og'irligi:  144 gramm
    📲OS: IOS 15.4
    📁Ichki xotira: 64GB, 128GB, 256GB
    📂Operativ xotira: 4GB
    🎛 Asosiy protsessor: Apple A15 Bionic (5 nm)
    🎛 Ishchi protsessor: Hexa-core (2x3.22 GHz Avalanche + 4x1.82 GHz Blizzard)
    🎮Grafik karta:  Apple GPU (4-core graphics)
    🌀Barmoq izi skaneri: Bor 
    💦IP67 bor
    🔋Batareya:  2018 mAh
    📷Asosiy kamera:  12MP
    🎥Max video: 4K 60/30fps,  Full HD 60/240fps 
    📷Old-kamera:  7 MP
    🎥Max video: Full HD 30/60 fps 
    🏳️Ranglari:  Midnight, Starlight, Red
    
    
    Narxi bilan  kanalida tanishishingiz mumkin`})
}

const se2020 = async (chatId, bot) => {
  const photo = `D:/projects/Bot/phone/img/iphone/se2020.jpg`;
  await bot.sendPhoto(chatId, photo, {
    caption: `Apple iPhone SE 2020

    📦Ishlab chiqarilgan sana: Aprel 2020
    📱Ekran turi: Retina IPS LCD
    ↗️Ekran hajmi: 4.7 dyum
    ↕️Ekran kengligi: 750 x 1334 piksel 
     (16:9) 326 ppi 
    📱Hajmi: 138,4 x 67,3 x 7,3 mm
    ⚖️Og'irligi:  148 gramm
    📲OS: IOS 13 dan 16.4.1 gacha
    📁Ichki xotira: 64GB, 128GB, 256GB
    📂Operativ xotira: 3GB
    🎛 Asosiy protsessor: Apple A13 Bionic (7 nm+)
    🎛 Ishchi protsessor: Hexa-core (2x2.65 GHz Lightning + 4x1.8 GHz Thunder)
    🎮Grafik karta:  Apple GPU (4-core graphics)
    🌀Barmoq izi skaneri: Bor 
    💦IP67 bor
    🔋Batareya:  1821 mAh
    📷Asosiy kamera:  12MP
    🎥Max video: 4K 60/30fps,  Full HD 60/240fps 
    📷Old-kamera:  7 MP
    🎥Max video: Full HD 30 fps 
    🏳️Ranglari:  Black, White, Red
    
    
    Narxi bilan  kanalida tanishishingiz mumkin`})
}

module.exports = {
  iphoneType, promax14, pro14, plus14, o14, promax13, pro13, mini13, o13, promax12, pro12, mini12, o12, promax11, pro11, o11, xsmax, xs, xr, x, plus8, sakz, plus7, yeti, plus6s, s6, plus6, olti, se2022, se2020
}