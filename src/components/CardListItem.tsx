import React, { useState } from 'react';
import { Card } from '../types';
import './CardListItem.scss';

interface Props extends Card {
    setCards: React.Dispatch<React.SetStateAction<Card[]>>;
    id: number;
}

const CardListItem: React.FC<Props> = (
    {
        topParagraph,
        name,
        bottom,
        weight,
        outBody,
        isActive,
        id,
        isSelected,
        setCards,
    }) => {

    const [isHover, setHover] = useState(false)

    const onHoverHandler = () => {
        setHover(prev => !prev)
    }

    const onSelectHandler = () => {
        setCards((prev: Card[]) => [...prev.map((item, index) => {
            if (isActive && id === index) {
                item.isSelected = !isSelected;
                console.log((isSelected));
                return item;
            }
            return item;
        })]);
    };

    return (
        <>
            <div
                className={
                    isActive && isSelected ? 'page-card card is-selected' :
                        isActive ? 'page-card card' : 'page-card card is-disabled'
                }
            >
                <div className="card__body"
                     data-trigger="cardBtn"
                     onClick={onSelectHandler}
                     onMouseOut={onHoverHandler}
                     onMouseOver={onHoverHandler}
                >
                    <header className="card__header">
                        <div className="card__corner"/>
                        <div className="card__rectangle">
                        <span className={isSelected && isHover && 'card__desc selected-hover' || 'card__desc'} data-replace="cardDesc">
                            {(isSelected && isHover && "Котэ не одобряет?") || topParagraph}
                        </span>
                        </div>
                    </header>
                    <div className="card__main">
                        <h2 className="card__heading">{name.split(' ')[0]}
                            <span className="card__feature" data-get="cardFeature">
                            {name.split(' ')[1]} {name.split(' ')[2]}</span>
                        </h2>
                        <ul className="card__list">
                            <li className="card__list-item">
                                {bottom.split(' ')[0] + ' '}
                                {bottom.split(' ')[1]}
                            </li>
                            <li className="card__list-item">
                                {bottom.split(' ')[2] + ' '}
                                {bottom.split(' ')[3] + ' '}
                                {bottom.split(' ')[4] + ' '}
                                {bottom.split(' ')[5] + ' '}
                                {!!bottom.split(' ')[6] && bottom.split(' ')[6] + ''}
                                {!!bottom.split(' ')[7] && bottom.split(' ')[7] + ''}
                            </li>
                        </ul>
                        <img className="card__img" src="images/Cat.png" alt="Котэ"/>
                        <div className="card__circle">
                            <div className="card__weight">
                            <span className="card__amount">
                                {weight.toString().split('.')[0]}
                                {weight.toString().split('.').length > 1 && ','}
                                {weight.toString().split('.').length > 1 && weight.toString().split('.')[1]}
                            </span>
                                <div className="card__measure">кг</div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer
                    className="card__footer"
                    data-replace="cardFooter"
                    data-text="Филе из цыплят с трюфелями в бульоне.">
                    {isActive && isSelected ? outBody :
                        isActive ?
                            <span>Чего сидишь? Порадуй котэ,
                            <span className="card__buy">
                            <a className="card__link"
                               data-trigger="cardBtn"
                               href="javascript://"
                               onClick={onSelectHandler}
                            > купи</a>.</span></span>
                            :
                            'Печалька, с курой закончился.'}
                </footer>
            </div>
        </>
    );
};

export default CardListItem;