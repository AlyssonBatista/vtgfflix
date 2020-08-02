import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--black); 
  border-style: solid;
  border-image: linear-gradient(to left, red 10%, purple 100%) 100% 0 0% 0/1px 0 1px 0 stretch;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
