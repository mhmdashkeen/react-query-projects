import axios from 'axios';
import React from 'react';
import { Navigate, useLoaderData, useNavigate } from 'react-router-dom';
import Wrapper from './../assets/wrappers/CocktailPage';

const singleRecipeLoader = "https://dummyjson.com/recipes/"

export const loader = async ({params}) => {
    const response = await axios.get(`${singleRecipeLoader}${params.id}`);
    return {data: response.data, id:params.id }
}
const Cocktail = () => {
    const navigate = useNavigate();
    const {data, id} = useLoaderData();
    if(!data) return <Navigate to="/mix-master" />;
    const { name, image, cuisine, ingredients, instructions, difficulty, tags } = data;
    return (
    <Wrapper>
      <header>
        <button onClick={() => navigate(-1)} className='btn'>
          back home
        </button>
        <h3>{name}</h3>
      </header>
      <div className='drink'>
        <img src={image} alt={name} className='img' />
        <div className='drink-info'>
          <p>
            <span className='drink-data'>name :</span>
            {name}
          </p>
          <p>
            <span className='drink-data'>cuisine :</span>
            {cuisine}
          </p>
          <p>
            <span className='drink-data'>difficulty :</span>
            {difficulty}
          </p>
          <p>
            <span className='drink-data'>tags :</span>
            {tags.join(", ")}
          </p>
          <p>
            <span className='drink-data'>ingredients :</span>
            {ingredients.map((item, index) => {
              return (
                <span className='ing' key={item}>
                  {item}
                  {index < ingredients.length - 1 ? ',' : ''}
                </span>
              );
            })}
          </p>
          <p>
            <span className='drink-data'>instructions :</span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
    );
}
 
export default Cocktail;