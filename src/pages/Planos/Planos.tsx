import React from 'react';
import {
  Container,
  Content,
  Title,
  PlanosList,
  PlanoItem,
  PlanoTitle,
  Preco,
  Descricao,
  Button,
  Vantagem,
} from './Planos.styles';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Planos: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Title>Escolha um Plano</Title>
        <PlanosList>
          <PlanoItem>
            <PlanoTitle>Mensal</PlanoTitle>
            <Preco>R$ 9,90</Preco>
            <Descricao>Pago mensalmente</Descricao>
            <Vantagem>✓ Variedade de Conteúdos</Vantagem>
            <Vantagem>✓ Recomendações Personalizadas</Vantagem>
            <Vantagem>✓ Experiência Sem Anúncios</Vantagem>
            <Vantagem>✓ Acesso Offline</Vantagem>
            <Vantagem>✓ Interface Intuitiva</Vantagem>
            <Vantagem>✓ acesso antecipado</Vantagem>
            <Button>ASSINAR</Button>
          </PlanoItem>

          <PlanoItem>
            <PlanoTitle>Semestral</PlanoTitle>
            <Preco>R$ 59,90</Preco>
            <Descricao>Pago semestralmente</Descricao>
            <Vantagem>✓ Variedade de Conteúdos</Vantagem>
            <Vantagem>✓ Recomendações Personalizadas</Vantagem>
            <Vantagem>✓ Experiência Sem Anúncios</Vantagem>
            <Vantagem>✓ Acesso Offline</Vantagem>
            <Vantagem>✓ Interface Intuitiva</Vantagem>
            <Vantagem>✓ acesso antecipado</Vantagem>
            <Button>ASSINAR</Button>
          </PlanoItem>

          <PlanoItem>
            <PlanoTitle>Anual</PlanoTitle>
            <Preco>R$ 99,90</Preco>
            <Descricao>Pago anualmente</Descricao>
            <Vantagem>✓ Variedade de Conteúdos</Vantagem>
            <Vantagem>✓ Recomendações Personalizadas</Vantagem>
            <Vantagem>✓ Experiência Sem Anúncios</Vantagem>
            <Vantagem>✓ Acesso Offline</Vantagem>
            <Vantagem>✓ Interface Intuitiva</Vantagem>
            <Vantagem>✓ acesso antecipado</Vantagem>
            <Button>ASSINAR</Button>
          </PlanoItem>

          <PlanoItem>
            <PlanoTitle>Bianual</PlanoTitle>
            <Preco>R$ 150,00</Preco>
            <Descricao>Pago anualmente</Descricao>
            <Vantagem>✓ Variedade de Conteúdos</Vantagem>
            <Vantagem>✓ Recomendações Personalizadas</Vantagem>
            <Vantagem>✓ Experiência Sem Anúncios</Vantagem>
            <Vantagem>✓ Acesso Offline</Vantagem>
            <Vantagem>✓ Interface Intuitiva</Vantagem>
            <Vantagem>✓ acesso antecipado</Vantagem>
            <Button>ASSINAR</Button>
          </PlanoItem>
        </PlanosList>
      </Content>
      <Footer />
    </Container>
  );
};

export default Planos;
