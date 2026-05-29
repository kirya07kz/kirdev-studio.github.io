// База данных программ KirDev Studio для клиентской части
const PROGRAMS = [
  {
    "id": 1,
    "name": "AutoBot Pro",
    "description": "Мощный бот для автоматизации рутинных задач на ПК с использованием машинного зрения.",
    "full_description": "AutoBot Pro — это флагманский продукт KirDev Studio. Мы создали его для того, чтобы навсегда избавить вас от однотипных действий за компьютером. Благодаря продвинутым алгоритмам машинного зрения, бот распознает элементы на экране так же, как человек. Он абсолютно безопасен и не внедряется в память других процессов.",
    "features": [
      "Машинное зрение для точного клика по кнопкам.",
      "Запись макросов мыши и клавиатуры без навыков программирования.",
      "Полная безопасность и приватность (работает локально).",
      "Поддержка Windows 10/11."
    ],
    "screenshots": ["static/screenshots/autobot_1.jpg", "static/screenshots/autobot_2.jpg"],
    "version": "1.2.0",
    "link": "autobot_pro.zip",
    "cover_image": "static/covers/autobot_cover.jpg",
    "category": "ПК",
    "download_count": 142 // Добавим статическое значение для красоты на GitHub Pages
  },
  {
    "id": 2,
    "name": "KirDev Cleaner",
    "description": "Легковесная утилита для быстрой очистки системы от временных файлов и кэша.",
    "full_description": "В отличие от других клинеров, KirDev Cleaner не загружает систему фоновыми процессами и не показывает рекламу. Это кристально чистая утилита, которая делает ровно то, что заявлено — освобождает гигабайты места на жестком диске за пару кликов.",
    "features": [
      "Удаление системного мусора и кэша браузеров.",
      "Весит меньше 5 МБ и работает моментально.",
      "Не требует установки (Portable версия).",
      "Открытый алгоритм очистки."
    ],
    "screenshots": ["static/screenshots/cleaner_1.jpg"],
    "version": "2.0.1",
    "link": "kirdev_cleaner.zip",
    "cover_image": "static/covers/cleaner_cover.jpg",
    "category": "ПК",
    "download_count": 89
  },
  {
    "id": 3,
    "name": "Mobile Manager",
    "description": "Удобное приложение-компаньон для смартфонов для синхронизации с ПК.",
    "full_description": "Mobile Manager объединяет ваш ПК и смартфон в единую экосистему. Передавайте файлы по зашифрованному Wi-Fi каналу, получайте уведомления прямо на экран монитора и управляйте музыкой удаленно. Никакие данные не проходят через облако — только прямое P2P соединение.",
    "features": [
      "Зашифрованная передача файлов без интернета.",
      "Трансляция уведомлений с телефона на ПК.",
      "Поддержка Android и iOS.",
      "Полная анонимность и безопасность соединения."
    ],
    "screenshots": ["static/screenshots/manager_1.jpg", "static/screenshots/manager_2.jpg", "static/screenshots/manager_3.jpg"],
    "version": "1.0.0-beta",
    "link": "mobile_manager.zip",
    "cover_image": "static/covers/manager_cover.jpg",
    "category": "Android",
    "download_count": 57
  }
];
