import { dataMoviesEU } from '../data/dataMoviesEU.js'

const contentSimilar = document.getElementById('contentSimilar')

dataMoviesEU.map((item) => {
    contentSimilar.innerHTML += `
    <img src="${item.img}" alt="${item.name}" class="movieItem" >
    `
})