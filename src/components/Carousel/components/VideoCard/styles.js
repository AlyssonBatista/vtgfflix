import styled from 'styled-components';

export const VideoCardContainer = styled.a`

 
border: 4px solid;
border-radius: 10px;
text-decoration: none;
overflow: hidden;
cursor: pointer;
color: white;
flex: 0 0 298px;
width: 290px;
height: 230px;
background: linear-gradient(to right, red, purple);
background-image: ${({ url }) => `url(${url})`}; 
background-size: cover;
background-position: center;
position: relative;
display: inline-block;
align-items: flex-end;

z-index:1;

/*padding: 16px;*/

  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
