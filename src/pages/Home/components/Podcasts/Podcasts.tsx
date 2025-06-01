import React, { useEffect, useState } from 'react';
import {
  Container,
  Content,
  PodcastsContainer,
  Podcast,
  Img,
  Title,
  Description,
  SectionTitle,
} from './Podcasts.styles';

import api from '../../../../services/api';
import { useNavigate } from 'react-router-dom';

const Podcasts: React.FC = () => {
  const navigate = useNavigate();

  const [podcasts, setPodcasts] = useState<[]>();

  const fetchPodcasts = async () => {
    const podcastsFetch: [] =
      (await (await api.get('podcasts'))?.data?.podcasts) ?? [];
    setPodcasts(podcastsFetch);
  };

  useEffect(() => {
    fetchPodcasts();
  }, []);

  return (
    <Container>
      <Content>
        {podcasts && podcasts.length > 0 && (
          <>
            <SectionTitle>Podcasts</SectionTitle>
            <PodcastsContainer>
              {podcasts?.map(({ name, description, url, id }) => (
                <Podcast key={id}>
                  <Img
                    src={`https://p4ulo3dson.com/tvc/podcast/${url}/banner.jpg`}
                    onClick={() =>
                      navigate(`../podcast/${url}`, {
                        state: { podcastId: id, podcastName: url },
                      })
                    }
                  />
                  <Title
                    onClick={() =>
                      navigate(`../podcast/${url}`, {
                        state: { podcastId: id, podcastName: url },
                      })
                    }
                  >
                    {name}
                  </Title>
                  <Description>{description}</Description>
                </Podcast>
              ))}
            </PodcastsContainer>
          </>
        )}
      </Content>
    </Container>
  );
};

export default Podcasts;
