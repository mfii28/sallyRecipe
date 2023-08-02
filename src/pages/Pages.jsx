import React, { useEffect, useState } from 'react';
import {Link, useParams } from 'react-router-dom';


 function Pages() {

    const [cuisine, setCuisine] = useState([]);

    const Params = useParams();
  
    const getCuisine = async (name) => {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=526e53cddadc43a6adcc5b37e27c5c09&cuisine=${name}&number=15`
      );
  
      const recipes = await data.json();  
  
      setCuisine(recipes.results);
    };
  
    useEffect(() => {
  
      getCuisine(Params.type);
    }, [Params.type]);
  

   return (
     <div className='mx-16 py-7 grid sm:gap-4 gap-1 md:grid-cols-3 grid-cols-1 grid-rows-3'>
       {cuisine.map((item) =>{
        return(
    <div key={item.id}>
       <Link to={"/recipes/" + item.id}>
       <img className="rounded-[2rem] pb-4" src={item.image} alt="" />
        <h4 className=' text-[18px]'>{item.title}</h4>
       </Link>
        </div>
        )
       })}
     </div>
   )
 }
 
 export default Pages