import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
export const RecipesContext = createContext();
const RecipesProvider = (props) => {
    const [recipes, setRecipes] = useState([]);
    const [searchrecipes, setSearchRecipes] = useState({
        ingredient: '',
        category: ''
    })
    const { ingredient, category } = searchrecipes;
    const [consult, setConsult] = useState(false);
    useEffect(() => {
        if(consult) {
            const getRecipes = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}&c=${category}`;
                const result = await axios.get(url);
                setRecipes(result.data.drinks);
            }
            getRecipes();
        }
    }, [searchrecipes])
    return (
        <RecipesContext.Provider
            value={{
                setSearchRecipes,
                setConsult,
                recipes
            }}
        >
            {props.children}
        </RecipesContext.Provider>
    )
}

export default RecipesProvider;