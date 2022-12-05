if (document.readyState !== "loading") {
    initializeCode();
  } else {
    document.addEventListener("DOMContentLoaded", function () {
      initializeCode();
    });
  }
  
function initializeCode() {

  const addIngredientButton = document.getElementById("add-ingredient");
  const addInstructionButton = document.getElementById("add-instruction");
  const submitButton = document.getElementById("submit");

  let ingredients = [];
  let instructions = [];

  addIngredientButton.addEventListener("click", function() {
    const ingredientsText = document.getElementById("ingredients-text");

    ingredients.push(ingredientsText.value);
    console.log(ingredients);
  });

  addInstructionButton.addEventListener("click", function() {
    const instructionsText = document.getElementById("instructions-text");

    instructions.push(instructionsText.value);
    console.log(instructions);
  });

  submitButton.addEventListener("click", function() {
    const nameText = document.getElementById("name-text");

    fetch("http://localhost:3000/recipe", {
      method: "post",
      headers: {
        "Content-type": "application/json"
      },
      body: '{"instructions": "' + instructions.value + '", "ingredients": "' + ingredients.value + '", "name": "' + nameText.value + '"}'
    })
    .then(response => response.json())
  });

}