import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useParams, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Container, makeStyles } from '@material-ui/core';
import Card from '@components/Card';
import CardFormContainer from '@containers/CardForm';
import CardForm from '@components/CardForm';
import { EDIT_CARD } from '@actionTypes/cards';
import { cardSelector } from '@selectors/cards';

const useStyles = makeStyles({
    container: {
        maxWidth: '440px',
        padding: 0
    }
})


function EditCard() {
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
    const { id } = useParams();
    const card = useSelector(cardSelector(id));

    useEffect(() => {
        if(!card) return;
        setName(card.name);
        setCardNumber(card.cardNumber)
        setExpiresOn(card.expiresOn)
    }, [card])

    const saveCard = () => {
        if (!validExpDate || !name || Object.values(cardNumber).join().length < 16) return;
        const card = {
            name,
            cardNumber,
            expiresOn
        }
        dispatch({
            type: EDIT_CARD,
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

export default React.memo(withRouter(EditCard));