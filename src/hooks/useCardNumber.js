import { useState, useEffect } from 'react';
import {
    CARD_NUMBER_LENGTH,
    CARD_NUMBER_PARTIAL_LENGTH,
    onlyDigitsRegex,
    possibleCardNumberFirstDigits
} from '@constants/cards';

function useCardNumber(initialState) {
    const [cardNumber, setCardNumber] = useState(initialState);
    const [valid, setValid] = useState(true);
    
    const handleCardNumberChange = (key) => (event) => {
        if (!event.target.value.match(onlyDigitsRegex) || event.target.value.length > CARD_NUMBER_PARTIAL_LENGTH) return
        if (key === 'first' && !possibleCardNumberFirstDigits.includes(event.target.value[0])) return
        setCardNumber({
            ...cardNumber,
            [key]: event.target.value
        })
    }

    useEffect(() => {
        if(Object.values(cardNumber).join().length < CARD_NUMBER_LENGTH) {
            setValid(false);
        } else {
            setValid(true);
        }
    }, [cardNumber]);

    return [cardNumber, handleCardNumberChange, valid];
}

export default useCardNumber;