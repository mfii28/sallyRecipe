import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function Cusinie() {
  const [cuisine, setCuisine] = useState([]);

  const Params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=526e53cddadc43a6adcc5b37e27c5c09&cuisine=${name}`
    );

    const recipes = await data.json(); // Add parentheses to invoke the json() method

    setCuisine(recipes.results);
  };

  useEffect(() => {
    getCuisine(Params.type);
  }, [Params.type]);

  return <div>Cusinie</div>;
}

export default Cusinie;
