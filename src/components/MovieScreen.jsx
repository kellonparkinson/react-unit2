import React from 'react'

const MovieScreen = ({ watchList, page, setPage, movieList }) => {
    const movieDisplay = movieList.map((movie) => {
        return <h2>{ movie.original_title }</h2>
    })

    return (
        <div className='page' >
            <h1>Kellon's Movie Theater</h1>
            <h3>Add a movie to your watchlist</h3>

            <div className='movie-container' >
                {movieDisplay}
            </div>
        </div>
    )
}

export default MovieScreen