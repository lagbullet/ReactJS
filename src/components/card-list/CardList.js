import React from 'react';
import Card from './card';
import './CardList.scss';
import { Redirect } from 'react-router-dom';

const CardList = ({ cards, readOnly, selectCardHandler, editCardHandler }) => {
  const redirectToCard = ({ caption, text, id }) => (
    <Redirect
      to={{
        pathname: '/card/' + id,
        caption: caption,
        children: text,
        readOnly: readOnly,
      }}
    />
  );
  return (
    <div className="card-wrapper">
      {cards.map(({ caption, text, id }) => {
        return (
          <Card
            key={id}
            caption={caption}
            readOnly={readOnly}
            selectHandler={() => selectCardHandler(id)}
            redirectToCard={redirectToCard({ id: id, caption: caption, text: text })}
            editHandler={(caption, children) => editCardHandler(id, caption, children)}
          >
            {text}
          </Card>
        );
      })}
    </div>
  );
};

export default CardList;
