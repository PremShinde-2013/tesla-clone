import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

function Section({
  title,
  description,
  leftbtntxt,
  rightbtntxt,
  backgroundImg,
}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
      <ItemText>
        <Title>{title}</Title>

        <P>{description} </P>
      </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>

        <ButtonGroup>
          <LeftButton>{leftbtntxt}</LeftButton>
          {rightbtntxt && <RightButton>{rightbtntxt}</RightButton>}
        </ButtonGroup>
        <DownArrow src="/Images/down-arrow.svg" />
        </Fade>
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between; // vertical alingment
  align-items: center;
  background-image: ${(props) => `url("/Images/${props.bgImage}")`};
`;
const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;
const P = styled.div`
  margin-top: 25px;
  text-decoration: underline;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 260px;
  
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  opacity: 0.85;
  text-transform: initial;
  font-size: 16px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
  font-weight: 600;
`;

const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;
const Buttons = styled.div``;
