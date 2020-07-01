import React from 'react';
import Card from '../card/Card';
import Header from '../header/Header';

const App = () => {
    return (
        <div className="page">
            <Header className="header" text="Header"/>
            <Card className="card" caption="Caption" data="Text"/>
        </div>
    );
};

export default App;