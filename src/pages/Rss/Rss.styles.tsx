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

export const Section = styled.section`
  width: 100%;
  max-width: 1440px;
  padding: 0px 32px;
`;

export const Row = styled.div`
  margin-bottom: 8px;
`;
