import React from 'react';
import { Container, Content, Title, Section, Row } from './Rss.styles';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Body from '../../components/Body/Body';

const Planos: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Title>Como Usar o RSS Feed</Title>
        <Section>
          <Row>
            <Body size="l">1. O que é um RSS Feed?</Body>
          </Row>
          <Row>
            <Body size="s">
              O RSS Feed é um link que permite que você acompanhe
              automaticamente os episódios dos nossos podcasts em seu aplicativo
              favorito, sem precisar acessar o site manualmente.
            </Body>
          </Row>
        </Section>

        <Section>
          <Row>
            <Body size="l">2. Como Assinar o Feed?</Body>
          </Row>

          <Row>
            <Body size="m">
              Para assinar o nosso podcast via RSS Feed, siga estes passos:
            </Body>
          </Row>

          <Row>
            <Body size="s">Copie o link do RSS Feed do programa desejado.</Body>
          </Row>

          <Row>
            <Body size="s">
              Abra seu aplicativo de podcast (como Spotify, Apple Podcasts ou
              Podcast Addict).
            </Body>
          </Row>

          <Row>
            <Body size="s">
              Procure a opção “Adicionar feed RSS” e cole o link copiado.
            </Body>
          </Row>

          <Row>
            <Body size="s">
              Escolha a opção de autenticação, informe suas credenciais e
              pronto! Você começará a receber automaticamente os novos
              episódios.
            </Body>
          </Row>
        </Section>
      </Content>
      <Footer />
    </Container>
  );
};

export default Planos;
