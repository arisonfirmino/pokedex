const pokemonName = document.querySelector("#pokemon-name");
const pokemonNumber = document.querySelector("#pokemon-number");
const pokemonGif = document.querySelector("#pokemon-gif");

const form = document.querySelector("form");
const searchInput = document.querySelector("#search-input");

const buttonPrev = document.querySelector("#button-prev");
const buttonNext = document.querySelector("#button-next");

let searchPokemon = 1;

async function fetchPokemon(pokemon) {
  const APIresponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`,
  );

  if (APIresponse.status === 200) {
    const data = await APIresponse.json();

    return data;
  }
}

async function renderPokemon(pokemon) {
  pokemonName.innerHTML = "Carregando...";
  pokemonNumber.innerHTML = "";

  const data = await fetchPokemon(pokemon);

  if (data) {
    pokemonGif.style.display = "block";
    pokemonName.innerHTML = data["name"];
    pokemonNumber.innerHTML = data["id"];
    pokemonGif.src =
      data["sprites"]["versions"]["generation-v"]["black-white"]["animated"][
        "front_default"
      ];

    searchInput.value = "";
    searchPokemon = data["id"];
  } else {
    pokemonGif.style.display = "none";
    pokemonName.innerHTML = "Error";
    pokemonNumber.innerHTML = "";
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  renderPokemon(searchInput.value.toLowerCase());
});

buttonPrev.addEventListener("click", () => {
  if (searchPokemon > 1) {
    searchPokemon -= 1;
    renderPokemon(searchPokemon);
  }
});

buttonNext.addEventListener("click", () => {
  searchPokemon += 1;
  renderPokemon(searchPokemon);
});

renderPokemon(searchPokemon);
