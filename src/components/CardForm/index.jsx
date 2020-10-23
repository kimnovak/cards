import React from 'react';
import { TextField, InputLabel, Button } from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers'
import StripeText from '@components/StripeText'

function CardForm({
    name,
    cardNumber,
    expiresOn,
    handleCardNumberChange,
    handleNameChange,
    handleExpiresOnChange,
    saveCard,
}) {
    return (
        <form>
            <InputLabel>
                Name
            </InputLabel>
            <TextField
                error={!name}
                fullWidth
                required
                id="standard-error-helper-text"
                variant="outlined"
                helperText={`${!name ? 'Name is required' : ''}`}
                value={name}
                onChange={handleNameChange}
            />
            <InputLabel>
                Card Number
                </InputLabel>
            <StripeText
                cardNumber={cardNumber}
                handleCardNumberChange={handleCardNumberChange}
            />
            <InputLabel>
                Expires On:
            </InputLabel>
            <DatePicker
                views={["year", "month"]}
                label=""
                helperText=""
                error={false}
                minDate={new Date()}
                value={expiresOn}
                onChange={handleExpiresOnChange}
            />
            <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={saveCard}
            >
                Save
            </Button>
        </form>
    )
}

export default React.memo(CardForm);