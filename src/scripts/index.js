const baseURL = " http://localhost:4000/movies";
const divPopular = document.getElementById("contentPopular");
const divAnime = document.getElementById("contentAnime");
const divCrimen = document.getElementById("contentCrimen");

async function getInfo(url) {
  try {
    const answer = await (await fetch(url)).json();
    return answer;
  } catch (error) {
    console.log("Hay un error");
  }
}

async function showMovies(toSearch) {
  let data;

  if (toSearch == undefined) {
    data = await getInfo(baseURL);
  } else {
    data = toSearch;
    divPopular.innerHTML = "";
    divAnime.innerHTML = "";
    divCrimen.innerHTML = "";
  }

  let popular = data.filter((item) => item.genre === "popular");
  let anime = data.filter((item) => item.genre === "anime");
  let crimen = data.filter((item) => item.genre === "crimen");

  function sentToDiv(data, idDiv) {
    data.map((item) => {
      const { name, img, id } = item;

      idDiv.innerHTML += `
              <img src="${img}" alt="${name}" class="movieItem" onclick="sendMovie(${id})">   
        `;
    });
  }
  sentToDiv(popular, divPopular);
  sentToDiv(anime, divAnime);
  sentToDiv(crimen, divCrimen);
}

showMovies();

async function sendMovie(idMovie) {
  let data = await getInfo(baseURL);
  let movieClick = data.filter((item) => item.id === idMovie);
  localStorage.setItem("MOVIE", JSON.stringify(movieClick));
  window.location.href = "./info.html";
}

const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", async () => {
  const inputSearch = document.getElementById("inputSearch").value;
  let data = await getInfo(baseURL);
  let dataFilter = data.filter((item) =>
    item.name.toLowerCase().includes(inputSearch.toLowerCase())
  );
  showMovies(dataFilter);
});
