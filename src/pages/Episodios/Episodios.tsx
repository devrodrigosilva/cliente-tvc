import React, { useEffect, useState } from 'react';
import { Container, Content } from './Episodios.styles';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import EpisodiosList from '../Podcast/components/Episodios/Episodios';
import api from '../../services/api';

const Episodios: React.FC = () => {
  const [episodios, setEpisodios] = useState<[]>();

  const fetchEpisodios = async () => {
    const episodiosFetch: [] =
      (await (await api.get('/episodes'))?.data?.episodes) ?? [];
    setEpisodios(episodiosFetch);
  };

  useEffect(() => {
    fetchEpisodios();
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        {episodios && episodios.length > 0 && (
          <EpisodiosList episodios={episodios} title="Episodios" hasSearch />
        )}
      </Content>
      <Footer />
    </Container>
  );
};

export default Episodios;
