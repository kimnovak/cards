import React from 'react';

let isnum = /^\d*$/

function CardForm({ children, ...card }) {
    const { 
        name, 
        cardNumber, 
        expiresOn ,
        setName,
        setCardNumber,
        setExpiresOn
    } = card;

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleExpiresOnChange = (event) => {
        if(!event.target.value?.match(isnum)) return;
        setExpiresOn(event.target.value);
    }

    const handleCardNumberChange = (key) => (event) => {
        if(!event.target.value.match(isnum) || event.target.value.length > 4) return
        setCardNumber({
            ...cardNumber,
            [key]: event.target.value
        })
    }


    return typeof children === 'function' ?
        children({ card, handleCardNumberChange, handleNameChange, handleExpiresOnChange })
        :
        children
}

export default React.memo(CardForm);