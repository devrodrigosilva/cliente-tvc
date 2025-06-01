import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 32px;
`;
export const Title = styled.p`
  font: bold 16px 'Roboto';
  color: white;
  margin: 0 0 8px 0;
`;
export const InputComp = styled.input`
  height: 40px;
  font: 400 14px 'Roboto';
  color: black;
  padding-left: 14px;
`;

export const Row = styled.div<{ gridTemplateColumns: string }>`
  display: grid;
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
  grid-column-gap: 12px;
  -moz-column-gap: 12px;
  column-gap: 12px;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;
