import styled from 'styled-components';

export const Container = styled.div`
  padding: 32px;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  height: 576px;
`;

export const Banner = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
  object-fit: cover;
`;
