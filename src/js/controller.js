const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

/*

Get recipe/Delete recipe
Allowed methods: GET DELETE

GET: Returns a single recipe

DELETE: Deletes a single recipe associated with provided API key

Path:https://forkify-api.herokuapp.com/api/v2/recipes/:id

*/

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const showRecipe = async function () {
  try {
    const res = await fetch(
      'https://forkify-api.herokuapp.com/api/v2/recipes/ba4845ba-0baa-4f82-adf0-ce682462553a'
    );
    const data = await res.json();

    console.log(res, data);
  } catch (err) {
    alert(err);
  }
};

showRecipe();
