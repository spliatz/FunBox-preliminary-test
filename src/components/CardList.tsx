import React from 'react';
import { Card, Dispatch } from '../types';
import CardListItem from './CardListItem';


interface Props {
    cards: Card[];
    setCards: React.Dispatch<React.SetStateAction<Card[]>>
}

const CardList: React.FC<Props> = ({cards, setCards}) => {
    return (
        <div className="card-list">
            {!!cards && cards.map((item: Card, index: number) => {
                return <CardListItem
                    key={index}
                    topParagraph={item.topParagraph}
                    name={item.name}
                    bottom={item.bottom}
                    weight={item.weight}
                    isActive={item.isActive}
                    isSelected={item.isSelected}
                    setCards={setCards}
                    outBody={item.outBody}
                    id={index}
                />
            })}
        </div>
    );
};

export default CardList;