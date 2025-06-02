import React, { useEffect, useState } from 'react';
import { Controller } from 'react-hook-form';

import {
  Container,
  Content,
  Form,
  Title,
  ButtonCancel,
  ButtonSave,
  Label,
  InfosContainer,
  Input,
  Col,
  Row,
  ButtonAssinar,
} from './Perfil.styles';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { UseProfile } from './usePerfil';
import Body from '../../components/Body/Body';
import { useTheme } from 'styled-components';

export interface UserInfosProps {
  email: string;
  name: string;
  signature?: {
    plan: string;
    paymentDay: string;
  };
}

const Perfil: React.FC = () => {
  const { colors } = useTheme();
  const {
    control,
    fetchProfileInfo,
    formState,
    handleSubmit,
    reset,
    isButtonDisabled,
    errorPassword,
    userInfos,
    setUserInfos,
    name,
  } = UseProfile();

  return (
    <Container>
      <Header />
      <Content>
        {!!name && (
          <>
            {userInfos?.signature && (
              <InfosContainer>
                <Title>Assinatura</Title>
                <Row>
                  <Col>
                    <Label>Tipo: {userInfos?.signature.plan}</Label>
                  </Col>
                  <Col>
                    <Label>Vencimento: {userInfos?.signature.paymentDay}</Label>
                  </Col>
                  <Col>
                    <ButtonCancel>Cancelar</ButtonCancel>
                  </Col>
                </Row>
              </InfosContainer>
            )}

            <Form>
              <Row>
                <Col>
                  <Title>Detalhes da conta</Title>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Label>Email</Label>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => <Input {...field} disabled />}
                  />
                  {formState.errors.email && (
                    <span>{formState.errors.email.message}</span>
                  )}
                </Col>
                <Col>
                  <Label>Nome</Label>
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => <Input {...field} disabled />}
                  />
                  {formState.errors.name && (
                    <span>{formState.errors.name.message}</span>
                  )}
                </Col>
              </Row>

              <Row>
                <Col>
                  <Title>Alterar senha</Title>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Label>Nova senha</Label>
                  <Controller
                    name="newPassword"
                    control={control}
                    render={({ field }) => (
                      <Input
                        type="password"
                        onChange={field.onChange}
                        value={field.value ?? ''}
                      />
                    )}
                  />
                  {errorPassword && (
                    <Body size="s" color={colors.error}>
                      {errorPassword}
                    </Body>
                  )}
                </Col>
              </Row>

              <Row>
                <Col>
                  <Label>Confirmar nova senha</Label>
                  <Controller
                    name="confirmNewPassword"
                    control={control}
                    render={({ field }) => (
                      <Input
                        type="password"
                        onChange={field.onChange}
                        value={field.value ?? ''}
                      />
                    )}
                  />
                  {errorPassword && (
                    <Body size="s" color={colors.error}>
                      {errorPassword}
                    </Body>
                  )}
                </Col>
              </Row>

              <Row>
                <Col>
                  <ButtonSave
                    onClick={handleSubmit}
                    disabled={isButtonDisabled}
                  >
                    Salvar alterações
                  </ButtonSave>
                </Col>
              </Row>
            </Form>
          </>
        )}
      </Content>
      <Footer />
    </Container>
  );
};

export default Perfil;
