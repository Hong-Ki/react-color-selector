import React, { FC } from "react";
import styled from "styled-components";

import Color from "../Color/Color";
import { getColorName, getColor } from "color-selector";

interface Props {
  colorIds: string[];
  title?: string;
}

const ColorList: FC<Props> = ({ colorIds, title = "Color" }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <ListDiv>
        {colorIds.map(id => {
          const color = getColor(id);
          if (color)
            return <Color color={color} name={getColorName(id)} id={id} />;
          return <></>;
        })}
      </ListDiv>
    </Wrapper>
  );
};

export default ColorList;

const Wrapper = styled.div`
  width: auto;

  margin: 15px 10px 15px 0;
`;

const ListDiv = styled.div`
  display: flex;
  align-items: center;
  justify-contents: flex-start;
  flex-direct: row;

  flex-wrap: wrap;
`;

const Title = styled.span`
  font-size: 1.5rem;

  text-transform: uppercase;
`;
