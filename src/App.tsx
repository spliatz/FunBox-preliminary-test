import React, {useState} from 'react';
import Tittle from './components/Tittle';
import CardList from './components/CardList';
import * as CONST from './const';
import {Card} from './types';

const App = () => {

    const [cards, setCards] = useState<Card[]>(CONST.initialCard)

  return (
   <div className="wrapper">
     <Tittle text="Ты сегодня покормил кота?" />
     <CardList cards={cards} setCards={setCards}/>
   </div>
  );
}

export default App;
