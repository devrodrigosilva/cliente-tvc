import styled, { css } from 'styled-components';
import { BodyProps } from './Body';

export const Text = styled.p<Omit<BodyProps, 'children'>>`
  color: ${({ color, theme }) => color ?? theme.colors.textPrimary};
  font-weight: ${({ isBold }) => (isBold ? 800 : 400)};
  font-family: 'Roboto', sans-serif;

  ${({ size, theme, isMobile }) => {
    switch (size) {
      case 's':
        return css`
          font-size: ${isMobile
            ? theme.fonts.sizes.mobile
            : theme.fonts.sizes.desktop.s};
        `;
      case 'm':
        return css`
          font-size: ${isMobile
            ? theme.fonts.sizes.mobile.m
            : theme.fonts.sizes.desktop.m};
        `;
      case 'l':
        return css`
          font-size: ${isMobile
            ? theme.fonts.sizes.mobile.l
            : theme.fonts.sizes.desktop.l};
        `;
      default:
        return css`
          font-size: ${isMobile
            ? theme.fonts.sizes.mobile.m
            : theme.fonts.sizes.desktop.m};
        `;
    }
  }};
`;
