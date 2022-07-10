import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import Header from './component/Header';
import ListMovie from './component/movie/ListMovie';
const Style = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 50px;
  .movies {
    margin: 0 auto;
    width: 100%;
    .movie {
      margin-top: 30px;
    }
  }
`;
const movie = {
  title: 'Hello',
  author: {
    email: 'hello@example.com',
  },
  desc: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
};
const Home: NextPage = () => {
  return (
    <div className="container">
      <Header />
      <Head>
        <title>NTF5 Movies</title>
        <meta name="description" content="NTF5" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Style>
        <div className="movies">
          <ListMovie></ListMovie>
        </div>
      </Style>
    </div>
  );
};

export default Home;
