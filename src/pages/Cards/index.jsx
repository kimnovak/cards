import React from 'react';
import { Container, Typography } from '@material-ui/core';

function Cards() {
  
    return (
        <Container>
            <Typography variant="h1" component="h2">
                My cards
            </Typography>
            
        </Container>
    )
}

export default React.memo(Cards);