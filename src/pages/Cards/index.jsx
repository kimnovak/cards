import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { cardsSelector } from '@selectors/cards';
import Card from '@components/Card';
import AddCardButton from '@components/AddCardButton';

function Cards() {
    const cards = useSelector(cardsSelector);

    const history = useHistory();

    const addCard = () => {
        history.push('/cards/add');
    }

    const editCard = (card) => () => {
        history.push(`/cards/${card.id}/edit`)
    }

    return (
        <Container>
            <Typography variant="h1" component="h2">
                My cards
            </Typography>
            {cards?.map?.((card, index) => (
                <Card key={index} {...card} onClick={editCard(card)} />
            )
            )}
            <AddCardButton addCard={addCard} />
        </Container>
    )
}

export default React.memo(Cards);