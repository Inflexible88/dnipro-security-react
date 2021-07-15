import React from 'react';

export default function Advantage({ title, text }) {
  return (
    <div className="advantages-item">
      <div className="advantages__title">{title}</div>
      <div className="advantages__text">{text}</div>
    </div>
  );
}
