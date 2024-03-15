function ListOfMovies ({ movies }) {
    return (
        <ul>
          {
            movies.map(movie => (
              <li key={movie.imdbID}>
                <h3>{movie.title}</h3>
                <p>{movie.year}</p>
                <img src={movie.poster} alt={movie.title} />
              </li>
            ))
          }
        </ul>
      )
}

function noMoviesResults () {
    return (
        <p>There are no matches for your search</p>
    )
}

export function Movies ({ movies }) {
    const hasMovies = movies?.length > 0

    return (
        hasMovies
        ?<ListOfMovies movies={movies} />
        : <noMoviesResults />
    )
    

}