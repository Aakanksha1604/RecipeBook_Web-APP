import { useState } from "react";
import FryingPan from "./FryingPan";
import Recipe from "./Recipe";
import Spinner from "./Spinner";

const Home = ({ recipes, loading, error }) => {
  const[inputValue,setInputValue]=useState('');
  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  }
  
  return (
    <div className="home container mx-auto py-10 flex flex-wrap gap-10 justify-center">
      {/* condition for ideal position */}
      {!loading && !error && recipes.length === 0 ? (
        <div>
          {/* <p className="text-2xl lg:text-4xl font-semibold text-rose-300">
            Add Your Recipe
          </p> */}
          <label htmlFor="inputBox">Add </label>
          <input
          type="text"
          placeholder="add your recipe..."
          id="inputBox"
          value={inputValue}
          onChange={handleInputChange}
          />
          <FryingPan />
        </div>
      ) : null}

      {/* condition for loading position */}
      {loading && <p>{error ? error : <Spinner />}</p>}

      {/* condition after getting the recipes */}
      {recipes?.length > 0 &&
        recipes.map((recipe) => <Recipe recipe={recipe} key={recipe.id} />)}
    </div>
  );
};

export default Home;
