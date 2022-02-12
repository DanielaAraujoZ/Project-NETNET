const infoLocal = JSON.parse(localStorage.getItem("MOVIE"));
const baseURL = "https://serverprojectnetnet.herokuapp.com/data";
const contentSimilar = document.getElementById("contentSimilar");

async function getInfo(url) {
  try {
    const answer = await (await fetch(url)).json();
    return answer;
  } catch (error) {
    console.log("Hay un error");
  }
}

async function showMovies(callback) {
  let data = await callback;
  let popular = data.filter((item) => item.genre === "popular");

  popular.map((item) => {
    contentSimilar.innerHTML += `<img src="${item.img}" alt="${item.name}" class="movieItem" >
        `;
  });
}

showMovies(getInfo(baseURL));

//Mostrar pelicula relacionada
const containerDiv = document.getElementById("contentMain");

window.addEventListener("DOMContentLoaded", async () => {
  const { name, img, year, duration, description, id } = infoLocal[0];

  containerDiv.innerHTML += `
    <img class="imageMovie" src="${img}" alt="${name}"/>
          <h1 class="titleMovie">${name}</h1>
          <div class="contentData flex flex-row">
            <p class="porcentaje">99% de coincidencia</p>
            <div class="group flex flex-row">
              <p>${year}</p>
              <img src="../Images/imagesProject/r.png" />
            </div>
            <div class="group flex flex-row">
              <p>${duration}</p>
              <img src="../Images/imagesProject/ha.png" />
            </div>
          </div>
          <div class="buttons">
            <button class="buttonsOpt">
              <img src="../Images/imagesProject/buttonPlay.png" />
            </button>
            <button class="buttonsOpt mt-2">
              <img src="../Images/imagesProject/buttonDownload.svg" />
            </button>
          </div>
          <p class="descriptionMovie">
            ${description}
          </p>
          <div class="credits">
            <p>Elenco: Keanu Reeves, Laurence Fishburne...<b>más</b></p>
            <p class="mt-2">Dirigido por: Lilly Wachowski, Lana Wachowski</p>
          </div>
          <div class="buttonsGroup">
            <button onclick="sendToList(${id})">
              <img class="imageB" src="../Images/imagesProject/Frame.png" alt="addButton"/>
            </button>
          </div>
    `;
});

async function sendToList(id) {
  let data = await getInfo(baseURL);
  let infoSend = data.filter((item) => item.id === id);
  localStorage.setItem("MOVIE", JSON.stringify(infoSend[0]));
  window.location.href = "./list.html";
}
