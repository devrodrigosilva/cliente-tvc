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
  max-width: 1140px;
  justify-items: center;
  align-self: center;
`;

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: ${({ theme }) => theme.spacing.xxl};
  align-self: flex-start;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.md};
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 8px;
`;

export const Col = styled.div<{ maxWidth?: string }>`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-items: center;
`;

export const Title = styled.div`
  font: ${({ theme }) =>
    `${theme.fonts.weights.regular} ${theme.fonts.sizes.desktop.l} 'Roboto'`};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const NickName = styled.div``;

export const OldPassword = styled.div``;

export const NewPassword = styled.div``;

export const ConfirPassword = styled.div``;

export const ButtonCancel = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font: ${({ theme }) =>
    `${theme.fonts.weights.regular} ${theme.fonts.sizes.desktop.s} 'Roboto'`};
  height: 32px;
  background-color: ${({ theme }) => theme.colors.error};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  color: ${({ theme }) => theme.colors.white};
  padding: 0 ${({ theme }) => theme.spacing.md};
  align-self: flex-end;
  margin-bottom: ${({ theme }) => theme.spacing.sm};

  &:hover {
    cursor: pointer;
    filter: brightness(85%);
  }
`;

export const Type = styled.div``;

export const Maturity = styled.div``;

export const ButtonSave = styled.button<{ maxWidth?: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font: ${({ theme }) =>
    `${theme.fonts.weights.regular} ${theme.fonts.sizes.desktop.m} 'Roboto'`};
  height: 60px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-top: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.buttonText};
  max-width: ${({ maxWidth }) => maxWidth ?? '100%'};
  padding: 0 ${({ theme }) => theme.spacing.md};
  align-self: flex-end;

  &:hover {
    cursor: pointer;
    filter: brightness(85%);
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabled};
    cursor: default;
    filter: brightness(100%);
  }
`;

export const Label = styled.span`
  font: ${({ theme }) =>
    `${theme.fonts.weights.regular} ${theme.fonts.sizes.desktop.s} 'Roboto'`};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  white-space: nowrap;
`;

export const Input = styled.input<{ disabled?: boolean }>`
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.black : theme.colors.white};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.disabled : theme.colors.backgroundSecondary};
  height: 48px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font: ${({ theme }) =>
    `${theme.fonts.weights.regular} ${theme.fonts.sizes.desktop.s} 'Roboto'`};
  padding: 0 ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.border};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;
