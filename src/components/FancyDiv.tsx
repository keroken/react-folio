import React from 'react'
import styled from 'styled-components'

const FancyDiv: React.FC = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>
}

const StyledDiv = styled.div`
  border: 1px solid blue;
`;

export default FancyDiv
