import axios from 'axios';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CocktailsLists from '../components/CocktailsLists';
const cocktailUrl = "https://dummyjson.com/recipes/search?q=";

export const loader = async () => {
    const searchTerm = "";
    const response = await axios.get(`${cocktailUrl}${searchTerm}`);
    console.log("LOa", response);
    return {recipes: response.data.recipes, searchTerm};
}

const Landing = () => {
    const {recipes, searchTerm} = useLoaderData();
    console.log("loa", recipes);
    return (
        <CocktailsLists recipes={recipes} />
    );
}
 
export default Landing;