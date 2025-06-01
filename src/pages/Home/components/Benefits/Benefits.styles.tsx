import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  width: 100%;

  @media (max-width: 600px) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const BenefitsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1440px;
  justify-content: space-evenly;
  gap: ${({ theme }) => theme.spacing.md};
`;

export const Benefit = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 400px;
  row-gap: ${({ theme }) => theme.spacing.md};
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md};
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;

export const Img = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.tertiary};
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

export const Title = styled.h1`
  align-self: flex-start;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-family: 'Roboto', sans-serif;
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  font-size: ${({ theme }) => theme.fonts.sizes.desktop.m};
`;

export const Description = styled.p`
  align-self: flex-start;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: 'Roboto', sans-serif;
  font-size: ${({ theme }) => theme.fonts.sizes.desktop.s};
`;

export const Button = styled.button`
  height: 80px;
  width: 338px;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-top: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fonts.sizes.desktop.m};
  color: ${({ theme }) => theme.colors.buttonText};
  font-family: 'Roboto', sans-serif;

  &:hover {
    cursor: pointer;
    filter: brightness(85%);
  }
`;
