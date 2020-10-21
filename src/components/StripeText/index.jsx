import React, { useState } from 'react'
import { TextField, makeStyles, Container } from '@material-ui/core';
import theme from '@styles/theme';

const isnum = /^\d*$/


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

    return (
        <Container className={container}>
            <TextField
                required
                id="standard-error-helper-text"
                variant="outlined"
                defaultValue=""
                helperText=""
                value={cardNumber['first']}
                onChange={handleCardNumberChange('first')}
            />
            <TextField
                className={input}
                required
                id="standard-error-helper-text"
                variant="outlined"
                helperText=""
                value={cardNumber['second']}
                onChange={handleCardNumberChange('second')}
            />
            <TextField
                className={input}
                required
                id="standard-error-helper-text"
                variant="outlined"
                helperText=""
                value={cardNumber['third']}
                onChange={handleCardNumberChange('third')}
            />
            <TextField
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