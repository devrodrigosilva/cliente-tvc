import React, { useState } from 'react';
import {
  Container,
  Content,
  EpisodiosContainer,
  Episodio,
  Img,
  Title,
  Description,
  SectionTitle,
  SearchContainer,
  SearchInput,
  SearchButton,
} from './Episodios.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';

interface EpisodiosProps {
  title?: string;
  episodios?: any[];
  hasSearch?: boolean;
}

const Episodios: React.FC<EpisodiosProps> = ({
  episodios,
  title,
  hasSearch,
}) => {
  const navigate = useNavigate();
  const [textSearch, setTextSearch] = useState('');
  const theme = useTheme();

  function removerAcentos(str: string) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  const includesOn = ({
    textSearch,
    text,
  }: {
    textSearch: string;
    text: string;
  }) => {
    const textSearchNormalized = removerAcentos(textSearch);
    const textNormalized = removerAcentos(text);
    const regex = new RegExp(`${textSearchNormalized}`, 'i');
    return regex.test(textNormalized);
  };

  const episodiosFiltered = hasSearch
    ? episodios?.filter(
        ({ name, description, presenters, guests }) =>
          includesOn({ textSearch: textSearch, text: name }) ||
          includesOn({ textSearch: textSearch, text: description }) ||
          includesOn({ textSearch: textSearch, text: presenters }) ||
          includesOn({ textSearch: textSearch, text: guests }),
      )
    : episodios;

  return (
    <Container>
      <Content>
        <SectionTitle>{title ?? 'Episódios'}</SectionTitle>
        {hasSearch && (
          <SearchContainer>
            <SearchInput
              placeholder="Pesquisar"
              value={textSearch}
              onChange={(e) => setTextSearch(e.target.value)}
            />
            <SearchButton>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                color={theme.colors.black}
              />
            </SearchButton>
          </SearchContainer>
        )}
        {episodiosFiltered && episodiosFiltered.length > 0 && (
          <EpisodiosContainer>
            {episodiosFiltered?.map(
              ({ name, description, id, url, podcastUrl, podcastId }) => (
                <Episodio key={id}>
                  <Img
                    src={`https://p4ulo3dson.com/tvc/podcast/${podcastUrl}/${url}/thumbnail.jpg`}
                    onClick={() =>
                      navigate(`../../podcast/${podcastUrl}/${url}`, {
                        state: { id, podcastId },
                      })
                    }
                  />
                  <Title
                    onClick={() =>
                      navigate(`../../podcast/${podcastUrl}/${url}`, {
                        state: { id, podcastId },
                      })
                    }
                  >
                    {name}
                  </Title>
                  <Description>{description}</Description>
                </Episodio>
              ),
            )}
          </EpisodiosContainer>
        )}
      </Content>
    </Container>
  );
};

export default Episodios;
