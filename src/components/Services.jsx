import React from 'react';

function Services() {
  return (
    <section class="services" id="services">
      <div class="container">
        <div class="services__top">
          <div class="services__title-box">
            <div class="services__title">Наши Услуги</div>
            <div class="services__text">
              обезопасить компанию от неприятных внешних посягательств, выявить недобросовестных
              работников и принять соответствующие меры. Сотрудниками нашего охранного предприятия
              будет выполнена вся необходимая работа по охране производства
            </div>
          </div>
          <div class="services__btn">
            <a href=".services__items"> Показать все услуги </a>
          </div>
        </div>
        <div class="services__items">
          <div class="services__item">
            <img src="img/about-1.png" alt="" />
            <div class="services__item-title">Охрана производства</div>
            <div class="services__item-text">
              Охрана производства является одним из главных направлений нашей деятельности, опираясь
              на высококлассный персонал и богатый опыт, нами разработана целая комплексная система
              по охране производственных предприятий, что в целом позволяет смело заявить о высоком
              уровне предоставляемых нашей компанией услуг.
            </div>
            <div class="services__item-btn">
              <a class="services__item-link" href="#">
                Подробнее
              </a>
              <a data-fancybox data-src="#modal" href="javascript:;" class="default-btn">
                Заказать
              </a>
            </div>
          </div>
          <div class="services__item">
            <img src="img/about-2.png" alt="" />
            <div class="services__item-title">Охрана частных домов</div>
            <div class="services__item-text">
              <span class="text-offset">- Коттеджных поселков</span>
              <br />
              <span class="text-offset">- Коммерческой недвижимости и бизнес-центров</span>
              <br />
              <span class="text-offset">- Банков</span>
              <br />
              <span class="text-offset">- Объектов промышленного типа</span>
              <br />
              <span class="text-offset">- Объектов строительства</span>
              <br />
              <span class="text-offset">- Объектов социально бытового назначения и гостиниц</span>
              <br />
            </div>
            <div class="services__item-btn">
              <a class="services__item-link" href="#">
                Подробнее
              </a>
              <a data-fancybox data-src="#modal" href="javascript:;" class="default-btn">
                Заказать
              </a>
            </div>
          </div>
          <div class="services__item">
            <img src="img/about-3.png" alt="" />
            <div class="services__item-title">ОХРАНА ОБЪЕКТОВ</div>
            <div class="services__item-text">
              <span class="text-offset">- Поддержание общественного порядка</span>
              <br />
              <span class="text-offset">- Охрана объектов частной собственности</span>
              <br />
              <span class="text-offset">- Контрольно-пропускной режим автотранспорта</span>
              <br />
              <span class="text-offset">- Патрулирование территории</span>
              <br />
              <span class="text-offset">- Прибытие группы быстрого реагирования</span>
              <br />
              <span class="text-offset">- Контроль за движением автотранспорта</span>
              <br />
              <span class="text-offset">- Осуществление противопожарных мероприятий</span>
              <br />
              <span class="text-offset">- Визуальный мониторинг объектов 24 часа</span>
              <br />
            </div>
            <div class="services__item-btn">
              <a class="services__item-link" href="#">
                Подробнее
              </a>
              <a data-fancybox data-src="#modal" href="javascript:;" class="default-btn">
                Заказать
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
