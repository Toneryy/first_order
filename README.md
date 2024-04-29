# ID Aho

### FIGMA: https://pixso.net/app/editor/NYzBqztyYjIpUWo2d73lLQ?icon_type=1&page-id=0%3A1

### Для запуска Frontend сервера:
1) Установить последнюю стабильную версиию Node-js
2) В папке с проектом прописать команду '$ node server.js' 
3) Перейти на указанный в терминале хост

## Далее на выбор можно запустить либо backend с админ панелью, которая использует бд на localhost, либо Emailjs service

### Для запуска Backend сервера:
1) Установленый Python 3.12.0 и Django 5.0.2
2) Установка базы данных в backend/backend/settins.py/[DATABASE]
3) Прописать правильные url хоста в urls.py
4) В терминале в первой папке backend прописать '$ py manage.py runserver'
5) Для администрирования создаётся пользователь через комманду '$ py manage.py createsuperuser' и переход по http://[host]:[port]/admin

### Для запуска Emailjs нужно:
1) Используется **https://www.emailjs.com/** и настройка идёт по инструкции официальной документации
2) Создаётся аккаунт, Email services и Email Templates по необходимости
3) Publick key берётся из https://dashboard.emailjs.com/admin/account и прописывается в index.html в функции для инициализации (135-140)
4) В файле emailService.js меняются значения принимаемых параметров метода emailjs.send(Service ID, Template ID, params) на необходимые
5) Необходима подкачка node модулей через '$ npm install' ('$ npm install --save @emailjs/browser') и запуск приложения на NodeJS
