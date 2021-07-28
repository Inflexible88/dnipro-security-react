import React from 'react';
import { Field, Form, Formik } from 'formik';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
import { validateUsername, validatePhoneNumber, validateEmail } from '../utils/validation';

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
                initialValues={{ name: '', phone: '', email: '', msg: '' }}
                validationSchema={Yup.object().shape({
                  name: Yup.string().required('First Name is required'),
                  phone: Yup.string().required('Phone is required'),
                  msg: Yup.string().required('Message is required'),
                })}
                onSubmit={({ name, email, phone, msg }, { setSubmitting, resetForm }) => {
                  axios
                    .post('/bot', { name, email, phone, msg })
                    .then(() => {
                      toast.dark('Запрос отправлен!', {
                        position: 'top-right',
                        autoClose: 5000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                      });
                    })
                    .then(() => {
                      resetForm({});
                    });
                }}>
                {({ errors, touched, validateField, validateForm }) => (
                  <Form>
                    <div className="form__box-inner">
                      <div className="form__box-left">
                        <label for="name">Имя</label>
                        <Field
                          type="text"
                          name="name"
                          placeholder="Введите Ваше имя"
                          validate={validateUsername}
                          className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')}
                        />

                        <label for="tel">Контактный телефон</label>
                        <Field
                          type="tel"
                          name="phone"
                          placeholder="Введите Ваш телефон"
                          validate={validatePhoneNumber}
                          className={'form-control' + (errors.phone && touched.phone ? ' is-invalid' : '')}
                        />

                        <label for="email">E-mail</label>
                        <Field
                          type="email"
                          name="email"
                          placeholder="Введите Ваш имейл"
                          validate={validateEmail}
                          className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')}
                        />
                      </div>
                      <div className="form__box-right">
                        <label for="msg">Сообщение</label>
                        <Field
                          type="tel"
                          name="msg"
                          placeholder="Введите Ваш вопрос"
                          component="textarea"
                          validate={validateUsername}
                          className={'form-control' + (errors.msg && touched.msg ? ' is-invalid' : '')}
                        />

                        <button
                          className="default-btn"
                          type="submit" onClick={() => validateForm().then(() => console.log('form check'))}>
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
