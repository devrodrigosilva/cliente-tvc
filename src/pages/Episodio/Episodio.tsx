import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { UseEpisodio } from './useEpisodio';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Body from '../../components/Body/Body';
import EpisodiosList from '../Podcast/components/Episodios/Episodios';
import api from '../../services/api';
import getLocalUserId from '../../services/helpers/getLocalUserId';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faUser } from '@fortawesome/free-solid-svg-icons';
import {
  Container,
  Content,
  Row,
  Col,
  EpisodioContainer,
  ComentariosSection,
  Input,
  List,
  ComentarioItem,
  NameComent,
  Foto,
  SectionTitle,
  Button,
  Del,
} from './Episodio.styles';
import { useTheme } from 'styled-components';
import getUserType from '../../services/helpers/getUserType';
import { useNavigate } from 'react-router-dom';

const Episodio: React.FC = () => {
  const navigate = useNavigate();

  const { colors } = useTheme();
  const location = useLocation();
  const { fetchEpisodio, fetchComentarios, saveComment, deleteComment } =
    UseEpisodio();
  const podcastSlug = location.pathname.split('/')[2];

  const { podcastId, id } = location.state || {};
  const { pathname } = location || '';
  const [titulo, setTitulo] = useState('');
  const [data, setData] = useState('');
  const [apresentadores, setApresentadores] = useState('');
  const [convidados, setConvidados] = useState('');
  const [descricao, setDescricao] = useState('');
  const [rssFeed, setRssFeed] = useState('');
  const [episodios, setEpisodios] = useState<[]>();
  const [comentario, setComentario] = useState('');
  const [localId, setLocalId] = useState('');
  const [comentarios, setComentarios] = useState<
    {
      id: string;
      foto: string;
      nickName: string;
      comentario: string;
      userId: string;
    }[]
  >();


  useEffect(() => {
    if (id) {
      fetchEpisodio({ id }).then(({ episode }) => {
        const { type } = episode
        if(type !== 'publico'){
          getUserType().then((userType) => {
            if (userType !== 'USER_ASSINANTE') navigate('/planos');
          });
        }else{
          setTitulo(episode.name);
          setData(
            new Date(episode.releaseDate).toLocaleDateString('pt-BR', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            }),
          );
          setApresentadores(`Apresentadores: ${episode.presenters}`);
          setConvidados(`Convidados: ${episode.guests}`);
          setDescricao(episode.description);
          setRssFeed(`RSS Feed: www.tecnovesttv.com/${podcastSlug}`);
        }
      });
    }
  }, [fetchEpisodio, id]);

  const fetchEpisodios = async () => {
    if (podcastId) {
      const episodiosFetch: [] =
        (await (
          await api.get('/episodes/recommended-by-podcastId', {
            params: { podcastId },
          })
        )?.data?.episodes) ?? [];

      setEpisodios(episodiosFetch);
    }
  };

  useEffect(() => {
    fetchEpisodios();
  }, []);

  useEffect(() => {
    fetchComentarios({ episodeId: id }).then(({ commentsFormated }) => {
      setComentarios(commentsFormated);
    });
  }, []);

  useEffect(() => {
    getLocalUserId().then((newLocalId) => {
      setLocalId(newLocalId ?? '');
    });
  }, []);

  const handleComent = async () => {
    await saveComment({ comment: comentario, episodeId: id });
    setComentario('');
    fetchComentarios({ episodeId: id }).then(({ commentsFormated }) => {
      setComentarios(commentsFormated);
    });
  };

  const handleComentDelete = async ({ id }: { id: string }) => {
    await deleteComment({ id });
    setComentarios(comentarios?.filter((c) => c.id !== id));
  };

  const renderComent = ({
    id,
    nickName,
    comentario,
    userId,
  }: {
    id: string;
    foto: string;
    nickName: string;
    comentario: string;
    userId: string;
  }) => {
    const showDel = userId === localId;
    return (
      <ComentarioItem key={id}>
        <Foto>
          <FontAwesomeIcon color={colors.textPrimary} icon={faUser} size="2x" />
        </Foto>
        <NameComent>
          <Body children={nickName} size="m" color={colors.textPrimary} />
          <Body children={comentario} size="s" color={colors.textPrimary} />
        </NameComent>
        {showDel && (
          <Del onClick={() => handleComentDelete({ id })}>
            <FontAwesomeIcon color={colors.textPrimary} icon={faTrash} />
          </Del>
        )}
      </ComentarioItem>
    );
  };

  return (
    <Container>
      <Header />
      <Content>
        <EpisodioContainer>
          <Row>
            <Col>
              <Body children={titulo} size="l" />
            </Col>
            <Col>
              <Body children={data} size="s" />
            </Col>
          </Row>

          <Row>
            <Col>
              <Body children={apresentadores} size="m" />
            </Col>
            <Col>
              <Body children={convidados} size="m" />
            </Col>
          </Row>

          <Row>
            <Body children={descricao} size="m" />
          </Row>
          <Row>
            <Body children={rssFeed} size="s" />
          </Row>

          <Row style={{ justifyContent: 'center' }}>
            <video controls>
              <source
                src={`https://p4ulo3dson.com/tvc/${pathname}/video.mp4`}
                type="video/mp4"
              />
            </video>
          </Row>
        </EpisodioContainer>

        <ComentariosSection>
          <SectionTitle>Comentarios</SectionTitle>
          <Input
            cols={5}
            maxLength={512}
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
          />
          {comentario && <Button onClick={handleComent}>Enviar</Button>}
          <List>
            {comentarios?.map((comentario) => renderComent(comentario))}
          </List>
        </ComentariosSection>

        <EpisodiosList episodios={episodios} title="Episodios recomendados" />
      </Content>
      <Footer />
    </Container>
  );
};

export default Episodio;
