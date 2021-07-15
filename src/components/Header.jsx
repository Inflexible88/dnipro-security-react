import React from 'react';
import logoPng from '../img/logo.png';

function Header({ menuItems, phone, email }) {
  return (
    <header className="header" id="header">
      <div className="header__top">
        <div className="container">
          <div className="header__contacts">
            <a className="header__phone" href={`tel:${phone.replace('/s/g', '')}`}>
              {phone}
            </a>
            <a className="header__email" href={`mailto:${email}`}>
              {email}
            </a>
            <a href="#form" className="header__btn">
              Бесплатная консультация
            </a>
          </div>
        </div>
      </div>
      <div className="header__content">
        <div className="container">
          <div className="header__content-inner">
            <div className="header__logo">
              <a href="/">
                <img width="145" height="23" src={logoPng} alt="logo" />
              </a>
            </div>
            <nav className="menu">
              <div className="header__btn-menu">
                <span className="icon-bars"></span>
              </div>
              <ul>
                {menuItems &&
                  Object.entries(menuItems).map(([key, value]) => (
                    <li>
                      <a href={key}>{value}</a>
                    </li>
                  ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
