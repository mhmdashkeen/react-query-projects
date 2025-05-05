import React from 'react';
import { useRouteError } from 'react-router-dom';

const SinglePageError = () => {
    const error = useRouteError();
    return (
        <div>
            There was a problem on our end.
        </div>
    );
}
 
export default SinglePageError;