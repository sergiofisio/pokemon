const main = document.querySelector("main");

let arrayPokemon = [];
let arrayUrl = [];

let url = "";

async function createPokemon() {
  arrayPokemon.forEach((pokemon) => {
    arrayUrl.push(pokemon.url);
  });
  arrayUrl.forEach((url) => {
    fillPokemon(url);
  });
}

async function fillPokemon(url) {
  const infoPokemon = await api.get(url);
  const divImg = document.createElement("div");
  const pokemonName = document.createElement("h1");
  main.append(divImg);
  divImg.append(pokemonName);
  console.log(infoPokemon);
  divImg.classList.add("img_pokemon");
  divImg.style.backgroundImage = `url(${infoPokemon.data.sprites.other.home.front_default})`;
  divImg.style.backgroundSize = "cover";
  pokemonName.textContent = infoPokemon.data.name;
}

async function getPokemon() {
  try {
    const pokemon = await api.get("");
    pokemon.data.results.forEach((pokemon) => {
      arrayPokemon.push(pokemon);
    });
    createPokemon();
  } catch (error) {
    console.log(error.message);
  }
}

getPokemon();
