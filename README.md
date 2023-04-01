# Webpack-tutorial

1. - Створюємо package.json - npm init -y
2. Додаємо вебпак в проект - npm install webpack webpack-cli --save-dev
3. Створюємо файл конфігурації вебпаку webpack.config.js
4. Стандартні налаштування беремо з документації
+ додаємо mode: 'development', \ або ж mode: 'production'
5. В package.json додаємо скрипт - "dev": "webpack" / або ж можна додати --mode=development
6. Робимо перший білд - npm run build
___________________ Webpack-dev-server
1) Встановлюємо  - npm install --save-dev webpack webpack-dev-server
2) Редагуємо скрипт на - "dev": "webpack-dev-server --mode=development",