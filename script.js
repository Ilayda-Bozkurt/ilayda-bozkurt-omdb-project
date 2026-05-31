const apiKey = "     "; 
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const resultsDiv = document.getElementById('results');

searchBtn.addEventListener('click', () => {
    const movieName = searchInput.value;
    if (movieName) {
        fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${movieName}`)
            .then(response => response.json())
            .then(data => {
                if (data.Response === "True") {
                    displayMovies(data.Search);
                } else {
                    resultsDiv.innerHTML = "<p>Movie not found!</p>";
                }
            });
    }
});

function displayMovies(movies) {
    resultsDiv.innerHTML = ""; // Önceki sonuçları temizle
    movies.forEach(movie => {
        const movieCard = `
            <div class="movie-card">
                <img src="${movie.Poster}" alt="${movie.Title}">
                <h3>${movie.Title}</h3>
                <p>${movie.Year}</p>
            </div>
        `;
        resultsDiv.innerHTML += movieCard;
    });
}
