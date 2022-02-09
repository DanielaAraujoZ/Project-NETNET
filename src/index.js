import { dataMoviesAmime } from "./dataMoviesAnime.js";
import { dataMoviesPopular } from './dataMoviesPopular.js'
import { dataMoviesEU } from './dataMoviesEU.js'

const divPopular = document.getElementById('contentPopular')
const divAnime = document.getElementById('contentAnime')
const divCrimen = document.getElementById('contentCrimen')

dataMoviesPopular.map((item) => {
    divPopular.innerHTML += `
    <img src="${item.img}" alt="${item.name}" class="movieItem" >
    `
})

dataMoviesAmime.map((item) => {
    divAnime.innerHTML += `
    <img src="${item.img}" alt="${item.name}" class="movieItem" >
    `
})

dataMoviesEU.map((item) => {
    divCrimen.innerHTML += `
    <img src="${item.img}" alt="${item.name}" class="movieItem" >
    `
})