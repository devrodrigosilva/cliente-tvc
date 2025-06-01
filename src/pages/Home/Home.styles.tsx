import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-y: hidden;
  row-gap: 32px;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 32px;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
`;
