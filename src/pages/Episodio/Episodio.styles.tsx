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
`;

export const EpisodioContainer = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.md};
  width: 100%;
  max-width: 1440px;
  padding: 0 ${({ theme }) => theme.spacing.sm};
`;

export const Row = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: 'space-between';
  gap: ${({ theme }) => theme.spacing.sm};
  flex-wrap: wrap;

  video {
    width: 100%;
    max-width: 1080px;
    align-self: center;
  }
`;

export const Col = styled.div`
  display: flex;
`;

export const ComentariosSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: ${({ theme }) => theme.spacing.sm};
  max-width: 1080px;
  padding: 0 ${({ theme }) => theme.spacing.sm};
`;

export const SectionTitle = styled.div`
  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fonts.sizes.desktop.l};
`;

export const Input = styled.textarea`
  height: 100px;
  border: 1px solid ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  padding: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.textPrimary};
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  font-family: 'Roboto', sans-serif;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.spacing.lg};
  max-height: 300px;
  overflow-y: auto;
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

export const ComentarioItem = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.sm};
  padding-right: ${({ theme }) => theme.spacing.xs};
`;

export const NameComent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: ${({ theme }) => theme.spacing.sm};
  width: 100%;
`;

export const Foto = styled.div`
  min-width: 64px;
  height: 64px;
  border: 1px solid ${({ theme }) => theme.colors.textPrimary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.buttonText};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  align-self: flex-end;
  width: 100px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primary};

  &:hover {
    cursor: pointer;
    filter: brightness(110%);
  }
`;

export const Del = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    filter: brightness(110%);
  }
`;
