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
        const cardNumberPartial = event.target.value;
        if (!cardNumberPartial?.match?.(onlyDigitsRegex) || cardNumberPartial?.length > CARD_NUMBER_PARTIAL_LENGTH) return
        if (key === 'first' && !possibleCardNumberFirstDigits.includes(cardNumberPartial?.[0])) return
        setCardNumber({
            ...cardNumber,
            [key]: cardNumberPartial
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