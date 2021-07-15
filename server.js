const express = require('express');
const path = require('path');
const TelegramApi = require('node-telegram-bot-api');

const app = express();
const PORT = process.env.PORT || 3001;
const chatId = -1001582516206;
const token = '1893426710:AAEfP3aWYYsSzrU6xLkQW7aeR4j7VflichU';
const bot = new TelegramApi(token, { polling: true });

app.use(express.static('build'))
app.use(express.json());

app.get('/',  (req, res) => {
  const index = path.resolve(__dirname, 'build', 'index.html');
  res.sendFile(index);
});

app.post('/bot', (req, res) => {
  try {
    const { topic = '', name = '', email = '', phone = '', msg = '' } = req.body;
    // console.log(`Имя: ${req.body.name} Телефон: ${req.body.phone}`);
    // const topic = 'Охрана' 
    // const name = 'Алексей' 
    // const email = 'dsdf@mail.ru' 
    // const phone = '9645654654' 
    // const msg = 'sdfsdfds'
    bot.sendMessage(
      chatId,
      `Тема: ${topic === '' ? 'Вопрос' : `Заказ - "${topic}"`} \nОт: ${name}${
        phone ? '\nТелефон: ' + phone : ''
      } ${email !== '' ? '\nEmail: ' + email : ''} ${msg !== '' ? '\nВопрос: ' + msg : ''}`,
    );
  } catch (e) {
    console.log(`Что-то пошло не так. Телеграмм бот приказал долго жить...`);
  } finally {res.send(req.body);}
  
});




app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
