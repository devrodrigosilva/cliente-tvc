import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm};
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: ${({ theme }) => theme.spacing.lg};
`;

export const SectionTitle = styled.div`
  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fonts.sizes.desktop.xl};
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
`;

export const PodcastsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.sm};
  row-gap: ${({ theme }) => theme.spacing.lg};
  justify-content: space-between;
`;

export const Podcast = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  row-gap: ${({ theme }) => theme.spacing.sm};
  flex: 1;
  min-width: 400px;

  @media (max-width: 600px) {
    min-width: 200px;
  }
`;

export const Img = styled.img`
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.md};

  @media (max-width: 600px) {
    height: auto;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  font-size: ${({ theme }) => theme.fonts.sizes.desktop.l};

  width: fit-content;

  &:hover {
    cursor: pointer;
  }
`;

export const Description = styled.p`
  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: ${({ theme }) => theme.fonts.weights.light};
  font-size: ${({ theme }) => theme.fonts.sizes.desktop.s};
`;
