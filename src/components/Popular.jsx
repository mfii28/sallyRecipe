import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { Link } from 'react-router-dom';

function Popular() {
  const [popular, setPopular] = useState([]);
   




  useEffect(() => {
    getPopular();
  }, []);
  
  const getPopular = async () => {
    const check = localStorage.getItem('popular')
    if(check){
          setPopular(JSON.parse(check));
    }else{
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=526e53cddadc43a6adcc5b37e27c5c09&number=9`
      );
      const data = await api.json();

      localStorage.setItem("popular",JSON.stringify(data.recipes));
      setPopular(data.recipes);
      console.log(data)
    }
  };

  return (
    <div className=' m-20 '>
       <Splide
        options={{
          type: 'loop',
          perPage: 3,
          perMove: 1,
          autoplay: true,
          gap: '1rem',
          arrows: false,
          pagination: false,
          breakpoints: {
            640: {
              perPage: 1,
              gap: '0.5rem',
            },
            768: {
              perPage: 2,
              gap: '1rem',
            },
            1024: {
              perPage: 3,
              gap: '1.5rem',
            },
          },
        }}
      >
        {popular.map((recipe) => (
          <SplideSlide key={recipe.id}>
            <div>
             
<Link to={"/recipes/" + recipe.id}>

<figure class="snip1104 red">
<img  src={recipe.image} alt={recipe.title} />
  <figcaption>
    <h2>{recipe.title}</h2>
  </figcaption>
  <a href="#"></a>
</figure>
</Link>


            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}

export default Popular;
