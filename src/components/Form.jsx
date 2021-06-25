import React from 'react';

function Form() {
  return (
    <section class="form">
      <div class="container">
        <div class="form__inner">
          <div class="form__content">
            <div class="form__title-box">
              <div class="form__title">Получить Консультацию</div>
              <div class="form__text">Комплексный подход к обеспечению безопасности</div>
            </div>
            <div class="form__box">
              <form action="http://localhost:3002/bot" method="POST">
                <div class="form__box-inner">
                  <div class="form__box-left">
                    <label for="name">
                      Имя
                      <input type="text" name="name" id="name" />
                    </label>
                    <label for="email">
                      E-mail
                      <input type="email" name="email" id="email" />
                    </label>
                    <label for="tel">
                      Контактный телефон
                      <input type="tel" name="pnone" id="pnone" />
                    </label>
                  </div>
                  <div class="form__box-right">
                    <label for="msg">
                      Сообщение
                      <textarea name="msg" id="msg"></textarea>
                    </label>
                    <button class="default-btn" type="submit">
                      Получить консультацию
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;
