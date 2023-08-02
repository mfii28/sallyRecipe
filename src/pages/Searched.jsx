import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Searched = () => {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Number of items to display per page

  const Params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=526e53cddadc43a6adcc5b37e27c5c09&query=${name}`
    );

    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
  };

  useEffect(() => {
    getSearched(Params.search);
  }, [Params.search]);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Extract the recipes for the current page
  const recipesOnPage = searchedRecipes.slice(startIndex, endIndex);

  return (
    <div className='mx-16 py-7 grid sm:gap-4 gap-1 md:grid-cols-3 grid-cols-1 grid-rows-3'>
      {recipesOnPage.map((item) => (
        <div key={item.id}>
          <Link to={'/recipes/' + item.id}>
            <img className="rounded-[2rem] pb-4" src={item.image} alt="" />
            <h4 className='text-[18px]'>{item.title}</h4>
          </Link>
        </div>
      ))}
      {/* Pagination Controls */}
      <div className="col-span-full flex justify-center mt-4">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`mr-2 px-4 py-2 bg-blue-500 text-white rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={endIndex >= searchedRecipes.length}
          className={`ml-2 px-4 py-2 bg-blue-500 text-white rounded ${endIndex >= searchedRecipes.length ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Searched;
