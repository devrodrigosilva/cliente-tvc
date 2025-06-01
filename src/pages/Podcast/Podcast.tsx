import React, { useEffect, useState } from 'react';
import {
  Container,
  Content,
  HasNoEpisodes,
  HasNoEpisodesContainer,
} from './Podcast.styles';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Episodios from './components/Episodios/Episodios';
import { useLocation } from 'react-router-dom';
import api from '../../services/api';

const Podcasts: React.FC = () => {
  const location = useLocation();
  const { podcastId } = location.state || {};
  const [episodios, setEpisodios] = useState<[]>();
  const [episodiosMostDownloaded, setEpisodiosMostDownloaded] = useState<[]>();
  const [isLoading, setIsLoading] = useState(true);

  const fetchEpisodiosMostDownloaded = async () => {
    const episodiosFetch: [] = await (
      await api.post('/episodes/most-downloaded-by-podcastId', {
        podcastId,
      })
    )?.data;

    setEpisodiosMostDownloaded(episodiosFetch);
    setIsLoading(false);
  };

  const fetchEpisodios = async () => {
    const episodiosFetch: [] = await (
      await api.get('/episodes/by-podcastId', {
        params: {
          podcastId,
        },
      })
    )?.data?.episodes;

    setEpisodios(episodiosFetch);
  };

  useEffect(() => {
    fetchEpisodios();
    fetchEpisodiosMostDownloaded();
  }, []);

  const showHasNoEpisodes =
    (!episodiosMostDownloaded || episodiosMostDownloaded.length == 0) &&
    (!episodios || episodios.length == 0) &&
    !isLoading;

  return (
    <Container>
      <Header />
      <Content>
        {showHasNoEpisodes && (
          <HasNoEpisodesContainer>
            <HasNoEpisodes>
              Não há episódios disponíveis para este podcast no momento.
            </HasNoEpisodes>
          </HasNoEpisodesContainer>
        )}
        {episodiosMostDownloaded && episodiosMostDownloaded.length > 0 && (
          <Episodios
            episodios={episodiosMostDownloaded}
            title="Episódios mais baixados"
          />
        )}
        {episodios && episodios.length > 0 && (
          <Episodios episodios={episodios} hasSearch />
        )}
      </Content>
      <Footer />
    </Container>
  );
};

export default Podcasts;
