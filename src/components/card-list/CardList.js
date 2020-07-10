import React from 'react';
import Card from './card';
import './CardList.scss';

const CardList = ({ cards, readOnly, selectCardHandler }) => (
  <div className="card-wrapper">
    {cards.map(({ caption, text, id }) => {
      return (
        <Card
          key={id}
          className="card"
          caption={caption}
          readOnly={readOnly}
          selectHandler={() => selectCardHandler(id)}
        >
          {text}
        </Card>
      );
    })}
  </div>
);

export default CardList;
