import React, { useState } from 'react';
import CardFormUI from '@components/CardForm';
import Card from '@components/Card';
import { Container, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
    CARD_NUMBER_LENGTH,
    onlyDigitsRegex,
    possibleCardNumberFirstDigits
} from '@constants/cards';
import useCardNumber from '@hooks/useCardNumber';


const useStyles = makeStyles({
    container: {
        maxWidth: '440px',
        padding: 0
    }
})

function CardForm({ actionType, initialCardState }) {
    const { container } = useStyles();
    const [name, setName] = useState(initialCardState?.name);
    const [cardNumber, handleCardNumberChange, validCardNumber] = useCardNumber(initialCardState?.cardNumber);
    const [expiresOn, setExpiresOn] = useState(initialCardState?.expiresOn);

    const dispatch = useDispatch();
    const history = useHistory();

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const saveCard = () => {
        if (!name || !validCardNumber) return;
        const newCard = {
            name,
            cardNumber,
            expiresOn
        }
        dispatch({
            type: actionType,
            payload: newCard
        })
        history.push('/cards');
    }

    const handleExpiresOnChange = (date) => {
        setExpiresOn(date);
    }

    return (
        <>
            <Card
                name={name}
                cardNumber={cardNumber}
                expiresOn={expiresOn}
            />
            <Container className={container}>
                <CardFormUI
                    saveCard={saveCard}
                    name={name}
                    cardNumber={cardNumber}
                    expiresOn={expiresOn}
                    handleNameChange={handleNameChange}
                    handleCardNumberChange={handleCardNumberChange}
                    handleExpiresOnChange={handleExpiresOnChange}
                    validCardNumber={validCardNumber}
                />
            </Container>
        </>
    )
}

export default React.memo(CardForm);