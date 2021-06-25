import React from 'react';
import { Header, Slider, Services, About, UserForm, Adnvantages, Footer } from './components';

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Services />
      <About />
      <UserForm />
      <Adnvantages />
      <Footer
        phone="+38 (068) 975 12 12"
        addressText="Днiпро, вулиця Краснопільська, 12"
        title="Комплексные услуги охраны"
        text="Комплексные услуги охраны . Комплексные услуги охраны . Комплексные услуги охраны..."
      />
    </>
  );
}

export default App;
