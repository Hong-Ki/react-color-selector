import React, { SFC } from "react";
import styled, { keyframes } from "styled-components";

import { getColor } from "color-selector";

interface Props {
  color: string;
  name?: string;
  id?: string;
}

const Color: SFC<Props> = ({ color, name, id }) => {
  const onClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    navigator.clipboard.writeText(e.currentTarget.innerText);
  };

  const CopyLayer = (
    <HoverLayer>
      <CopyButton onClick={onClick}>{color}</CopyButton>
      <CopyButton onClick={onClick}>{name}</CopyButton>
      <CopyButton onClick={onClick}>{id}</CopyButton>
    </HoverLayer>
  );

  const ColorDiv = styled.div`
    flex-grow: 1;
    width: 100%;
    background-color: ${color};
    border: solid 1px ${getColor("color-selector-gray-4")}
    border-radius: 4px;

    margin-bottom: 8px;
  `;

  return (
    <ColorWrapper>
      {CopyLayer}
      <ColorDiv />
      <TextDiv>
        {name && <span>{name}</span>}
        {id && <span>{id}</span>}
        {color && <span>{color}</span>}
      </TextDiv>
    </ColorWrapper>
  );
};

export default Color;

const fadeIn = keyframes`
from {
  opacity:0
}
to {
  opacity:1
}
`;

const textShadow = keyframes`
from {
  text-shadow: 0 0 0 black;
}
to {
  text-shadow: 0 0 45px black;
}
`;

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-contents: center;

  color:${getColor("color-selector-gray-7")}

  width: 100%;

  text-transform: uppercase;

  span:nth-child(1) {
    font-weight: bold;
  }
  span:nth-child(2) {

    font-weight: 300;
  }
  span:nth-child(3) {
    font-weight: 400;
  }
`;

const HoverLayer = styled.div`
  position: absolute;

  top: 0;
  left: 0;

  display: none;
  flex-direction: column;
  align-items: center;
  justify-contents: center;

  width: 100%;
  height: 100%;

  border-radius: 7px;

  background-color: rgba(255, 255, 255, 0.8);

  animation: ${fadeIn} 0.8s ease-in-out forwards;
`;

const CopyButton = styled.span`
  flex-grow: 1;

  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  font-size: 1.2rem;

  :hover {
    font-weight: 500;
    animation: ${textShadow} 1s ease-in-out forwards;

    cursor: pointer;
  }
`;

const ColorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-contents: center;

  width: 250px;
  height: 250px;

  z-index: 3;

  padding: 8px;

  border: 1px solid ${getColor("color-selector-gray-4")};
  border-radius: 7px;

  margin: 10px 10px auto;

  opacity: 0;

  animation: ${fadeIn} 0.8s ease-in-out forwards;

  position: relative;

  :hover {
    ${HoverLayer} {
      display: flex;
    }
  }

  transition-duration: 0.4s;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;

    font-size: 0.7rem;
  }
`;
