import React from 'react';
//Components
import Header from './components/header/Header';
import Form from './components/form/Form';
import RecipesList from './components/recipesList/RecipesList';
//Contexts
import CategoriesProvider from './context/CategoriesContext';
import RecipesProvider from './context/RecipesContext';
import ModalProvider from './context/ModalContext';

function App() {
  return (
    <CategoriesProvider>
      <RecipesProvider>
        <ModalProvider>
        <Header />
          <div className="container mt-5">
            <div className="row">
              <Form />
            </div>
            <RecipesList />
          </div>
        </ModalProvider>
      </RecipesProvider>
    </CategoriesProvider>
  );
}

export default App;
