const moviesContainer = document.querySelector('.movies-container');

const movies = [
  {
    image:
      'https://img.elo7.com.br/product/original/3FBA809/big-poster-filme-batman-2022-90x60-cm-lo002-poster-batman.jpg',
    title: 'Batman',
    rating: 9.2,
    year: 2022,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    isFavorited: false
  },
  {
    image:
      'https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg',
    title: 'Avengers',
    rating: 9.2,
    year: 2019,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    isFavorited: false
  },
  {
    image:
      'https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg',
    title: 'Doctor Strange',
    rating: 9.2,
    year: 2022,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    isFavorited: true
  }
];

function renderMovie(movie) {
  const { title, image, rating, year, description, isFavorited } = movie;

  const moviesCard = document.createElement('div');
  moviesCard.classList.add('movies-card');
  moviesContainer.appendChild(moviesCard);

  const moviesCardLeft = document.createElement('div');
  moviesCardLeft.classList.add('movies-card-left');
  moviesCard.appendChild(moviesCardLeft);

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');
  const movieImg = document.createElement('img');
  movieImg.src = image;
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
  movieRate.innerText = rating;
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
  descriptionText.innerText = description;
  moviesCardRight.appendChild(descriptionText);
  moviesCard.appendChild(moviesCardRight);
}

window.onload = function () {
  movies.forEach((movie) => renderMovie(movie));
};
