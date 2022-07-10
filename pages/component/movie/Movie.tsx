import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
const Style = styled.div`
  display: flex;
  justify-content: space-between;
  height: 349px;
  margin-top: 20px;
  .video {
    width: 60%;
  }
  .detail {
    width: 40%;
    margin-left: 20px;
    .title {
      h3 {
        font-weight: 600;
        font-size: 24px;
      }
    }
  }
  .desc {
    text-overflow: ellipsis;
    overflow: hidden;
    height: 100px;
    span {
      display: block;
    }
  }
  .like {
    display: flex;
    .like-down {
      margin-left: 10px;
      i {
        margin-right: 10px;
      }
    }

    span {
      margin-right: 5px;
    }
  }
`;
const Movie = ({ movie }) => {
  return (
    <Style>
      <div className="video">
        <iframe width="560" height="349" src={movie.url}></iframe>
      </div>
      <div className="detail">
        <div className="title">
          <h3>{movie.title || 'Movie Title'}</h3>
        </div>
        <div className="author">
          <span>Shared by: {movie.author.email}</span>
        </div>
        <div className="like">
          <div className="like-up">
            <span>96</span>
            <FontAwesomeIcon icon={faThumbsUp} />
          </div>
          <div className="like-down">
            <span>69</span>
            <FontAwesomeIcon icon={faThumbsDown} />
          </div>
        </div>
        <div className="desc">
          <span>Description: </span>
          {movie.desc ||
            `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).

`}
        </div>
      </div>
    </Style>
  );
};
export default Movie;
