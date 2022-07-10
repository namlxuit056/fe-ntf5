import { useEffect, useState } from 'react';
import { request } from '../../../utils/request';
import Movie from './Movie';

const ListMovie = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    if (loading) {
      const fetchPost = async () => {
        const res: any = await request({
          path: `/movies`,
          method: 'GET',
        });
        setMovies(res.data);
        setLoading(false);
      };
      fetchPost();
    }
  }, []);

  return (
    <div>
      {movies.map(movie => (
        <Movie key={movie.id} movie={movie}></Movie>
      ))}
    </div>
  );
};
export default ListMovie;
