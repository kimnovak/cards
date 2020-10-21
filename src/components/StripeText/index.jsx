import React from 'react'
import { TextField, makeStyles, Container } from '@material-ui/core';

const REQUIRED_CARD_NUMBER_LENGTH = 16;


const useStyles = makeStyles({
    input: {
        marginLeft: '8px'
    },
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: 0
    }
})

function StripeInput({cardNumber, handleCardNumberChange}) {
    const { input, container } = useStyles();
    const isValid = Object.values(cardNumber).join().length >= REQUIRED_CARD_NUMBER_LENGTH;
    return (
        <Container className={container}>
            <TextField
                error={cardNumber['first'].length < 4}
                required
                id="standard-error-helper-text"
                variant="outlined"
                helperText={`${!isValid ? 'Enter 16 digits' : ''}`}
                value={cardNumber['first']}
                onChange={handleCardNumberChange('first')}
            />
            <TextField
                error={cardNumber['second'].length < 4}
                className={input}
                required
                id="standard-error-helper-text"
                variant="outlined"
                helperText=""
                value={cardNumber['second']}
                onChange={handleCardNumberChange('second')}
            />
            <TextField
                error={cardNumber['third'].length < 4}
                className={input}
                required
                id="standard-error-helper-text"
                variant="outlined"
                helperText=""
                value={cardNumber['third']}
                onChange={handleCardNumberChange('third')}
            />
            <TextField
                error={cardNumber['fourth'].length < 4}
                className={input}
                required
                id="standard-error-helper-text"
                variant="outlined"
                value={cardNumber['fourth']}
                helperText=""
                onChange={handleCardNumberChange('fourth')}
            />
        </Container>
    )
}
export default React.memo(StripeInput)