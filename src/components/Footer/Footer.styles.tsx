import styled from 'styled-components';

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  display: flex;
  flex-direction: column;
  min-height: 200px;
  max-width: 100vw;
  padding: 32px 32px;
  justify-content: center;
  align-items: center;
  row-gap: 16px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  row-gap: 32px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  row-gap: 16px;
  align-items: center;
`;

export const Link = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;

  &:hover {
    cursor: pointer;
    filter: brightness(110%);
  }
`;
