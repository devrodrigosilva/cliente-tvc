import React from 'react';
import PropTypes from 'prop-types';

import { Container, Title, Row, InputComp } from './styled';

import { ReactComponent as ProfileIcon } from './assets/profile.svg';
import { ReactComponent as PasswordIcon } from './assets/password.svg';
import { ReactComponent as CodeIcon } from './assets/code.svg';

interface InputProps {
  placeholder: string;
  title: string;
  type: string;
  onChange: (value: string) => void;
  icon?: string;
}

export const Input: React.FC<InputProps> = ({
  title,
  type,
  placeholder,
  onChange,
  icon,
}) => {
  const renderIcon = () => {
    switch (icon) {
      case 'code':
        return <CodeIcon />;
      case 'profile':
        return <ProfileIcon />;
      case 'password':
        return <PasswordIcon />;
      default:
        return <ProfileIcon />;
    }
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Row gridTemplateColumns={icon ? '32px 1fr' : '1fr'}>
        {icon && renderIcon()}
        <InputComp
          type={type}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
      </Row>
    </Container>
  );
};
