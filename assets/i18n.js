/* Jacket Market – i18n (uz / ru / en)
   - English text in the code is the KEY. T('English text') returns the string in the active language.
   - Add a new language: add it to LANGS/LABEL, add a third item to every array in D.
   - Language is saved in localStorage ('jm_lang'). Switching reloads the page (all pages are rendered by JS).
   - Placeholders: T('Hi, {name}.', {name:'Ali'}) */
(function(){
var LANGS=['uz','ru','en'],LABEL={uz:'UZ',ru:'RU',en:'EN'},IDX={uz:0,ru:1},lang=null;
try{lang=localStorage.getItem('jm_lang')}catch(e){}
if(LANGS.indexOf(lang)<0){var nl=(navigator.language||'en').toLowerCase();lang=nl.indexOf('uz')===0?'uz':nl.indexOf('ru')===0?'ru':'en'}
var LI=IDX[lang];

/* 'English key': ['Oʻzbekcha', 'Русский'] */
var D={
/* ---- header / footer / common ---- */
'About':['Biz haqimizda','О нас'],
'Shop':['Do‘kon','Магазин'],
'Support':['Yordam','Поддержка'],
'Contacts':['Aloqa','Контакты'],
'Account':['Kabinet','Аккаунт'],
'Menu':['Menyu','Меню'],
'Close':['Yopish','Закрыть'],
'Main':['Asosiy menyu','Главное меню'],
'Footer':['Sayt oxiri','Нижнее меню'],
'Language':['Til','Язык'],
'Cart':['Savat','Корзина'],
'in your cart':['savatda','в корзине'],
'Instagram (opens in a new tab)':['Instagram (yangi oynada ochiladi)','Instagram (откроется в новой вкладке)'],
'[ All rights reserved ]':['[ Barcha huquqlar himoyalangan ]','[ Все права защищены ]'],
'Be the first to know':['Yangiliklarni birinchi bo‘lib biling','Узнавайте новости первыми'],
'Your email':['Elektron pochtangiz','Ваш email'],
'Send':['Yuborish','Отправить'],
'[ Built for cold ]':['[ Sovuq uchun yaratilgan ]','[ Создано для холода ]'],
'Thanks. Sign-up is not connected yet.':['Rahmat. Obuna hozircha ulanmagan.','Спасибо. Подписка пока не подключена.'],
'Enter a valid email address':['To‘g‘ri elektron pochta manzilini kiriting','Введите корректный адрес email'],
'Add to cart':['Savatga qo‘shish','В корзину'],

/* ---- page titles ---- */
'Puffer Jackets':['Puxovik kurtkalar','Пуховики'],
'Jacket':['Kurtka','Куртка'],

/* ---- product kinds ---- */
'Puffer jacket':['Puxovik','Пуховик'],
'Tech parka':['Texnik parka','Технологичная парка'],
'Leather bomber':['Charm bomber','Кожаный бомбер'],
'Insulated shell':['Issiq shell kurtka','Утеплённый шелл'],
'Suede jacket':['Zamsh kurtka','Замшевая куртка'],
'Hooded puffer':['Kapyushonli puxovik','Пуховик с капюшоном'],
'Tech shell':['Texnik shell','Технический шелл'],

/* ---- colour names ---- */
'Crimson':['To‘q qizil','Малиновый'],
'Field Olive':['Dala zaytuni','Полевая олива'],
'Polar Cream':['Qutb kremi','Полярный крем'],
'Obsidian':['Obsidian','Обсидиан'],
'Midnight Navy':['Yarim tun ko‘ki','Полуночный синий'],
'Stealth Black':['Yashirin qora','Стелс чёрный'],
'Espresso':['Espresso','Эспрессо'],
'Aurora':['Aurora','Аврора'],
'Arctic Blue':['Arktika ko‘ki','Арктический синий'],
'Moss':['Yo‘sin','Мох'],
'Harbor Navy':['Port ko‘ki','Портовый синий'],
'Dune Sand':['Dyuna qumi','Песок дюн'],
'Mercury':['Simob','Меркурий'],
'Snow White':['Qor oq','Белоснежный'],
'Layer Navy':['To‘q ko‘k','Тёмно-синий'],
'Stealth Grey':['Yashirin kulrang','Стелс серый'],
'Graphite':['Grafit','Графит'],
'Olive':['Zaytun','Оливковый'],
'Rust':['Zang rang','Ржавый'],
'Copper':['Mis','Медный'],
'Signal Red':['Signal qizil','Сигнальный красный'],
'Slate':['Slanets','Сланец'],
'Arctic Camo':['Arktika kamuflyaji','Арктический камуфляж'],
'Forest':['O‘rmon','Лесной'],
'Deep Blue':['Chuqur ko‘k','Глубокий синий'],

/* ---- shop ---- */
'View jacket':['Kurtkani ko‘rish','Смотреть куртку'],
'New collection':['Yangi kolleksiya','Новая коллекция'],
'[ New collection ]':['[ Yangi kolleksiya ]','[ Новая коллекция ]'],
'[ Puffers ]':['[ Puxoviklar ]','[ Пуховики ]'],
'Puffer jackets':['Puxovik kurtkalar','Пуховики'],
'Leather &amp; suede':['Charm va zamsh','Кожа и замша'],
'Tech shells':['Texnik shell kurtkalar','Технические шеллы'],
'Extreme cold line':['Qattiq sovuq liniyasi','Линия для сильных морозов'],
'Filters':['Filtrlar','Фильтры'],
'Filter':['Filtr','Фильтр'],
'All':['Hammasi','Все'],
'Puffers':['Puxoviklar','Пуховики'],
'Parkas &amp; shells':['Parka va shell kurtkalar','Парки и шеллы'],

/* ---- product page ---- */
'Previous jacket':['Oldingi kurtka','Предыдущая куртка'],
'Next jacket':['Keyingi kurtka','Следующая куртка'],
'Colour':['Rang','Цвет'],
'Size':['O‘lcham','Размер'],
'Size guide':['O‘lchamlar jadvali','Таблица размеров'],
'Less':['Kamroq','Меньше'],
'More':['Ko‘proq','Больше'],
'Free shipping from $200':['$200 dan boshlab bepul yetkazib berish','Бесплатная доставка от $200'],
'Sizes S to XXL':['O‘lchamlar S dan XXL gacha','Размеры от S до XXL'],
'Built for cold':['Sovuq uchun yaratilgan','Создано для холода'],
'Materials':['Materiallar','Материалы'],
'Delivery and returns':['Yetkazib berish va qaytarish','Доставка и возврат'],
'Weather-resistant shell with warm insulation, built for extreme cold.':['Issiq izolyatsiyali, ob-havoga chidamli tashqi qatlam — qattiq sovuq uchun yaratilgan.','Погодостойкая внешняя ткань с тёплым утеплителем, создана для сильных морозов.'],
'Placeholder: add your delivery times and return window here.':['Namuna matn: bu yerga yetkazib berish muddati va qaytarish shartlarini yozing.','Заглушка: укажите здесь сроки доставки и условия возврата.'],
'You may also like':['Sizga yoqishi mumkin','Вам может понравиться'],
'View all':['Hammasini ko‘rish','Смотреть все'],
'Engineered for the cold, <b>{t}</b> is built for ultimate comfort in cold climates.':['<b>{t}</b> modeli sovuq uchun ishlab chiqilgan va sovuq iqlimda maksimal qulaylik beradi.','Модель <b>{t}</b> создана для холода и обеспечивает максимальный комфорт в холодном климате.'],
'Added: {name}, {size} × {q}':['Qo‘shildi: {name}, {size} × {q}','Добавлено: {name}, {size} × {q}'],
'Added: {name}, {size}':['Qo‘shildi: {name}, {size}','Добавлено: {name}, {size}'],

/* ---- about ---- */
'[ About ] [ Jacket Market ]':['[ Biz haqimizda ] [ Jacket Market ]','[ О нас ] [ Jacket Market ]'],
'Built for':['Sovuq uchun','Создано'],
'the cold.':['yaratilgan.','для холода.'],
'Jacket Market was born in the cold. Not as a trend, but as a response. We make jackets for people who climb, commute and wait out winter.':['Jacket Market sovuqda tug‘ilgan. Moda sifatida emas, balki javob sifatida. Biz toqqa chiqadiganlar, har kuni yo‘lga otlanadiganlar va qishni kutib o‘tadiganlar uchun kurtkalar tikamiz.','Jacket Market родился на морозе. Не как тренд, а как ответ. Мы делаем куртки для тех, кто поднимается в горы, ездит на работу и пережидает зиму.'],
'Shop the collection':['Kolleksiyani ko‘rish','Смотреть коллекцию'],
'Talk to us':['Biz bilan bog‘laning','Связаться с нами'],
'Model in a black puffer jacket and ski goggles standing on a snowy mountain ridge':['Qora puxovik va chang‘i ko‘zoynagi kiygan model qorli tog‘ tizmasida turibdi','Модель в чёрном пуховике и лыжной маске стоит на заснеженном горном хребте'],
'We pick every jacket for one reason: it keeps you warm without weighing you down. Light puffer fill, honest cuts, colours you will actually wear. No filler.':['Biz har bir kurtkani bitta sabab bilan tanlaymiz: u sizni og‘irlashtirmasdan isitadi. Yengil pux to‘ldirma, halol kesim, haqiqatan ham kiyadigan ranglar. Ortiqcha narsasiz.','Мы выбираем каждую куртку по одной причине: она согревает и не тяготит. Лёгкий пуховый наполнитель, честный крой, цвета, которые вы действительно будете носить. Ничего лишнего.'],
'jackets':['ta kurtka','курток'],
'colourways':['ta rang varianti','цветовых решений'],
'sizes, S to XXL':['ta o‘lcham, S dan XXL gacha','размеров, от S до XXL'],
'What we stand for':['Biz nimaga tayanamiz','Наши принципы'],
'Light fill':['Yengil to‘ldirma','Лёгкий наполнитель'],
'Puffer fill that traps heat without the bulk, so you stay warm and still move.':['Issiqlikni ushlab turadigan, ammo og‘irlik qilmaydigan pux to‘ldirma — iliq bo‘lasiz va erkin harakatlanasiz.','Пуховый наполнитель, который удерживает тепло без лишнего объёма: вам тепло, и вы свободно двигаетесь.'],
'Honest cuts':['Halol kesim','Честный крой'],
'Clean shapes and a relaxed fit made to layer. Nothing decorative that does not do a job.':['Toza shakllar va qatlam-qatlam kiyish uchun erkin kesim. Vazifasiz bezak yo‘q.','Чистые формы и свободная посадка для многослойности. Никакого декора, который ничего не делает.'],
'Colours you will wear':['Kiyadigan ranglaringiz','Цвета, которые вы будете носить'],
'From crimson to snow white, 14 colourways chosen for real wardrobes, not for a season.':['To‘q qizildan qor-oqqacha — bir mavsum uchun emas, haqiqiy garderob uchun tanlangan 14 ta rang.','От малинового до белоснежного: 14 цветов, выбранных для реального гардероба, а не на один сезон.'],
'Mountains':['Tog‘lar','Горы'],
'[ Made for height ]':['[ Balandlik uchun yaratilgan ]','[ Создано для высоты ]'],
'For those who climb.':['Toqqa chiqadiganlar uchun.','Для тех, кто поднимается.'],
'Not for the crowd.':['Olomon uchun emas.','Не для толпы.'],
'Find your':['O‘zingizning','Найдите'],
'jacket.':['kurtkangizni toping.','свою куртку.'],
'Browse jackets':['Kurtkalarni ko‘rish','Смотреть куртки'],

/* ---- support ---- */
'How can we':['Qanday yordam','Чем мы'],
'help?':['bera olamiz?','можем помочь?'],
'How do I pick a size?':['O‘lchamni qanday tanlayman?','Как выбрать размер?'],
'Use the size table below. If you are between sizes, go up one for a layered fit.':['Quyidagi o‘lchamlar jadvalidan foydalaning. Ikki o‘lcham orasida bo‘lsangiz, qatlam-qatlam kiyish uchun kattasini oling.','Воспользуйтесь таблицей размеров ниже. Если вы между размерами, возьмите больший — для многослойной посадки.'],
'Can I return a jacket?':['Kurtkani qaytarsam bo‘ladimi?','Можно ли вернуть куртку?'],
'Placeholder: describe your return window and conditions here.':['Namuna matn: bu yerga qaytarish muddati va shartlarini yozing.','Заглушка: опишите здесь срок и условия возврата.'],
'How long does delivery take?':['Yetkazib berish qancha vaqt oladi?','Сколько занимает доставка?'],
'Placeholder: add delivery times for your regions here.':['Namuna matn: bu yerga hududlaringiz uchun yetkazib berish muddatini yozing.','Заглушка: укажите здесь сроки доставки для ваших регионов.'],
'How do I wash it?':['Uni qanday yuvaman?','Как за ней ухаживать?'],
'Machine wash cold on a gentle cycle, dry on low heat with two clean tennis balls to keep the fill lofty.':['Sovuq suvda, nozik yuvish rejimida mashinada yuving; pux puffakligini saqlash uchun ikkita toza tennis to‘pi bilan past haroratda quriting.','Стирайте в машине в холодной воде на деликатном режиме, сушите при низкой температуре с двумя чистыми теннисными мячами, чтобы наполнитель оставался пышным.'],
'Size table':['O‘lchamlar jadvali','Таблица размеров'],
'Chest, cm':['Ko‘krak, sm','Грудь, см'],
'Length, cm':['Uzunlik, sm','Длина, см'],
'Placeholder measurements. Replace with your own.':['Namuna o‘lchamlar. O‘zingiznikiga almashtiring.','Примерные размеры. Замените своими.'],

/* ---- cart ---- */
'Your cart':['Savatingiz','Ваша корзина'],
'is empty.':['bo‘sh.','пуста.'],
'Nothing here yet. Pick a jacket and it will show up here.':['Hozircha bu yerda hech narsa yo‘q. Kurtka tanlang — u shu yerda paydo bo‘ladi.','Здесь пока пусто. Выберите куртку — и она появится здесь.'],
'Size {s}':['O‘lcham {s}','Размер {s}'],
'{p} each':['{p} / dona','{p} за шт.'],
'Quantity':['Miqdor','Количество'],
'Remove':['O‘chirish','Удалить'],
'Remove {title}':['{title} ni o‘chirish','Удалить: {title}'],
'Order summary':['Buyurtma xulosasi','Сводка заказа'],
'Summary':['Xulosa','Сводка'],
'Add <b>{x}</b> more for free shipping':['Bepul yetkazib berish uchun yana <b>{x}</b> qo‘shing','Добавьте ещё <b>{x}</b> для бесплатной доставки'],
'<b>You have free shipping</b>':['<b>Sizda bepul yetkazib berish</b>','<b>У вас бесплатная доставка</b>'],
'Subtotal':['Oraliq summa','Подытог'],
'Shipping':['Yetkazib berish','Доставка'],
'Free':['Bepul','Бесплатно'],
'Total':['Jami','Итого'],
'Checkout':['Buyurtma berish','Оформить заказ'],
'Continue shopping':['Xaridni davom ettirish','Продолжить покупки'],
'Processing…':['Jarayonda…','Обработка…'],
'Purchase':['Xarid','Покупка'],
'complete.':['yakunlandi.','завершена.'],
'Thank you, {name}. ':['Rahmat, {name}. ','Спасибо, {name}. '],
'Thank you. ':['Rahmat. ','Спасибо. '],
'Your order <b>{no}</b> is confirmed: {n} {items}, {total} in total.':['Buyurtmangiz <b>{no}</b> tasdiqlandi: {n} {items}, jami {total}.','Ваш заказ <b>{no}</b> подтверждён: {n} {items}, всего {total}.'],
'Total (incl. {x} shipping)':['Jami ({x} yetkazib berish bilan)','Итого (включая доставку {x})'],
'Total (free shipping)':['Jami (bepul yetkazib berish)','Итого (бесплатная доставка)'],
'Back to home':['Bosh sahifaga qaytish','На главную'],
'Purchase complete. Order {no}':['Xarid yakunlandi. Buyurtma {no}','Покупка завершена. Заказ {no}'],

/* ---- account ---- */
'First to see new collections':['Yangi kolleksiyalarni birinchi bo‘lib ko‘ring','Первыми смотрите новые коллекции'],
'Welcome to':['Xush kelibsiz','Добро пожаловать в'],
'the cold line.':['sovuq liniyasiga.','холодную линию.'],
'Join the':['Qo‘shiling','Присоединяйтесь к'],
'cold line.':['sovuq liniyasiga.','холодной линии.'],
'Model in a white puffer jacket and ski goggles standing in snowy mountains':['Oq puxovik va chang‘i ko‘zoynagi kiygan model qorli tog‘larda turibdi','Модель в белом пуховике и лыжной маске стоит в заснеженных горах'],
'Hi, {name}.':['Salom, {name}.','Привет, {name}.'],
'You are signed in as {email}.':['Siz {email} sifatida tizimga kirgansiz.','Вы вошли как {email}.'],
'orders yet. Browse jackets':['ta buyurtma. Kurtkalarni ko‘ring','заказов пока нет. Смотреть куртки'],
'Name':['Ism','Имя'],
'Email':['Elektron pochta','Email'],
'Member since':['A’zo bo‘lgan sana','Участник с'],
'Sign out':['Chiqish','Выйти'],
'Signed out':['Tizimdan chiqildi','Вы вышли из аккаунта'],
'Show':['Ko‘rsatish','Показать'],
'Hide':['Yashirish','Скрыть'],
'Show password':['Parolni ko‘rsatish','Показать пароль'],
'Hide password':['Parolni yashirish','Скрыть пароль'],
'Full name':['To‘liq ism','Полное имя'],
'Password':['Parol','Пароль'],
'Use 8 or more characters with a number.':['8 yoki undan ko‘p belgi va raqam ishlating.','Используйте 8 или более символов, включая цифру.'],
'Weak':['Zaif','Слабый'],
'Okay':['Qoniqarli','Нормальный'],
'Good':['Yaxshi','Хороший'],
'Strong':['Kuchli','Надёжный'],
'Forgot password?':['Parolni unutdingizmi?','Забыли пароль?'],
'I agree to the terms and privacy policy':['Foydalanish shartlari va maxfiylik siyosatiga roziman','Я согласен с условиями и политикой конфиденциальности'],
'Create your account':['Akkaunt yarating','Создайте аккаунт'],
'It takes a minute. Your cart stays exactly as it is.':['Bir daqiqa vaqt oladi. Savatingiz o‘zgarishsiz qoladi.','Это займёт минуту. Ваша корзина останется без изменений.'],
'Create account':['Akkaunt yaratish','Создать аккаунт'],
'Already have an account? ':['Akkauntingiz bormi? ','Уже есть аккаунт? '],
'Sign in':['Kirish','Войти'],
'Welcome back':['Qaytganingiz bilan','С возвращением'],
'Sign in to pick up where you left off.':['Qolgan joyingizdan davom etish uchun kiring.','Войдите, чтобы продолжить с того же места.'],
'New to Jacket Market? ':['Jacket Market’da yangimisiz? ','Впервые в Jacket Market? '],
'Please wait':['Iltimos, kuting','Подождите'],
'Enter your name.':['Ismingizni kiriting.','Введите имя.'],
'Enter your email.':['Elektron pochtangizni kiriting.','Введите email.'],
'That email doesn’t look right.':['Elektron pochta noto‘g‘ri ko‘rinadi.','Похоже, email указан неверно.'],
'Create a password.':['Parol yarating.','Придумайте пароль.'],
'Enter your password.':['Parolni kiriting.','Введите пароль.'],
'Use 8 or more characters with at least one number.':['8 yoki undan ko‘p belgi va kamida bitta raqam ishlating.','Используйте 8 или более символов и хотя бы одну цифру.'],
'Agree to continue.':['Davom etish uchun rozilik bering.','Согласитесь, чтобы продолжить.'],
'Open the site over http://localhost to create accounts':['Akkaunt yaratish uchun saytni http://localhost orqali oching','Откройте сайт через http://localhost, чтобы создавать аккаунты'],
'An account with this email already exists. Try signing in.':['Bu elektron pochta bilan akkaunt allaqachon mavjud. Kirishga urinib ko‘ring.','Аккаунт с этим email уже существует. Попробуйте войти.'],
'Email or password is incorrect.':['Elektron pochta yoki parol noto‘g‘ri.','Неверный email или пароль.'],
'Account created. Welcome, {name}':['Akkaunt yaratildi. Xush kelibsiz, {name}','Аккаунт создан. Добро пожаловать, {name}'],
'Could not create the account here':['Akkaunt yaratib bo‘lmadi','Не удалось создать аккаунт'],
'Signed in. Welcome back, {name}':['Tizimga kirdingiz. Qaytganingiz bilan, {name}','Вы вошли. С возвращением, {name}'],
'Password reset is not connected yet':['Parolni tiklash hozircha ulanmagan','Восстановление пароля пока не подключено'],

/* ---- contacts ---- */
'Talk to':['Biz bilan','Напишите'],
'us.':['bog‘laning.','нам.'],
'Questions about a jacket, your size or an order? Write to us and we will get back to you.':['Kurtka, o‘lcham yoki buyurtma haqida savolingiz bormi? Bizga yozing, javob beramiz.','Вопросы о куртке, размере или заказе? Напишите нам, и мы ответим.'],
'Phone':['Telefon','Телефон'],
'Email and phone are placeholders. Replace them with your own details.':['Elektron pochta va telefon — namuna. O‘zingizning ma’lumotlaringizga almashtiring.','Email и телефон — заглушки. Замените их своими данными.'],
'Send a message':['Xabar yuborish','Отправить сообщение'],
'What is it about?':['Nima haqida?','О чём обращение?'],
'Order':['Buyurtma','Заказ'],
'Sizing':['O‘lcham','Размеры'],
'Returns':['Qaytarish','Возврат'],
'Something else':['Boshqa narsa','Другое'],
'Your name':['Ismingiz','Ваше имя'],
'Message':['Xabar','Сообщение'],
'Send message':['Xabarni yuborish','Отправить сообщение'],
'Copy':['Nusxalash','Копировать'],
'Copied':['Nusxalandi','Скопировано'],
'Copy {k}':['Nusxalash: {k}','Копировать: {k}'],
'{k} copied':['{k} nusxalandi','{k}: скопировано'],
'Copy is not available here':['Bu yerda nusxalash mavjud emas','Копирование здесь недоступно'],
'The form is not connected to a server yet':['Forma hozircha serverga ulanmagan','Форма пока не подключена к серверу'],
'Write a short message.':['Qisqa xabar yozing.','Напишите короткое сообщение.'],

/* ---- home ---- */
'[ Series 01 ] [ Puffers ]':['[ Seriya 01 ] [ Puxoviklar ]','[ Серия 01 ] [ Пуховики ]'],
'Collection':['Kolleksiya','Коллекция'],
'Look':['Ko‘rinish','Вид'],
'[ Active: cold mode 01 ]':['[ Faol: sovuq rejimi 01 ]','[ Активно: режим холода 01 ]'],
'Front':['Old tomon','Спереди'],
'Side profile':['Yon tomondan','Сбоку'],
'Turned':['Burilgan','В полоборота'],
'Back':['Orqa tomon','Сзади'],
'{title}, {name} view':['{title}, {name} ko‘rinishi','{title}, вид: {name}'],
'Show {name} view':['{name} ko‘rinishini ko‘rsatish','Показать вид: {name}'],
'Midnight parka':['Yarim tun parkasi','Полуночная парка'],
'Low crouch':['Past cho‘kkalash','Низкий присед'],
'Hood up':['Kapyushon ko‘tarilgan','Капюшон надет'],
'Three-quarter':['Uch chorak burilish','В три четверти'],
'Arms crossed':['Qo‘llar ko‘ksida','Скрещённые руки'],
'Look {n}: {t}, model in a Jacket Market puffer and ski goggles':['{n}-ko‘rinish: {t}, Jacket Market puxovigi va chang‘i ko‘zoynagi kiygan model','Образ {n}: {t}, модель в пуховике Jacket Market и лыжной маске'],
'Look {n}: {t}':['{n}-ko‘rinish: {t}','Образ {n}: {t}'],
'The cold line, six looks':['Sovuq liniyasi, oltita ko‘rinish','Линия холода, шесть образов'],
'Cold line':['Sovuq liniyasi','Линия холода'],
'The cold line':['Sovuq liniyasi','Линия холода'],
'/ 06 looks':['/ 06 ko‘rinish','/ 06 образов'],
'Drag to turn':['Aylantirish uchun suring','Потяните, чтобы повернуть'],
'Previous look':['Oldingi ko‘rinish','Предыдущий образ'],
'Next look':['Keyingi ko‘rinish','Следующий образ'],
'Choose a look':['Ko‘rinishni tanlang','Выберите образ'],
'When the cold':['Sovuq','Когда холод'],
'hits, everything':['urilganda, hamma','накрывает, всё'],
'else goes <b>quiet</b>':['narsa <b>jimib qoladi</b>','остальное <b>затихает</b>'],
'“The cold doesn’t hurt. It reduces what you feel.”':['“Sovuq og‘ritmaydi. U his qilishingizni kamaytiradi.”','«Холод не причиняет боль. Он приглушает ощущения.»'],
'Ice-blue puffer jacket, unzipped and floating':['Muz rangidagi puxovik, ochiq holda havoda suzib turibdi','Ледяно-голубой пуховик, расстёгнутый, парит в воздухе'],
'Add Aurora puffer to cart':['Aurora puxovigini savatga qo‘shish','Добавить пуховик Aurora в корзину'],
'[ Temperature ]':['[ Harorat ]','[ Температура ]'],
'[ Drops fast here ]':['[ Bu yerda tez tushadi ]','[ Здесь быстро падает ]'],
'[ Reaction time ]':['[ Reaksiya vaqti ]','[ Время реакции ]'],
'[ Becomes silent ]':['[ Jim bo‘lib qoladi ]','[ Становится тихо ]'],
'You don’t feel':['Siz sovuqni his qilmaysiz,','Вы не чувствуете холод,'],
'cold you feel less':['kamroq his qilasiz','вы чувствуете меньше'],
'Jacket Market was born in the cold. Not as a trend, but as a response.':['Jacket Market sovuqda tug‘ilgan. Moda sifatida emas, balki javob sifatida.','Jacket Market родился на морозе. Не как тренд, а как ответ.'],
'For those who climb. Not for the crowd.':['Toqqa chiqadiganlar uchun. Olomon uchun emas.','Для тех, кто поднимается. Не для толпы.'],
'Made for height':['Balandlik uchun yaratilgan','Создано для высоты'],
'Forged to last':['Uzoq xizmat qilish uchun yaratilgan','Выковано надолго']
};

function T(s,v){
 var r=s;
 if(LI!==undefined){var d=D[s];if(d&&d[LI]!=null)r=d[LI]}
 if(v&&typeof v==='object')r=r.replace(/\{(\w+)\}/g,function(m,k){return k in v?v[k]:m});
 return r;
}
/* "item / items" in the right form for each language */
T.items=function(n){
 if(lang==='uz')return'ta mahsulot';
 if(lang==='ru'){var a=n%10,b=n%100;return a===1&&b!==11?'товар':(a>=2&&a<=4&&(b<12||b>14))?'товара':'товаров'}
 return n===1?'item':'items';
};
function locale(){return lang==='uz'?'uz-Latn-UZ':lang==='ru'?'ru-RU':'en-GB'}

/* static HTML: data-t="" translates text, data-ta="attr" translates that attribute */
function apply(root){
 [].slice.call((root||document).querySelectorAll('[data-t]')).forEach(function(e){e.textContent=T(e.textContent.trim())});
 [].slice.call((root||document).querySelectorAll('[data-ta]')).forEach(function(e){var a=e.getAttribute('data-ta');e.setAttribute(a,T(e.getAttribute(a)))});
}
document.documentElement.lang=lang;
(function(){var t=document.title,m=t.split(' – ');if(m.length===2){document.title=m[1]==='Jacket Market'?T(m[0])+' – Jacket Market':'Jacket Market – '+T(m[1])}})();
apply();

/* language switcher */
var css=document.createElement('style');
css.textContent=[
'.lang{position:relative}',
'.lang-t{display:flex;align-items:center;gap:7px;font:inherit;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--w);background:rgba(243,248,252,.08);border:1px solid var(--line);border-radius:999px;padding:7px 10px 7px 9px;cursor:pointer;transition:background .2s,border-color .2s}',
'.lang-t:hover,.lang.open .lang-t{background:rgba(243,248,252,.18);border-color:rgba(243,248,252,.55)}',
'.lang-t svg{width:15px;height:15px;flex:none}.lang-t .cv{width:10px;height:10px;transition:transform .35s cubic-bezier(.2,.8,.2,1)}.lang.open .cv{transform:rotate(180deg)}',
'.lang-p{position:absolute;right:0;top:calc(100% + 16px);width:208px;padding:6px;background:var(--w);color:var(--ink);border-radius:18px;box-shadow:0 22px 60px rgba(14,28,41,.38),0 2px 0 rgba(255,255,255,.6) inset;transform-origin:calc(100% - 30px) 0;opacity:0;visibility:hidden;transform:translateY(-10px) scale(.9);transition:opacity .22s ease,transform .42s cubic-bezier(.2,1.1,.3,1),visibility 0s .42s;z-index:40;text-transform:none;letter-spacing:0}',
'.lang.open .lang-p{opacity:1;visibility:visible;transform:none;transition-delay:0s}',
'.lang-p::before{content:"";position:absolute;right:22px;top:-6px;width:14px;height:14px;background:var(--w);border-radius:3px;transform:rotate(45deg)}',
'.lang-h{position:relative;margin:0;padding:8px 10px 6px;font-size:9px;letter-spacing:.12em;text-transform:uppercase;color:#6b8199}',
'.lang-p button{position:relative;display:flex;align-items:center;gap:12px;width:100%;font:inherit;font-size:14px;color:var(--ink);background:none;border:0;border-radius:12px;padding:9px 10px;text-align:left;cursor:pointer;opacity:0;transform:translateY(-8px);transition:background .2s,opacity .3s ease,transform .4s cubic-bezier(.2,.9,.3,1)}',
'.lang.open .lang-p button{opacity:1;transform:none;transition-delay:0s,calc(var(--i)*55ms + 90ms),calc(var(--i)*55ms + 90ms)}',
'.lang-p button:hover,.lang-p button:focus-visible{background:#e3edf6;outline:0}',
'.lang-p button[aria-checked="true"]{background:#d3e1ee}',
'.lang-p .lc{flex:none;display:grid;place-items:center;width:30px;height:30px;border-radius:9px;background:var(--night);color:var(--w);font-size:10px;letter-spacing:.06em}',
'.lang-p .ln2{flex:1}',
'.lang-p .ck{width:16px;height:16px;flex:none;opacity:0;transform:scale(.4);transition:opacity .25s,transform .3s cubic-bezier(.2,1.4,.4,1)}',
'.lang-p button[aria-checked="true"] .ck{opacity:1;transform:none}',
'@media(max-width:860px){.acct{gap:12px}.lang-p{width:196px}}'
].join('');
document.head.appendChild(css);

window.JM_T=T;
var NAME={uz:'O‘zbekcha',ru:'Русский',en:'English'};
var GLOBE='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 2.7 3.9 5.7 3.9 9s-1.3 6.3-3.9 9c-2.6-2.7-3.9-5.7-3.9-9S9.4 5.7 12 3z"/></svg>';
var CHEV='<svg class="cv" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2.5 4.5L6 8l3.5-3.5"/></svg>';
var CHECK='<svg class="ck" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
window.JM_I18N={lang:lang,langs:LANGS,T:T,locale:locale,apply:apply,
 switcher:function(){return'<div class="lang" id="lang"><button type="button" class="lang-t" id="langT" aria-haspopup="true" aria-expanded="false" aria-controls="langP" aria-label="'+T('Language')+': '+NAME[lang]+'">'+GLOBE+'<span>'+LABEL[lang]+'</span>'+CHEV+'</button>'
  +'<div class="lang-p" id="langP" role="group" aria-label="'+T('Language')+'"><p class="lang-h" aria-hidden="true">'+T('Language')+'</p>'
  +LANGS.map(function(l,i){return'<button type="button" role="radio" aria-checked="'+(l===lang)+'" data-l="'+l+'" lang="'+l+'" style="--i:'+i+'" tabindex="-1"><span class="lc">'+LABEL[l]+'</span><span class="ln2">'+NAME[l]+'</span>'+CHECK+'</button>'}).join('')
  +'</div></div>'},
 set:function(l){if(l===lang||LANGS.indexOf(l)<0)return;try{localStorage.setItem('jm_lang',l)}catch(e){}location.reload()},
 bind:function(root){
  var w=root.querySelector('#lang'),t=root.querySelector('#langT'),items=[].slice.call(w.querySelectorAll('.lang-p button'));
  function open(o,focus){w.classList.toggle('open',o);t.setAttribute('aria-expanded',o);items.forEach(function(b){b.tabIndex=o?0:-1});if(o&&focus)(items.filter(function(b){return b.dataset.l===lang})[0]||items[0]).focus()}
  t.onclick=function(){open(!w.classList.contains('open'))};
  items.forEach(function(b){b.onclick=function(){if(b.dataset.l===lang){open(false);t.focus();return}items.forEach(function(x){x.setAttribute('aria-checked',x===b)});setTimeout(function(){window.JM_I18N.set(b.dataset.l)},260)}});
  document.addEventListener('pointerdown',function(e){if(w.classList.contains('open')&&!w.contains(e.target))open(false)});
  document.addEventListener('keydown',function(e){if(!w.classList.contains('open'))return;
   if(e.key==='Escape'){open(false);t.focus()}
   else if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();var i=items.indexOf(document.activeElement);i=(i+(e.key==='ArrowDown'?1:-1)+items.length)%items.length;items[i].focus()}});
  t.addEventListener('keydown',function(e){if(e.key==='ArrowDown'){e.preventDefault();open(true,true)}});
 }
};
})();
