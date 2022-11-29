import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

import Header from './components/Header'
import MovieScreen from './components/MovieScreen'

function App() {
  const [movieList, setMovieList] = useState([])
  const [watchList, setWatchList] = useState([])
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

  return (
    <div className="App">
      <Header />

      <main>
        <MovieScreen
          watchList={watchList}
          page={page}
          setPage={setPage}
          movieList={movieList}
        />
      </main>
    </div>
  )
}

export default App