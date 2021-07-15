import React from 'react';
import { ServiceItem } from './';

function Services({data}) {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__top">
          <div className="services__title-box">
            <div className="services__title">Наши Услуги</div>
            <div className="services__text">
              обезопасить компанию от неприятных внешних посягательств, выявить недобросовестных
              работников и принять соответствующие меры. Сотрудниками нашего охранного предприятия
              будет выполнена вся необходимая работа по охране производства
            </div>
          </div>
        </div>
        <div className="services__items">
          {data &&
            data.map((item) => {
              return <ServiceItem {...item} />;
            })}
        </div>
      </div>
    </section>
  );
}

export default Services;
