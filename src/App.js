import React from 'react';
import { Header, Slider, Services, About, Form, Adnvantages, Footer } from './components';

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Services />
      <About />
      <Form />
      <Adnvantages />
      <Footer addressText="Днiпро, вулиця Краснопільська, 12"/>
    </>
  );
}

export default App;
