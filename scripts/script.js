// fetch(`https://rickandmortyapi.com/api/character`)
//   .then((response) => response.json())
//   .then((data) => {
//     const totalPages = data.info.pages;

//     for (let i = 1; i <= totalPages; i++) {
//       let url = `https://rickandmortyapi.com/api/character?page=${i}`;
//       fetch(url)
//         .then((response) => response.json())
//         .then((pageData) => {
//           pageData.results.forEach((character) => {
//             let newCard = document.createElement('div');
//             newCard.className = 'card';

//             let newName = document.createElement('h2');
//             newName.textContent = character.name;

//             let newImg = document.createElement('img');
//             newImg.src = character.image;

//             newCard.appendChild(newName);
//             newCard.appendChild(newImg);

//             document.body.appendChild(newCard);
//           });
//         });
//     }
//   });

// fetch(`https://rickandmortyapi.com/api/location`)
//   .then((response) => response.json())
//   .then((data) => {
//     const totalPages = data.info.pages;

//     for (let i = 1; i <= totalPages; i++) {
//       let url = `https://rickandmortyapi.com/api/location?page=${i}`;
//       fetch(url)
//         .then((response) => response.json())
//         .then((pageData) => {
//           pageData.results.forEach((location) => {
//             let newCard = document.createElement('div');
//             newCard.className = 'card';

//             let newName = document.createElement('h2');
//             newName.textContent = location.name;

//             let newDimension = document.createElement('p');
//             newDimension.textContent = `Dimension: ${location.dimension}`;

//             let newResidents = document.createElement('p');

//             location.residents.forEach((residentUrl) => {
//               fetch(residentUrl)
//                 .then((response) => response.json())
//                 .then((residentData) => {
//                   let residentName = document.createElement('span');
//                   residentName.textContent = `Resident: ${residentData.name}`;
//                   newResidents.appendChild(residentName);
//                 });
//             });

//             newCard.appendChild(newName);
//             newCard.appendChild(newDimension);
//             newCard.appendChild(newResidents);

//             document.body.appendChild(newCard);
//           });
//         });
//     }
//   });
fetch(`https://rickandmortyapi.com/api/episode`)
  .then((response) => response.json())
  .then((data) => {
    const totalPages = data.info.pages;

    for (let i = 1; i <= totalPages; i++) {
      let url = `https://rickandmortyapi.com/api/episode?page=${i}`;
      fetch(url)
        .then((response) => response.json())
        .then((pageData) => {
          pageData.results.forEach((episode) => {
            let newCard = document.createElement('div');
            newCard.className = 'card';

            let newId = document.createElement('h2');
            newId.textContent = episode.id;

            let newName = document.createElement('p');
            newName.textContent = episode.name;

            let newDate = document.createElement('p');
            newDate.textContent = episode.air_date;
            newCard.appendChild(newId);
            newCard.appendChild(newName);
            newCard.appendChild(newDate);

            document.body.appendChild(newCard);
          });
        });
    }
  });
