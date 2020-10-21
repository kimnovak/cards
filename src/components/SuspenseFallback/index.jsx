import React from 'react';

function SuspenseFallback() {
    return (
        <React.Fragment>
            Loading...
        </React.Fragment>
    )
}

export default React.memo(SuspenseFallback);