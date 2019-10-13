import React, { useState, ReactNode } from "react";
import Header from "./components/Header/Header";
import colorJson from "color-selector/color-set.json";
import ColorList from "./components/ColorList/ColorList";
import { getColorName, getColor } from "color-selector";

const App: React.FC = () => {
  const colorSet = new Set<string>();
  const colorKeys = Object.keys(colorJson);
  colorKeys.forEach(color => {
    colorSet.add(color.split("-")[2]);
  });

  const [keyword, setKeyword] = useState<string>("");

  let lists: ReactNode[] = [];
  colorSet.forEach(category => {
    const list = colorKeys.filter(key => {
      const name = getColorName(key) || "";
      const color = getColor(key) || "";
      return (
        key.includes(category) &&
        (key.toLowerCase().includes(keyword.toLowerCase()) ||
          name.toLowerCase().includes(keyword.toLowerCase()) ||
          color.toLowerCase().includes(keyword.toLowerCase()))
      );
    });

    if (list.length > 0)
      lists = lists.concat(<ColorList colorIds={list} title={category} />);
  });

  const onChange = ({
    target: { value }
  }: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(value);
  };

  return (
    <>
      <Header>
        <span>{"Color Selector"}</span>
        <input type={"text"} onChange={onChange} />
      </Header>
      <div className={"contents"}>{lists}</div>
    </>
  );
};

export default App;
