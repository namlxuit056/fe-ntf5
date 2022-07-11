import { useEffect, useState } from 'react';
import { request } from '../../../utils/request';
import Movie from './Movie';
import styled from 'styled-components';
const Style = styled.div`
  .loadmore {
    margin-top: 20px;
    button {
      background-color: #6a5af9;
      color: white;
      margin-bottom: 20px;
    }
    text-align: center;
  }
`;
const ListMovie = () => {
  const [loading, setLoading] = useState(true);
  const [loadMore, setLoadMore] = useState(false);
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
        if (res.data.length < res.count) {
          setLoadMore(true);
        }
      };
      fetchPost();
    }
  }, []);

  const onClickLoadMore = async () => {
    const res: any = await request({
      path: `/movies`,
      method: 'GET',
    });
    setMovies([...movies, ...res.data]);
    if (res.data.length < res.count) {
      setLoadMore(true);
    } else {
      setLoadMore(false);
    }
  };
  return (
    <Style>
      {movies.map(movie => (
        <Movie key={movie.id} movie={movie}></Movie>
      ))}
      <div className="loadmore">
        <button onClick={onClickLoadMore}>Load more</button>
      </div>
    </Style>
  );
};
export default ListMovie;
