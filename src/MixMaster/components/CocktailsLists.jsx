import React from 'react';
import CocktailsCard from './CocktailsCard';
import Wrapper from '../assets/wrappers/CocktailList';

const CocktailsLists = ({recipes}) => {   
    return (
        <Wrapper>
            {recipes.map((item) => <CocktailsCard key={item.id} {...item}/>)}
        </Wrapper>
    );
}
 
export default CocktailsLists;