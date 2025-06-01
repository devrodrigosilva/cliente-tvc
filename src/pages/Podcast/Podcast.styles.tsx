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
  /* background-color: ${({ theme }) => theme.colors.backgroundSecondary}; */
  row-gap: ${({ theme }) => theme.spacing.lg};
  align-items: center;
  height: 100%;
`;

export const HasNoEpisodes = styled.h1`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: 'Roboto', sans-serif;
  font-size: ${({ theme }) => theme.fonts.sizes.desktop.xl};
`;

export const HasNoEpisodesContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;
