import React from 'react';
import { Route } from 'react-router-dom';
import { Header, Footer } from './components';
import { Home } from './pages';
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer } from "react-toastify";

if (typeof window !== "undefined") {
  injectStyle();
}

const phone = '+38 (068) 975 12 12';
const email = 'tov.dniprobezpeka@gmail.com';
const menuItems = { '/': 'Главная', '#about': 'О компании', '#services': 'Услуги', '#footer': 'Контакты' };

function App() {
  return (
    <>
      <Header menuItems={menuItems} phone={phone} email={email} />
      <ToastContainer />

      <Route path="/" component={Home} exact />

      <Footer
        phone={phone}
        email={email}
        addressText="Днiпро, вулиця Краснопільська, 12"
        title="Комплексные услуги охраны"
        text="Комплексные услуги охраны..."
      />
    </>
  );
}

export default App;
