import React from 'react';

function SliderItem({ title, text }) {
  return (
    <div className="slider__item">
      <div className="slider__item-content">
        <div className="slider__title">{title}</div>
        <div className="slider__text">{text}</div>
      </div>
    </div>
  );
}

export default SliderItem;
