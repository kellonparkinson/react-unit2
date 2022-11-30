import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

import Header from './components/Header'
import MovieScreen from './components/MovieScreen'
import Watchlist from './components/Watchlist'

function App() {
  const [movieList, setMovieList] = useState([])
  const [watchlist, setWatchlist] = useState([])
  const [page, setPage] = useState(1)

  const getData = () => {
    axios
    .get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
    .then((res) => setMovieList(res.data.results))
    .catch((err) => console.log(err))
  }

  useEffect(() => {
    getData()
  }, [page])

  const addMovie = (movie) => {
    setWatchlist([...watchlist, movie])
  }

  return (
    <div className="App">
      <Header />

      <main>
        <MovieScreen
          watchlist={watchlist}
          page={page}
          setPage={setPage}
          movieList={movieList}
          addMovie={addMovie}
        />
        <Watchlist watchlist={watchlist} />
      </main>
    </div>
  )
}

export default App