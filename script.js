document.getElementById('search-form').addEventListener('submit', function(event) {
  event.preventDefault();
  searchMovie();
});

function searchMovie() {
  var searchTerm = document.getElementById('search-bar').value;
  if (searchTerm) {
    fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=9a157678`)
      .then(response => response.json())
      .then(data => displayResults(data))
      .catch(err => console.error(err));
  }
}


function displayResults(data) {
  var resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';

  if (data.Search) {
    data.Search.forEach(movie => {
      var movieDiv = document.createElement('div');
      movieDiv.innerHTML = `<h3>${movie.Title}</h3><img src="${movie.Poster}" alt="${movie.Title}"><p>Year: ${movie.Year}</p>`;
      resultsDiv.appendChild(movieDiv);
    });
  } else {
    resultsDiv.innerHTML = '<p>No results found</p>';
  }
}



