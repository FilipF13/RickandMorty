const characters = document.getElementById("characters");

fetch("https://rickandmortyapi.com/api/character")
  .then((res) => res.json())
  .then((data) => printCharacters(data.results));

function buildCharacter(characterData) {
  const characterTemplate = `
      <div class="info">
        <img width="210" src="${characterData.image}" alt="" />
        <div class="text-info">
          <h2>${characterData.name}</h2>
          <ul>
              <li><span>GENDER:</span> ${characterData.gender}</li>
              <li><span>STATUS:</span> ${characterData.status}</li>
              <li><span>SPECIES:</span> ${characterData.species}</li>
              <li><span>ORIGIN:</span> ${characterData.origin.name}</li>
              <li><span>LOCATION:</span> ${characterData.location.name}</li>
          </ul>
        </div>
      </div>
    `;

  const character = document.createElement("div");
  character.classList.add("character");
  character.innerHTML = characterTemplate;
  characters.appendChild(character);
}

function printCharacters(data) {
  data.forEach((element) => {
    buildCharacter(element);
  });
}
