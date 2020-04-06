import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'

export const ModalContext = createContext();
const ModalProvider = (props) => {
    const [recipeid, setRecipeId] = useState(null);
    const [recipeInfo, setRecipe] = useState({});
    useEffect(() => {
        if(!recipeid) return;
        const getRecipe = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${recipeid}`;
            const result = await axios.get(url);
            setRecipe(result.data.drinks[0]);
            console.log(result.data.drinks[0]);
        }
        getRecipe();
    }, [recipeid])
    return(
        <ModalContext.Provider
            value={{
                recipeInfo,
                setRecipeId,
                setRecipe
            }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}
export default ModalProvider;
