import React from 'react';
import Modal from 'react-modal';
import Truncate from 'react-truncate';
import { PhoneNameForm } from '../components';
import closeIcon from '../img/close.svg';

function ServiceItem({ icon, title, subtitle, details }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="services__item">
      <img width="57" height="54" src={icon} alt="" />
      <div className="services__item-title">{title}</div>
      <div className="services__item-text">
        <Truncate
          lines={8}
          children={details()}
          ellipsis={
            <span className="show-more" onClick={openModal}>
              ...еще
            </span>
          }>
          {}
        </Truncate>
      </div>
      <div className="services__item-btn">
        <Modal
          closeTimeoutMS={200}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="Modal"
          overlayClassName="Overlay">
          <div className="modal__wrapper">
            <img className="modal__close" src={closeIcon} onClick={closeModal} alt="close"></img>
            <div className="modal__body">{details && <>{<div><h1>{subtitle}</h1></div>}{details()}</>}</div>
            <div className="modal__footer">
              <PhoneNameForm withSubmit={true} type={title} />
            </div>
          </div>
        </Modal>
        <button className="default-btn" onClick={() => openModal()}>
          Заказать
        </button>
      </div>
    </div>
  );
}

export default ServiceItem;
