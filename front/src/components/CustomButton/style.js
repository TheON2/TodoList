import styled from "styled-components";

export const Button = styled.button`
  font-size: 1em;
  margin: 0.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  
  width: ${props => props.size === 'large' ? '200px' :
  props.size === 'medium' ? '130px' :
    props.size === 'small' ? '100px' : '80px'};
  height: ${props => props.size === 'large' ? '50px' :
  props.size === 'medium' ? '45px' :
    props.size === 'small' ? '40px' : '30px'};

  color: ${props => props.theme === 'type1' ? 'white' :
  props.theme === 'type2' ? 'skyblue' : 'black'};

  background: ${props => props.theme === 'type1' ? 'skyblue' :
  props.theme === 'type2' ? '#d63031' : 'white'};
  
  border: ${props => props.border === 'type1' ? '4px solid skyblue' :
  props.border === 'type2' ? '4px solid black' : 'black'};
`;
