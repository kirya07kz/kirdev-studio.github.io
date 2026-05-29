// База данных программ KirDev Studio для клиентской части
const PROGRAMS = [
  {
    "id": 1,
    "name": "Pulse PC",
    "description": "Программа для удаленного управления вашим компьютером с помощью Telegram-бота.",
    "full_description": "Pulse PC — это программа для удаленного управления вашим компьютером с помощью Telegram-бота. Программа оснащена удобным графическим интерфейсом для настройки токена и безопасным фоновым режимом работы.",
    "features": [
      "Безопасность: Полный контроль через Telegram. Уведомления о разблокировке ПК и низком заряде батареи.",
      "Управление окнами: Сворачивание, разворачивание, закрытие окон (Alt+F4), а также скриншоты экрана.",
      "Работа с файлами: Загрузка файлов на ПК и скачивание файлов с ПК.",
      "Запуск программ: Возможность настроить список быстрых команд для запуска или закрытия нужных программ. Умный поиск и принудительное закрытие зависших процессов.",
      "Управление мультимедиа: Пауза/Воспроизведение, регулировка звука и переключение треков."
    ],
    "screenshots": [
      "static/images/Pulse_PC/main.png",
      "static/images/Pulse_PC/add_programs.png",
      "static/images/Pulse_PC/console.png",
      "static/images/Pulse_PC/token_admin.png",
      "static/images/Pulse_PC/tray.png"
    ],
    "version": "1.0.0",
    "link": "https://github.com/kirya07kz/Pulse-PC/releases/download/pc/Pulse.PC.Setup.exe",
    "cover_image": "static/images/Pulse_PC/main.png",
    "category": "ПК",
    "download_count": 218
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
