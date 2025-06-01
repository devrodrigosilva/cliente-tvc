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

export const Box = styled.div<{ isVisible: boolean }>`
  padding: ${({ theme }) =>
    `${theme.spacing.xxl} ${theme.spacing.lg} ${theme.spacing.sm} ${theme.spacing.lg}`};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  max-width: 600px;
  width: 100%;
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  justify-content: center;
  flex-direction: column;
`;

export const Icon = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
`;

export const Label = styled.span`
  font: ${({ theme }) =>
    `${theme.fonts.weights.regular} ${theme.fonts.sizes.desktop.s} 'Roboto'`};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
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
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font: ${({ theme }) =>
    `${theme.fonts.weights.regular} ${theme.fonts.sizes.desktop.s} 'Roboto'`};
  height: 60px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-top: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.textPrimary};

  &:hover {
    cursor: pointer;
    filter: brightness(110%);
  }
`;

export const Mensagem = styled.span`
  font: ${({ theme }) =>
    `${theme.fonts.weights.regular} ${theme.fonts.sizes.desktop.m} 'Roboto'`};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  align-self: center;
`;
