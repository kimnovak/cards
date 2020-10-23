import React, { useState } from 'react';
import CardFormUI from '@components/CardForm';
import Card from '@components/Card';
import { Container, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';


const CARD_NUMBER_LENGTH = 16;

let isnum = /^\d*$/
const possibleStartingDigits = ['4', '5', '6'];

const useStyles = makeStyles({
    container: {
        maxWidth: '440px',
        padding: 0
    }
})

function CardForm({ actionType, initialCardState }) {
    const { container } = useStyles();
    const [name, setName] = useState(initialCardState?.name);
    const [cardNumber, setCardNumber] = useState(initialCardState?.cardNumber);
    const [expiresOn, setExpiresOn] = useState(initialCardState?.expiresOn);
    const [validExpDate, setValidExpDate] = useState(true);

    const dispatch = useDispatch();
    const history = useHistory();

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const saveCard = () => {
        if (!validExpDate || !name || Object.values(cardNumber).join().length < CARD_NUMBER_LENGTH) return;
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

    const handleExpiresOnChange = (event) => {
        const month = event.target.value?.substring?.(0, 2);
        const year = event.target.value?.substring?.(2, 4);
        if (event.target.value.length > 4 || event.target.value?.[0] > 1 || (month > 12)) return;
        const now = new Date();
        const monthNow = now.getMonth() + 1;
        const yearNow = now.getFullYear().toString().substring(2, 4);
        if (event.target.value.length >= 4 && year < yearNow) {
            setValidExpDate(false)
        } else if (event.target.value.length >= 4 && parseInt(year) === parseInt(yearNow) && month < monthNow) {
            setValidExpDate(false)
        } else {
            setValidExpDate(true)
        }

        setExpiresOn(event.target.value);
    }

    const handleCardNumberChange = (key) => (event) => {
        if (!event.target.value.match(isnum) || event.target.value.length > 4) return
        if (key === 'first' && !possibleStartingDigits.includes(event.target.value[0])) return
        setCardNumber({
            ...cardNumber,
            [key]: event.target.value
        })
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
                    validExpDate={validExpDate}
                />
            </Container>
        </>
    )
}

export default React.memo(CardForm);