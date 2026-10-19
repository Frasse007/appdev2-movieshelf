import { useEffect, useState } from 'react';
import MovieGrid from '../components/MovieGrid';
import { getPopularMovies } from '../services/movieService';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
const movieData = await getPopularMovies();
setMovies(movieData);
};

fetchMovies();
  }, []);

  return (
    <main className="main-content">
      <div className="content-header">
        <h2>Popular Movies</h2>
        <p>Discover and save your favorite films</p>
      </div>
      <MovieGrid movies={movies} />
    </main>
  );
};

export default Home;