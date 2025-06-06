import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import img from './../assets/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';

const Error = () => {
    const error = useRouteError();
    if(error.status === 404){
        return (
            <Wrapper>
                <div>
                    <img src={img} alt='not-found'/>
                    <h3>Ohh!</h3>
                    <p>We can't seem to find page you are looking for</p>
                    <Link to="/mix-master">Back to home</Link>
                </div>
            </Wrapper>
        );
    }
    return (
        <Wrapper>
            <div>
                Something went wrong
            </div>
        </Wrapper>
    )
}
 
export default Error;