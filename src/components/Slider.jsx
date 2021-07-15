import React from 'react';
import SliderItem from './SliderItem';

function Slider({ data }) {
  return (
    <section className="slider">
      <div className="container">
        <div className="slider__inner">
          {data && data.map((item) => <SliderItem title={item.title} text={item.text} />)}
        </div>
      </div>
    </section>
  );
}

export default Slider;
