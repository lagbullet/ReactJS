import React from 'react';
import Card from '../card';
import Header from '../header';
import './App.scss';

const App = () => {
  return (
    <div className="page">
      <Header>Header</Header>
      <div className="cardWrapper">
        <Card className="card" caption="Caption">
          Text
        </Card>
      </div>
    </div>
  );
};

export default App;
