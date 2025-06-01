import React from 'react';
import { Container, Content } from './Home.styles';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Benefits from './components/Benefits/Benefits';
import Podcasts from './components/Podcasts/Podcasts';
import Carousel from './components/Carousel/Carousel';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Carousel />
        <Benefits />
        <Podcasts />
      </Content>
      <Footer />
    </Container>
  );
};

export default Home;
