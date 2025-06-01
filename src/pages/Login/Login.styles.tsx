import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  overflow-y: hidden;
  row-gap: ${({ theme }) => theme.spacing.xl};
`;

export const Content = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  row-gap: ${({ theme }) => theme.spacing.xl};
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing.xl};
`;

export const Box = styled.div`
  padding: ${({ theme }) =>
    `${theme.spacing.xxl} ${theme.spacing.xl} ${theme.spacing.xl} ${theme.spacing.xl}`};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  max-width: 600px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;

  margin-bottom: ${({ theme }) => theme.spacing.lg};
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
`;

export const Label = styled.span`
  font: ${({ theme }) =>
    `${theme.fonts.weights.regular} ${theme.fonts.sizes.desktop.m} 'Roboto'`};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  height: 48px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font: ${({ theme }) =>
    `${theme.fonts.weights.regular} ${theme.fonts.sizes.desktop.m} 'Roboto'`};
  padding: 0 ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.textPrimary};
  border: 1px solid ${({ theme }) => theme.colors.border};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const EsqueceuSenha = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary};
  font: ${({ theme }) =>
    `${theme.fonts.weights.regular} ${theme.fonts.sizes.desktop.m} 'Roboto'`};
  &:hover {
    cursor: pointer;
    filter: brightness(150%);
  }
`;

export const Cadastrar = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary};
  font: ${({ theme }) =>
    `${theme.fonts.weights.regular} ${theme.fonts.sizes.desktop.m} 'Roboto'`};
  &:hover {
    cursor: pointer;
    filter: brightness(150%);
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font: ${({ theme }) =>
    `${theme.fonts.weights.regular} ${theme.fonts.sizes.desktop.m} 'Roboto'`};
  height: 60px;
  background-color: transparent; /* Remover o fundo */
  border: 2px solid ${({ theme }) => theme.colors.primary}; /* Borda com a cor do botão */
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-top: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) =>
    theme.colors.primary}; /* Cor do texto com a cor do botão */

  &:hover {
    cursor: pointer;
    filter: brightness(110%);
  }
`;

export const Mensagem = styled.span`
  font: ${({ theme }) =>
    `${theme.fonts.weights.regular} ${theme.fonts.sizes.desktop.m} 'Roboto'`};
  color: ${({ theme }) => theme.colors.error};
`;
