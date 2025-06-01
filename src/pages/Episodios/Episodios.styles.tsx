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
  row-gap: ${({ theme }) => theme.spacing.lg};
  align-items: center;
`;
