import React, { useState } from 'react';

let isnum = /^\d*$/
const possibleStartingDigits = ['4', '5', '6'];

function CardForm({ children, validExpDate, setValidExpDate, ...card }) {
    const {
        cardNumber,
        setName,
        setCardNumber,
        setExpiresOn
    } = card;

    const handleNameChange = (event) => {
        setName(event.target.value);
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
        } else if (event.target.value.length >= 4 && year == yearNow && month < monthNow) {
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


    return typeof children === 'function' ?
        children({ card, handleCardNumberChange, handleNameChange, handleExpiresOnChange, validExpDate })
        :
        children
}

export default React.memo(CardForm);