import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Content,
  Icon,
  Label,
  Row,
  Input,
  Mensagem,
} from './Cadastrar.styles';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { UseCadastrar } from './useCadastrar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from 'styled-components';

const Cadastrar: React.FC = () => {
  const { colors } = useTheme();
  const { casdastrar, validarEmail } = UseCadastrar();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleCadastrar = async () => {
    if (!email || !senha || !name) {
      setMensagem('Preencha todos os dados');
      return;
    }

    if (!validarEmail(email)) {
      setMensagem('Email inválido');
      return;
    }

    const result = await casdastrar({ email, password: senha, name });

    if (!result) setMensagem('Erro ao registrar usuário');
    else navigate('/login');
  };

  return (
    <Container>
      <Header />
      <Content>
        <Icon>
          <FontAwesomeIcon
            color={colors.backgroundPrimary}
            icon={faUser}
            size={'6x'}
          />
        </Icon>
        <Box>
          <Label>Nome</Label>
          <Input
            type="text"
            value={name}
            onChange={(value) => {
              setName(value.target.value);
              setMensagem('');
            }}
            placeholder="Digite seu nome"
          />
          <Label>Email</Label>
          <Input
            type="email"
            value={email}
            onChange={(value) => {
              setEmail(value.target.value);
              setMensagem('');
            }}
            placeholder="Digite seu email"
          />
          <Label>Senha</Label>
          <Input
            type="password"
            value={senha}
            onChange={(value) => {
              setSenha(value.target.value);
              setMensagem('');
            }}
            placeholder="Digite sua senha"
          />
          <Row>
            <Mensagem>{mensagem}</Mensagem>
          </Row>

          <Button onClick={handleCadastrar}>Cadastrar</Button>
        </Box>
      </Content>
      <Footer />
    </Container>
  );
};

export default Cadastrar;
