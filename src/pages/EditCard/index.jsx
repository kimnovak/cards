import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, withRouter } from 'react-router-dom';
import CardFormContainer from '@containers/CardForm'
import { cardSelector } from '@selectors/cards';
import { EDIT_CARD } from '@actionTypes/cards';


function EditCard() {
    const { id } = useParams();
    const card = useSelector(cardSelector(id));

    return (
        <CardFormContainer
            actionType={EDIT_CARD}
            initialCardState={card}
        />
    )
}

export default React.memo(withRouter(EditCard));