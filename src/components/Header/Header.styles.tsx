import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding-inline: 16px;
  height: 80px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};

  @media (max-width: 800px) {
    height: 48px;
    padding-inline: 8px;
  }
`;

export const LogoIcon = styled.img`
  border-radius: 10px;

  @media (max-width: 800px) {
    height: 32px;
  }

  &:hover {
    cursor: pointer;
    filter: brightness(110%);
  }
`;

export const Pages = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 48px;

  @media (max-width: 800px) {
    display: none;
  }
`;

export const Page = styled.div`
  display: flex;
  padding: 8px 24px;
  justify-content: center;
  align-items: center;
  height: 40px;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;

export const Menu = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 48px;

  border-radius: 8px;
  overflow: hidden;

  svg {
    height: 32px;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 800px) {
    height: 32px;
    width: 32px;
    border-radius: 4px;

    svg {
      height: 24px;
      color: ${({ theme }) => theme.colors.textSecondary};
    }
  }
`;

export const ModalMenu = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: absolute;
  width: 200px;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  margin-top: 32px;
  margin-right: 16px;
  border-radius: 10px;
  box-shadow:
    rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  padding: 16px;

  @media (max-width: 800px) {
    height: calc(100vh - 48px);
    width: 100vw;
    margin-top: 48px;
    margin-right: 0;
    border-radius: 0;
  }
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  height: fit-content;
  padding: 8px;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;

export const ModalMenuUp = styled.div``;
