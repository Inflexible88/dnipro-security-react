import React from 'react';
import { Field, Form, Formik } from 'formik';
import { validateUsername, validatePhoneNumber } from '../utils/validation';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';

function PhoneNameForm({ withSubmit, type, afterAction }) {
  return (
    <section className="form" id="form">
      <Formik
        initialValues={{ name: '', phone: '' }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required('First Name is required'),
          phone: Yup.string().required('Phone is required'),
        })}
        onSubmit={({ name, phone }) => {
          axios
            .post('/bot', { name, phone, topic: type })
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
            .then(() => afterAction());
        }}>
        {({ errors, touched, validateField, validateForm }) => (
          <Form>
            <div className="form__container">
              <Field
                type="text"
                name="name"
                placeholder="Имя"
                validate={validateUsername}
                className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')}
              />
              <Field
                type="tel"
                name="phone"
                placeholder="Телефон"
                validate={validatePhoneNumber}
                className={errors.phone && touched.phone ? 'is-invalid' : ''}
              />
              {withSubmit && (
                <button className="default-btn" type="submit" onClick={() => validateForm()}>
                  Заказать
                </button>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
}

export default PhoneNameForm;
