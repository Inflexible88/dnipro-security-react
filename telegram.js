const express = require('express');
const app = express();
const TelegramApi = require('node-telegram-bot-api');

const PORT = process.env.PORT || 3002;

const chatId = 479285632;
const token = '1893426710:AAEfP3aWYYsSzrU6xLkQW7aeR4j7VflichU';

const bot = new TelegramApi(token, { polling: true });

app.use(express.json());
app.post('/bot', (req, res) => {
  res.send(req.body);
  const { name = '', email = '', phone = '', msg = '' } = req.body;
  console.log(`Имя: ${req.body.name} Телефон: ${req.body.phone}`);
  try {
    bot.sendMessage(
      chatId,
      `От: ${name}\n${phone ? 'Телефон: ' + phone : ''}
      ${email !== '' ? '\nEmail: ' + email : ''} 
      ${msg !== '' ? '\nВопрос: ' + msg : ''}`
    );
  } catch (e) {
    console.log(`Что-то пошло не так. Телеграмм бот приказал долго жить...`);
  }
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
