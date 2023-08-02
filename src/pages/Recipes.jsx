import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Recipes() {
  const params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('instructions');

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=526e53cddadc43a6adcc5b37e27c5c09`
      );
      const detailsData = await response.json();
      setDetails(detailsData);
    } catch (error) {
      console.error('Error fetching recipe details:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [params.name]);

  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white p-4 md:p-8">
      <div className="container mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap relative">
          <img
            alt={details.title}
            className="lg:w-1/2 lg:h-1/2 w-full object-cover object-center rounded border border-gray-200 mb-4 md:mb-0"
            src={details.image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <div className="flex flex-wrap space-x-2 mb-4">
              <button
                className={`py-2 px-4 rounded ${
                  activeTab === 'instructions' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'
                }`}
                onClick={() => setActiveTab('instructions')}
              >
                Instructions
              </button>
              <button
                className={`py-2 px-4 rounded ${
                  activeTab === 'ingredient' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'
                }`}
                onClick={() => setActiveTab('ingredient')}
              >
                Ingredients
              </button>
            </div>
            <div className="">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-2">{details.title}</h1>
              {activeTab === 'instructions' ? (
                <>
                  <h4 className="leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: details.summary }}></h4>
                  <h4 className="leading-relaxed" dangerouslySetInnerHTML={{ __html: details.instructions }}></h4>
                </>
              ) : (
                <ul>
                  {details.extendedIngredients.map((ingredient) => (
                    <li key={ingredient.id}>{ingredient.original}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Recipes;
