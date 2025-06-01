import React, { useState } from 'react';
import {
  Box,
  Button,
  Cadastrar,
  Container,
  Content,
  EsqueceuSenha,
  Icon,
  Label,
  Row,
  Input,
  Mensagem,
} from './Login.styles';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import { UseLogin } from './useLogin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from 'styled-components';

const Login: React.FC = () => {
  const { colors } = useTheme();

  const { logar } = UseLogin();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleLogin = async () => {
    const result = await logar({ email, password: senha });
    if (!result) setMensagem('Email ou senha incorreto');
    else navigate('/');
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
          <Label>{'Email'}</Label>
          <Input
            type="email"
            value={email}
            onChange={(value) => {
              setEmail(value.target.value);
              setMensagem('');
            }}
            placeholder="Digite seu e-mail"
          />
          <Label>{'Senha'}</Label>
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
          <Row>
            <EsqueceuSenha onClick={() => navigate('/recuperarSenha')}>
              Esqueceu a senha?
            </EsqueceuSenha>
            <Cadastrar onClick={() => navigate('/cadastrar')}>
              Cadastrar
            </Cadastrar>
          </Row>
          <Button onClick={handleLogin}>Logar</Button>
        </Box>
      </Content>
      <Footer />
    </Container>
  );
};

export default Login;
