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

/*
<div class="infoMovies pb-3">
                <div class="popular text-gray-100">
                    <p class="textCategories">Populares en NetNet</p>
                    <div id="contentPopular" class="flex flex-row justify-between"></div>
                </div>
                <div class="anime text-gray-100">
                    <p class="textCategories">Series Japonesas Anime</p>
                    <div id="contentAnime" class="flex flex-row justify-between"></div>
                </div>
                <div class="crimen text-gray-100">
                    <p class="textCategories">Series de EE.UU sobre crimenes</p>
                    <div id="contentCrimen" class="flex flex-row justify-between"></div>
                </div>
            </div>
*/