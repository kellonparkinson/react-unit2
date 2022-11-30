import React from 'react'

import MovieCard from './MovieCard'

const MovieScreen = ({ watchlist, page, setPage, movieList, addMovie, removeMovie }) => {
    const movieDisplay = movieList.map((movie) => {
        return <MovieCard
                    movie={movie}
                    watchlist={watchlist}
                    addMovie={addMovie}
                    removeMovie={removeMovie}
                />
    })

    const decrement = () => {
        setPage(page--)
    }

    const increment = () => {
        setPage(page++)
    }

    return (
        <div className='page' >
            <h1>Kellon's Movie Theater</h1>
            <h3>Add a movie to your watchlist</h3>

            <div className="btn-container">
                {page > 1 && <button onClick={decrement} >Previous</button>}
                <button onClick={increment} >Next</button>
            </div>

            <div className='movie-container' >
                {movieDisplay}
            </div>
        </div>
    )
}

export default MovieScreen