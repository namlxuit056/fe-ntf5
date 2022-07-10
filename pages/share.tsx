import ShareMovie from './component/movie/ShareMovie';
import styled from 'styled-components';
import Header from './component/Header';
const Style = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
const PageShare = () => {
  return (
    <div className="container">
      <Header />
      <Style>
        <ShareMovie />
      </Style>
    </div>
  );
};

export default PageShare;
