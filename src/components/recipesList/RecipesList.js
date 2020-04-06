import React, { useContext } from 'react';
import RecipeCard from '../recipeCard/RecipeCard';
//Context
import { RecipesContext } from '../../context/RecipesContext';

const RecipesList = () => {
    const { recipes } = useContext(RecipesContext);
    return ( 
        <div className="row mt-5">
            {recipes.map(recipe => (
                <RecipeCard
                    key={recipe.idDrink} 
                    recipe={recipe}
                />
            ))}
        </div>
     );
}
 
export default RecipesList;