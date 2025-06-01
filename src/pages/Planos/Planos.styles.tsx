import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  overflow-y: hidden;
  row-gap: ${({ theme }) => theme.spacing.lg};
`;

export const Content = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  row-gap: ${({ theme }) => theme.spacing.lg};
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing.lg};
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  font-family: 'Roboto', sans-serif;
  font-size: ${({ theme }) => theme.fonts.sizes.desktop.xl};
  align-self: flex-start;
`;

export const PlanosList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
`;

export const PlanoItem = styled.div<{ diferente?: boolean }>`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.lg};
  min-width: 300px;
  min-height: 500px;
  max-width: 300px;
`;

export const PlanoTitle = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  font-family: 'Roboto', sans-serif;
  font-size: ${({ theme }) => theme.fonts.sizes.desktop.l};
  align-self: flex-start;
`;

export const Preco = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  font-family: 'Roboto', sans-serif;
  font-size: ${({ theme }) => theme.fonts.sizes.desktop.xl};
  align-self: flex-start;
`;

export const Descricao = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: 'Roboto', sans-serif;
  font-size: ${({ theme }) => theme.fonts.sizes.desktop.s};
  align-self: flex-start;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  white-space: nowrap;
`;

export const Vantagem = styled.span`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: 'Roboto', sans-serif;
  font-size: ${({ theme }) => theme.fonts.sizes.desktop.s};
  align-self: flex-start;
  white-space: nowrap;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.buttonText};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  font-family: 'Roboto', sans-serif;
  font-size: ${({ theme }) => theme.fonts.sizes.desktop.l};
  align-self: flex-start;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  text-align: center;
  margin-top: auto;

  &:hover {
    cursor: pointer;
    filter: brightness(85%);
  }
`;
