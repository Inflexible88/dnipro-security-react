import React from 'react';
import { Field, Form, Formik } from 'formik';
import axios from 'axios';

function UserForm() {
  return (
    <section className="form" id="form">
      <div className="container">
        <div className="form__inner">
          <div className="form__content">
            <div className="form__title-box">
              <div className="form__title">Получить Консультацию</div>
              <div className="form__text">Комплексный подход к обеспечению безопасности</div>
            </div>
            <div className="form__box">
              <Formik
                initialValues={{ name: '' }}
                onSubmit={({name, email, phone, msg}, actions) => {
                  axios.post('/bot', {name, email, phone, msg})
                }}>
                {() => (
                  <Form>
                    <div className="form__box-inner">
                      <div className="form__box-left">
                        <label for="name">
                          Имя
                          <Field type="text" name="name" placeholder="Введите Ваше имя" />
                        </label>
                        <label for="tel">
                          Контактный телефон
                          <Field type="tel" name="phone" placeholder="Введите Ваш телефон" />
                        </label>
                        <label for="email">
                          E-mail
                          <Field type="email" name="email" placeholder="Введите Ваш имейл" />
                        </label>                      
                      </div>
                      <div className="form__box-right">
                        <label for="msg">
                          Сообщение
                          <Field type="tel" name="msg" placeholder="Введите Ваш вопрос" component="textarea" />
                        </label>
                        <button className="default-btn" type="submit">
                          Получить консультацию
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default UserForm;
