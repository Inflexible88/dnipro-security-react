import React from 'react';
import { Route } from 'react-router-dom';
import { Header, Footer } from './components';
import { Home } from './pages';

function App() {
  return (
    <>
      <Header />

      <Route path="/" component={Home} exact/>
      {/* <Route path="/service" component={ServicePage} /> */}

      <Footer
        phone="+38 (068) 975 12 12"
        addressText="Днiпро, вулиця Краснопільська, 12"
        title="Комплексные услуги охраны"
        text="Комплексные услуги охраны..."
      />
    </>
  );
}

export default App;
