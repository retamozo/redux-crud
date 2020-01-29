import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Nav = styled.nav`
  width: 100%;
  background-color: #ecfffa;
  color: #666;
  text-shadow: none;
  margin: 1rem;
  h1 {
    padding: 0 2%;
    color: #000000;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "#5cd33a" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${props => props.primary ? '#5cd33a' : 'transparent' };
  border-radius: 3px;
`;

