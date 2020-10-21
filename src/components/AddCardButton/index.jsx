import React from 'react';
import cardBase from '@assets/images/card-base.svg';
import { Container, makeStyles, Box } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        maxWidth: '440px',
        maxHeight: '275px',
        padding: 0,
        position: 'relative',
        borderRadius: '25px',
        border: '5px dashed black'
    },
    plusSign: {
        position: 'absolute',
        top: '20px',
        left: '180px',
        fontSize: '150px',
        fontWeight: '700'
    }
});


function AddCardButton({addCard}) {
    const { container, plusSign } = useStyles();
    return (
        <Container className={container} onClick={addCard}>
            <img src={cardBase} alt="card" />
            <Box className={plusSign}>
                +
            </Box>
        </Container>
    );
}

export default React.memo(AddCardButton);