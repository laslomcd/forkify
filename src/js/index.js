import axios from 'axios';

// 28d154f837aebf25061bdf41554cbf23
// https://www.food2fork.com/api/search
// https://cors-anywhere.herokuapp.com/

async function getResults(query) {
    const key = '28d154f837aebf25061bdf41554cbf23';
 
    const result = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${query}`);
    const recipes = result.data.recipes;
    console.log(recipes);
}

getResults('pizza');