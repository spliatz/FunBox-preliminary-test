import React from 'react';

interface Props {
    text: string;
}

const Tittle: React.FC<Props> = ({text}) => {
    return (
        <h1 className="tittle">{text}</h1>
    );
};

export default Tittle;