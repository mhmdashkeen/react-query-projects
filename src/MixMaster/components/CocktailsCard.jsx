import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import Wrapper from '../assets/wrappers/CocktailCard';

const CocktailsCard = ({id, name, image, cuisine, tags}) => {
    // const data = useOutletContext();
    // console.log("New react router DOM Context DATA", data);
    return (
        <Wrapper>
            <div className='img-container'>
                <img src={image} alt={name} className='img'/>
            </div>
            <div className='footer'>
                <h4>{name}</h4>
                <h5>{cuisine}</h5>
                <p>{tags.join(", ")}</p>
                <Link className='btn' to={`cocktail/${id}`}>Details</Link>
            </div>
        </Wrapper>
    );
}
 
export default CocktailsCard;