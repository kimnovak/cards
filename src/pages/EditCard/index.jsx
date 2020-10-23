import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, withRouter } from 'react-router-dom';
import { cardSelector } from '@selectors/cards';
import AddCard from '@pages/AddCard';


function EditCard() {
    const { id } = useParams();
    const card = useSelector(cardSelector(id));

    return (
        <AddCard 
            card={card}
        />
    )
}

export default React.memo(withRouter(EditCard));