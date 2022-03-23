import React from 'react';
import styled from 'styled-components';
import { Link }  from 'gatsby';

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Description = styled.p`
  display: block;
  color: white;
  font-size: 0.6em;
  position: relative;
  top: -1em;
`;

export default function LinkWithIcon({ to, icon: Icon, children: description, className }) {
  return (
    <Link to={to}>
      <Box className={className}>
        <Icon variant='32x32_4' />
        <Description>{description}</Description>
      </Box>
    </Link>
  );
}