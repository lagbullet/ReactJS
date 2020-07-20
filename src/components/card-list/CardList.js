import React from 'react';
import Card from './card';
import './CardList.scss';

const CardList = ({ cards, readOnly, selectCardHandler, editCardHandler }) => (
  <div className="card-wrapper">
    {cards.map(({ caption, text, id }) => {
      return (
        <Card
          key={id}
          caption={caption}
          readOnly={readOnly}
          selectHandler={() => selectCardHandler(id)}
          editHandler={(caption, children) => editCardHandler(id, caption, children)}
        >
          {text}
        </Card>
      );
    })}
  </div>
);

export default CardList;
