import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Content,
  Icon,
  Label,
  Input,
  Mensagem,
} from './RecuperarSenha.styles';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { useRecuperarSenha } from './useRecuperarSenha';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from 'styled-components';

const RecuperarSenha: React.FC = () => {
  const { colors } = useTheme();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [codigo, setCodigo] = useState('');
  const [emailEnviado, setEmailEnviado] = useState(false);
  const { enviarCodigo, trocarDeSenha } = useRecuperarSenha();

  const enviarEmail = () => {
    enviarCodigo({ email });
    setEmailEnviado(true);
  };

  const cadastrarNovaSenha = () => {
    trocarDeSenha({ email, password: senha, code: codigo });
    navigate('/login');
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
        <Box isVisible={!emailEnviado}>
          <Label>Email</Label>
          <Input
            type="email"
            value={email}
            onChange={(value) => {
              setEmail(value.target.value);
            }}
          />
          <Button onClick={enviarEmail}>Recuperar</Button>
        </Box>

        <Box isVisible={emailEnviado}>
          <Mensagem>Um codigo de verificacao foi enviado ao seu email</Mensagem>

          <Label>Nova senha</Label>
          <Input
            type="password"
            value={senha}
            onChange={(value) => {
              setSenha(value.target.value);
            }}
          />
          <Label>Codigo de verificação</Label>
          <Input
            value={codigo}
            onChange={(value) => {
              setCodigo(value.target.value);
            }}
          />
          <Button onClick={cadastrarNovaSenha}>Salvar nova senha</Button>
        </Box>
      </Content>
      <Footer />
    </Container>
  );
};

export default RecuperarSenha;
