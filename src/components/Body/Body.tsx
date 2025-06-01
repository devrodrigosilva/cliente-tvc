import React, { ReactNode, FC } from 'react';
import { Text } from './Body.styles';

export interface BodyProps {
  children: string;
  size: 's' | 'm' | 'l';
  color?: string;
  isBold?: boolean;
  isMobile?: boolean;
}

const Body: FC<BodyProps> = ({ size, isMobile, isBold, children, color }) => {
  return (
    <Text size={size} isMobile={isMobile} isBold={isBold} color={color}>
      {children}
    </Text>
  );
};

export default Body;
