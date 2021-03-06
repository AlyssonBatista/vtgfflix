import styled from 'styled-components';

export const Title = styled.h3`

  font-style: normal;
  font-weight: bolder;
  font-size: 23px;
  line-height: 1;
  margin-bottom: 15px;
  margin-left: 15px;
  margin-right: 15px;
  display: inline-block;
  padding: 20px;
  line-height: 1;
  border-radius: 4px;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 13px;
  }
`;

export const ExtraLink = styled.a`
  
  background: linear-gradient(to right, purple, red);
  font-style: normal;
  font-weight: bolder;
  font-size: 18px;
  line-height: 1;
  display: inline-block;
  padding: 8px;
  line-height: 1;
  border-radius: 4px;
  margin-right: 15px;
  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 15px;
  text-decoration: none;
  transition: opacity .3s;
   
  &:hover,
  &:focus {
    opacity: .5;
  }
  @media (max-width: 800px) {
    margin-bottom: 16px;
    margin-left: 16px;
  }
`;

export const VideoCardList = styled.ul`

  margin: 0;
  padding-left: 0;
  padding-bottom: 32px;
  list-style: none;
  display: flex;
  overflow-x: auto;
  flex-direction: row;
  
  li {
    margin-right: 16px;
  }
`;

export const VideoCardGroupContainer = styled.section`
  
  color: grey;
 /* min-height: 197px;*/
    
`;
