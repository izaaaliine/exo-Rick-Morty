// pour supprimer les cards au click d'un autre btn
let cardsContainer = document.createElement('div');
cardsContainer.className = 'cardscontainer';
document.body.appendChild(cardsContainer);
// boutons
let btnPerso = document.querySelector('.personnages');
btnPerso.addEventListener('click', function () {
  fetchCards('https://rickandmortyapi.com/api/character');
});

let btnLieux = document.querySelector('.lieux');
btnLieux.addEventListener('click', function () {
  fetchCards('https://rickandmortyapi.com/api/location');
});

let btnEpisodes = document.querySelector('.episodes');
btnEpisodes.addEventListener('click', function () {
  fetchCards('https://rickandmortyapi.com/api/episode');
});

// Fonction pour fetch

function fetchCards(apiUrl) {
  cardsContainer.innerHTML = ''; // Effacez le contenu du conteneur existant

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const totalPages = data.info.pages;

      for (let i = 1; i <= totalPages; i++) {
        let url = `${apiUrl}?page=${i}`;
        fetch(url)
          .then((response) => response.json())
          .then((pageData) => {
            pageData.results.forEach((result) => {
              let newCard = document.createElement('div');
              newCard.className = 'card';

              // personnages
              if (apiUrl.includes('character')) {
                let newName = document.createElement('h2');
                newName.textContent = result.name;

                let newImg = document.createElement('img');
                newImg.src = result.image;

                newCard.appendChild(newName);
                newCard.appendChild(newImg);
              }
              //   lieux
              else if (apiUrl.includes('location')) {
                let newName = document.createElement('h2');
                newName.textContent = result.name;

                let newDimension = document.createElement('p');
                newDimension.textContent = `Dimension: ${result.dimension}`;

                let newResidents = document.createElement('p');

                result.residents.forEach((residentUrl) => {
                  fetch(residentUrl)
                    .then((response) => response.json())
                    .then((residentData) => {
                      let residentName = document.createElement('span');
                      residentName.textContent = `Resident: ${residentData.name}`;
                      newResidents.appendChild(residentName);
                    });
                });

                newCard.appendChild(newName);
                newCard.appendChild(newDimension);
                newCard.appendChild(newResidents);
              }
              //   épisodes
              else if (apiUrl.includes('episode')) {
                let newId = document.createElement('h2');
                newId.textContent = result.id;

                let newName = document.createElement('p');
                newName.textContent = result.name;

                let newDate = document.createElement('p');
                newDate.textContent = result.air_date;

                newCard.appendChild(newId);
                newCard.appendChild(newName);
                newCard.appendChild(newDate);
              }

              cardsContainer.appendChild(newCard);
            });
          });
      }
    });
}
