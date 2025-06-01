import React, { useEffect, useState } from 'react';
import { Container, Content } from './Podcasts.styles';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import PodcastsList from '../Home/components/Podcasts/Podcasts';
import EpisodiosList from '../Podcast/components/Episodios/Episodios';
import api from '../../services/api';

const Podcasts: React.FC = () => {
  const [episodios, setEpisodios] = useState<[]>();

  const fetchEpisodios = async () => {
    const episodiosFetch: [] =
      (await (await api.post('/episodes/last'))?.data?.episodes) ?? [];
    setEpisodios(episodiosFetch);
  };

  useEffect(() => {
    fetchEpisodios();
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <PodcastsList />
        {episodios && episodios.length > 0 && (
          <EpisodiosList episodios={episodios} title="Ultimos episódios" />
        )}
      </Content>
      <Footer />
    </Container>
  );
};

export default Podcasts;
