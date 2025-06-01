import React from 'react';
import {
  Benefit,
  Container,
  BenefitsContainer,
  Img,
  Title,
  Description,
  Button,
} from './Benefits.styles';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faFilm,
  faMagnifyingGlassChart,
  faRoad,
} from '@fortawesome/free-solid-svg-icons';
import { useTheme } from 'styled-components';

const Benefits: React.FC = () => {
  const { colors } = useTheme();
  const navigate = useNavigate();

  const benefits = [
    {
      title: 'Diversidade de Conteúdo para Todos os Gostos',
      description:
        'A plataforma oferece uma vasta biblioteca de podcasts que abrange temas para todos os interesses: notícias, comédia, negócios, cultura, esporte, desenvolvimento pessoal e muito mais. Não importa se você busca uma conversa divertida, um aprendizado novo ou histórias inspiradoras; sempre haverá algo para você. Acesse conteúdos locais e internacionais e mergulhe em uma experiência que atende a diferentes estilos, faixas etárias e necessidades de entretenimento e conhecimento.',
      uriImage: faFilm,
    },
    {
      title: 'Experiência Personalizada e Recomendações Inteligentes',
      description:
        'Com a ajuda de algoritmos avançados, a plataforma identifica seus interesses para oferecer recomendações altamente personalizadas. Desde o primeiro uso, você encontrará episódios que combinam com seu gosto, seja por gêneros, temas ou criadores. Além disso, a interface intuitiva permite que você organize seus favoritos e acompanhe facilmente suas séries preferidas, garantindo uma experiência personalizada e imersiva a cada acesso.',
      uriImage: faMagnifyingGlassChart,
    },
    {
      title: 'Acesso Offline e Sem Anúncios',
      description:
        'Escute seus podcasts sem interrupções publicitárias e aproveite para baixar episódios para acesso offline, ideal para momentos em que você não tem conexão com a internet, como em viagens ou locais remotos. Desfrute de uma experiência de áudio contínua, sem interrupções e de alta qualidade. Com a liberdade de ouvir onde e quando quiser, você transforma qualquer momento em uma oportunidade para se entreter ou aprender mais.',
      uriImage: faRoad,
    },
  ];

  return (
    <Container>
      <BenefitsContainer>
        {benefits.map(({ title, description, uriImage }) => (
          <Benefit key={title}>
            <Img>
              <FontAwesomeIcon
                icon={uriImage}
                size="5x"
                color={colors.primary}
              />
            </Img>
            <Title style={{ color: colors.textPrimary }}>{title}</Title>
            <Description style={{ color: colors.textSecondary }}>
              {description}
            </Description>
          </Benefit>
        ))}
      </BenefitsContainer>
      <Button onClick={() => navigate('/planos')}>ASSINAR</Button>
    </Container>
  );
};

export default Benefits;
