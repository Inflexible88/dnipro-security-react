import React from 'react';
import { Header, Slider, Services, About, UserForm, Adnvantages, Footer } from './components';

const anvantagesArr = [
  {text: '', title:'100% сохранность охраняемых материальных ценностей.' },
  {text: '', title: 'Обеспечение безопасности Заказчика, членов семьи или сотрудников предприятия.'},
  {text: '', title: 'Поддержание профессионального уровня охраны на протяжении всего срока действия договора.' },
  {text: '', title: 'Гарантированную конфиденциальность полученной информации.'},
]

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Services />
      <About />
      <UserForm />
      <Adnvantages details={anvantagesArr}/>
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
