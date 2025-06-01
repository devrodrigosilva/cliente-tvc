import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.sm};
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.sm} 0;
`;

export const SectionTitle = styled.div`
  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fonts.sizes.desktop.xl};
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
  width: 300px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  align-self: flex-end;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const SearchInput = styled.input`
  /* background-color: ${({ theme }) => theme.colors.backgroundPrimary}; */
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  height: 100%;
  flex: 1;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  padding: 0 8px;
  font: ${({ theme }) => theme.fonts.weights.regular} 16px 'Roboto';
  color: ${({ theme }) => theme.colors.textPrimary};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-style: italic;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 48px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background-color: ${({ theme }) => theme.colors.primary};

  &:hover {
    cursor: pointer;
    filter: brightness(110%);
  }
`;

export const EpisodiosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.sm};
  row-gap: ${({ theme }) => theme.spacing.lg};
  justify-content: space-between;
`;

export const Episodio = styled.div`
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
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  width: fit-content;

  &:hover {
    cursor: pointer;
  }
`;

export const Description = styled.p`
  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: ${({ theme }) => theme.fonts.weights.light};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;
