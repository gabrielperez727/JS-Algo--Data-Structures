async function fetchData() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );

    if (!response.ok) {
      throw new Error("Shits fucked up");
    }
    const data = await response.json();
    const pokemonSprite = data.sprites.front_shiny;
    const imgElement = document.getElementById("pokemonSprite");
    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

const numbers = [2, 2, 2];
const sum = numbers.reduce((acc, sum) => {
  return acc + sum;
}, 0);

console.log(sum);
