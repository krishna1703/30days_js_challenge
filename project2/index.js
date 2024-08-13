$(document).ready(function() {
    $('body').on('submit', '#searchForm', function(e) {
        let searchText = $('#searchText').val();
        getMovies(searchText);
        e.preventDefault();
    });
});

function getMovies(searchText) {
    $.ajax({
        method: 'GET',
        url: 'https://www.omdbapi.com/?s=' + searchText + '&apikey=c243717'
    }).done(function(data) {
        if (data.Response === 'True') {
            let movies = data.Search;
            let output = '';
            $.each(movies, function(index, movie) {
                output += `
                    <li class="collection-item">
                        <img src="${movie.Poster}" alt="${movie.Title}">
                        <h5>${movie.Title}</h5>
                        <p>Release Year: ${movie.Year}</p>
                        <button class="more-info" onclick="getMovieDetails('${movie.imdbID}')">More Info</button>
                    </li>
                `;
            });
            $('#movies').html(output);
        } else {
            $('#movies').html('<li class="collection-item">No movies found</li>');
        }
    }).fail(function(error) {
        console.log('Error:', error);
    });
}

function getMovieDetails(id) {
    $.ajax({
        method: 'GET',
        url: 'https://www.omdbapi.com/?i=' + id + '&apikey=c243717'
    }).done(function(data) {
        let output = `
            <div class="movie-details">
                <img src="${data.Poster}" alt="${data.Title}">
                <h2>${data.Title}</h2>
                <p><strong>Genre:</strong> ${data.Genre}</p>
                <p><strong>Released:</strong> ${data.Released}</p>
                <p><strong>Rated:</strong> ${data.Rated}</p>
                <p><strong>IMDB Rating:</strong> ${data.imdbRating}</p>
                <p><strong>Director:</strong> ${data.Director}</p>
                <p><strong>Writer:</strong> ${data.Writer}</p>
                <p><strong>Actors:</strong> ${data.Actors}</p>
                <p><strong>Plot:</strong> ${data.Plot}</p>
                <button onclick="closeDetails()">Close</button>
            </div>
        `;
        $('#movies').html(output);
    }).fail(function(error) {
        console.log('Error:', error);
    });
}

function closeDetails() {
    $('#movies').html('');
}