import React from 'react';

const btnTitle = 'Бесплатная консультация';

function Footer({ phone, email, addressText, title, text }) {
  return (
    <footer className="footer" id="footer">
      <div className="footer__content">
        <div className="container">
          <div className="footer__inner">
            <div className="footer__info">
              <div className="footer__title">{title}</div>
              <div className="footer__text">{text}</div>
              <a href="#form" className="header__btn">
                {btnTitle}
              </a>
              <ul className="footer__list">
                <li>
                  <a className="footer__phone" href={`tel:${phone.replace('/s/g', '')}`}>
                    {phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${email}`}>{email}</a>
                </li>
                <li>
                  <span
                    className="footer__adress">{addressText}
                  </span>
                </li>
              </ul>
            </div>
            <div className="footer__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10593.570946277814!2d34.98588584268719!3d48.41060399465788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dbe4b75a283cad%3A0x2b760ad3e5529cc8!2z0LLRg9C70LjRhtGPINCa0YDQsNGB0L3QvtC_0ZbQu9GM0YHRjNC60LAsIDEyLCDQlNC90ZbQv9GA0L4sINCU0L3RltC_0YDQvtC_0LXRgtGA0L7QstGB0YzQutCwINC-0LHQu9Cw0YHRgtGMLCDQo9C60YDQsNGX0L3QsCwgNDkwMDA!5e0!3m2!1suk!2sus!4v1624563774685!5m2!1suk!2sus"
                width="600"
                height="450"
                title="corp_address"
                styles="border: 0"
                allowfullscreen=""
                loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copy">
        <div className="container">
          <div>© 2021 Inflexible Site Production</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
