import React from 'react';
import cardBase from '@assets/images/card-base.svg';
import { Container, makeStyles, Box } from '@material-ui/core';
import chip from '@assets/images/chip.png';
import visa from '@assets/images/visa.png';
import masterCard from '@assets/images/master.png';
import discoverCard from '@assets/images/discover.png'
import { isValid } from 'date-fns';

const useStyles = makeStyles({
    container: {
        maxWidth: '440px',
        maxHeight: '275px',
        padding: 0,
        position: 'relative'
    },
    nameContainer: {
        position: 'absolute',
        bottom: '50px',
        left: '20px',
        fontSize: '16px',
        fontWeight: 700,
        textTransform: 'uppercase'
    },
    expiresOnContainer: {
        position: 'absolute',
        bottom: '50px',
        right: '20px',
        fontSize: '16px',
        fontWeight: 700
    },
    cardNumberContainer: {
        position: 'absolute',
        bottom: '90px',
        left: '20px',
        fontSize: '20px',
        fontWeight: 700
    },
    chipStyle: {
        position: 'absolute',
        bottom: '180px',
        left: '20px',
        maxHeight: '20px',
        maxWidth: '20px'
    },
    brand: {
        position: 'absolute',
        top: '20px',
        right: '120px',
        maxHeight: '20px',
        maxWidth: '20px'
    }
})

const VISA = '4';
const MASTER_CARD = '5';
const DISCOVER_CARD = '6';

const cardTypes = {
    '4': visa,
    '5': masterCard,
    '6': discoverCard
} 

const cardTypesWithIcons = [VISA, MASTER_CARD, DISCOVER_CARD]

function Card({name, cardNumber, expiresOn, onClick}) {
    const { container, nameContainer, cardNumberContainer, expiresOnContainer, chipStyle, brand } = useStyles();
    const cardNumberFirstDigit = cardNumber?.first?.[0]
    let expiresOnFormatted;
    if(isValid(expiresOn)) {
        expiresOnFormatted = new Date(expiresOn).toLocaleDateString("en-GB", {year: '2-digit', month: '2-digit'})
    }
    return (
        <Container className={container} onClick={onClick}>
            <img src={cardBase} alt="card" />
            {cardTypesWithIcons.includes(cardNumberFirstDigit) && <Box className={brand}><img style={{ maxWidth: '120px', maxHeight: '100px' }} src={cardTypes[cardNumberFirstDigit]} alt="chip" /></Box>}
            <Box className={chipStyle}><img style={{ maxWidth: '70px', maxHeight: '60px' }} src={chip} alt="chip" /></Box>
            <Box className={cardNumberContainer}>{Object.values(cardNumber)?.join?.(' ')}</Box>
            <Box className={nameContainer}>{name}</Box>
            <Box className={expiresOnContainer}>{expiresOnFormatted && expiresOnFormatted}</Box>
        </Container>
    );
}

export default React.memo(Card);