import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <section class="about" id="about">
      <div class="container">
        <div class="about__inner">
          <div class="about__title">О компании</div>
          <div class="about__text">
            Специализация группы компаний заключается в оказании охранных услуг. Однако для
            достижения наилучшего результата нашими сотрудниками постоянно проводятся исследования
            современных технологий и принципов обеспечения безопасности, что позволяет нам не
            останавливаться на достигнутом, и стремится к лучшему.
          </div>
          <Link to="/" class="about__btn default-btn">
            Узнать больше
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
