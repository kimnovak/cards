import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container, makeStyles } from '@material-ui/core';
import Card from '@components/Card';
import CardFormContainer from '@containers/CardForm';
import CardForm from '@components/CardForm';
import { ADD_CARD } from '@actionTypes/cards';

const useStyles = makeStyles({
    container: {
        maxWidth: '440px',
        padding: 0
    }
})


function AddCard() {
    const { container } = useStyles();
    const [name, setName] = useState('');
    const [cardNumber, setCardNumber] = useState({
        first: '',
        second: '',
        third: '',
        fourth: ''
    });
    const [expiresOn, setExpiresOn] = useState('');
    const [validExpDate, setValidExpDate] = useState(true);

    const dispatch = useDispatch();
    const history = useHistory();

    const saveCard = () => {
        if (!validExpDate || !name || Object.values(cardNumber).join().length < 16) return;
        const card = {
            name,
            cardNumber,
            expiresOn
        }
        dispatch({
            type: ADD_CARD,
            payload: card
        })
        history.push('/cards');
    }

    return (
        <>
            <Card
                name={name}
                cardNumber={cardNumber}
                expiresOn={expiresOn}
            />
            <Container className={container}>
                <CardFormContainer
                    name={name}
                    setName={setName}
                    cardNumber={cardNumber}
                    setCardNumber={setCardNumber}
                    expiresOn={expiresOn}
                    setExpiresOn={setExpiresOn}
                    validExpDate={validExpDate}
                    setValidExpDate={setValidExpDate}
                >
                    {(props) => (
                        <CardForm
                            {...props}
                            saveCard={saveCard}
                        />
                    )}
                </CardFormContainer>
            </Container>
        </>
    )
}

export default React.memo(AddCard);