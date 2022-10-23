import { apiKey } from './apiKey.js';

const moviesContainer = document.querySelector('.movies-container');

window.onload = async function () {
  const movies = await getMovies();
  movies.forEach((movie) => renderMovie(movie));
};

async function getMovies() {
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
  const response = await fetch(url);
  const { results } = await response.json();
  return results;
}

function renderMovie(movie) {
  const { title, poster_path, vote_average, release_date, overview } = movie;
  const isFavorited = false;

  const year = new Date(release_date).getFullYear();

  const moviesCard = document.createElement('div');
  moviesCard.classList.add('movies-card');
  moviesContainer.appendChild(moviesCard);

  const moviesCardLeft = document.createElement('div');
  moviesCardLeft.classList.add('movies-card-left');
  moviesCard.appendChild(moviesCardLeft);

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');
  const movieImg = document.createElement('img');
  movieImg.src = `https://image.tmdb.org/t/p/original${poster_path}`;
  movieImg.alt = `${title} Poster`;
  moviesCardLeft.appendChild(imgContainer);
  imgContainer.appendChild(movieImg);

  const movieContainer = document.createElement('div');
  movieContainer.classList.add('movie-container');
  const movieTitle = document.createElement('p');
  movieTitle.innerText = `${title} (${year})`;
  moviesCardLeft.appendChild(movieContainer);
  movieContainer.appendChild(movieTitle);

  const ratingFavorites = document.createElement('div');
  ratingFavorites.classList.add('rating-favorites');
  movieContainer.appendChild(ratingFavorites);
  const ratingElement = document.createElement('div');
  ratingElement.classList.add('rating');
  const ratingImg = document.createElement('img');
  ratingImg.src = 'img/star.png';
  ratingImg.alt = 'Star';
  const movieRate = document.createElement('span');
  movieRate.innerText = vote_average;
  ratingFavorites.appendChild(ratingElement);
  ratingElement.appendChild(ratingImg);
  ratingElement.appendChild(movieRate);

  const favorites = document.createElement('div');
  favorites.classList.add('favorites');
  movieContainer.appendChild(favorites);
  const favoriteImg = document.createElement('img');
  favoriteImg.src = isFavorited ? 'img/heart-fill.svg' : 'img/heart.svg';
  favoriteImg.alt = 'Heart';
  const favoriteText = document.createElement('span');
  favoriteText.innerText = 'Favoritar';
  favorites.appendChild(favoriteImg);
  favorites.appendChild(favoriteText);
  ratingFavorites.appendChild(favorites);

  const moviesCardRight = document.createElement('div');
  moviesCardRight.classList.add('movies-card-right');
  const descriptionText = document.createElement('p');
  descriptionText.innerText = overview;
  moviesCardRight.appendChild(descriptionText);
  moviesCard.appendChild(moviesCardRight);
}
