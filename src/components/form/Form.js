import React, { useContext, useState } from 'react';
import { CategoriesContext } from '../../context/CategoriesContext';
import { RecipesContext } from '../../context/RecipesContext';
const Form = () => {
    const [search, setSearch] = useState({
        ingredient: '',
        category: ''
    })
    const { categories } = useContext(CategoriesContext);
    const { setSearchRecipes, setConsult } = useContext(RecipesContext);
    const handleOnChange = ev => {
        setSearch({
            ...search,
            [ev.target.name]: ev.target.value
        })
    }
    return ( 
        <form 
            className="col-12"
            onSubmit={ev => {
                ev.preventDefault();
                setSearchRecipes(search);
                setConsult(true);
            }}
        >
            <fieldset className="text-center">
                <legend>Busca bebidas por categoría o ingrediente</legend>
            </fieldset>
            <div className="row">
                <div className="col-md-4">
                    <input 
                        name="ingredient"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por ingredientes"
                        onChange={handleOnChange}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="category"
                        onChange={handleOnChange}
                    >
                        <option value="">-- Selecciona categoría --</option>
                        {categories.map(category => (
                            <option 
                                key={category.strCategory}
                                value={category.strCategory}
                            >
                                {category.strCategory}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                        name="name"
                        className="btn btn-block btn-primary"
                        type="submit"
                        value="Buscar Bebida"
                    />
                </div>
            </div>
        </form>
     );
}
 
export default Form;