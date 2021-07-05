import React from 'react';
import logoPng from '../img/logo.png'


function Header() {
  return (
    <header class="header" id="header">
      <div class="header__top">
        <div class="container">
          <div class="header__contacts">
            <a class="header__phone" href="tel:380689751212">
              +38 (068) 975 12 12
            </a>
            <a class="header__email" href="mailto:tov.dniprobezpeka1@gmail.com">
              tov.dniprobezpeka1@gmail.com
            </a>
            <a href="#form" class="header__btn">
              Бесплатная консультация
            </a>
          </div>
        </div>
      </div>
      <div class="header__content">
        <div class="container">
          <div class="header__content-inner">
            <div class="header__logo">
              <a href="/">
                <img src={logoPng} alt="logo" />
              </a>
            </div>
            <nav class="menu">
              <div class="header__btn-menu">
                <span class="icon-bars"></span>
              </div>
              <ul>
                <li>
                  <a href="/">Главная</a>
                </li>
                <li>
                  <a href="#about">О компании</a>
                </li>
                <li>
                  <a href="#services">Услуги</a>
                </li>
                <li>
                  <a href="#footer">Контакты</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
