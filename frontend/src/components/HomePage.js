import React from 'react';
import styled from 'styled-components';

const HomePageContainer = styled.div`
  padding: 20px;
  text-align: center;
`;

const HomePage = () => {
  return (
    <HomePageContainer>
      <h1>Agentic Task Runner</h1>
      <p>Welcome to the Agentic Task Runner App!</p>
    </HomePageContainer>
  );
};

export default HomePage;
