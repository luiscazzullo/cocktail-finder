import React, { useContext, useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
//Context
import { ModalContext } from '../../context/ModalContext';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

const RecipeCard = ({ recipe }) => {
    const [ modalStyle ] = useState(getModalStyle());
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    const { setRecipeId, recipeInfo, setRecipe } = useContext(ModalContext);
    const showIngredients = (info) => {
        let ingredients = [];
        for(let i = 1; i < 16; i ++ ) {
            if(info[`strIngredient${i}`]) {
                ingredients.push(
                    <li>
                        {info[`strIngredient${i}`]}
                        {info[`strMeasure${i}`]}
                    </li>
                )
            }
        }
        return ingredients;
    }
    return ( 
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">
                    {recipe.strDrink}
                </h2>
            </div>
            <img className="card-img-top" src={recipe.strDrinkThumb} alt={`Imagen de ${recipe.strDrink}`} />
            <div className="card-body">
                <button 
                    type="button"
                    className="btn btn-block btn-primary"
                    onClick={() => {
                        setRecipeId(recipe.idDrink);
                        handleOpen();
                    }}
                >   
                    Ver receta
                </button>
                <Modal
                    open={open}
                    onClose={() => {
                        setRecipeId(null);
                        setRecipe({});
                        handleClose();
                    }}
                >
                    <div style={modalStyle} className={classes.paper}>
                        <h2>{recipeInfo.strDrink}</h2>
                        <h3 className="mt-4 ">Instrucciones</h3>
                        <p>{recipeInfo.strInstructions}</p>
                        <img className="img-fluid" src={recipeInfo.strDrinkThumb} alt={`imagen de ${recipeInfo.strDrink}`} />
                        <h3>Ingredientes y cantidades</h3>
                        <ul>
                            {showIngredients(recipeInfo)}
                        </ul>
                    </div>
                </Modal>
            </div>
        </div>
     );
}
 
export default RecipeCard;