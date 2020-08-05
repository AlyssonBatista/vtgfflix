/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    
    width: 50px;
    height: 50px;
    transform: initial;
     
     
    &:before {
      font-size: 45px;
   
    }
  }
  
  .slick-prev {
    left: 0;
  }
  .slick-next {
    right: 0;
  }
`;

export const SliderItem = styled.li`
  
  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;


const Slider = ({ children }) => (
  <Container>
    <SlickSlider {...{
       
      trace: true,
      infinite: true,
      speed: 500,
      centerMode: true,
      variableWidth: true,
      adaptiveHeight: true,
       

       
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider; 