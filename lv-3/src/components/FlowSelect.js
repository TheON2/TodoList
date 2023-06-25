import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import {createPortal} from "react-dom";

const Dropdown = styled.div`
  position: relative;
  display: block;
`;
const DropdownBox = styled.div`
  border: 1px solid rgb(221, 221, 221);
  height: 40px;
  width: 300px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 28px;
`;

const DropdownContent = styled.div`
  display: ${props => (props.show ? "block" : "none")};
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;


const DropdownItem = styled.div`
  height: 40px;
  width: 300px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 28px;
`;

const FlowSelect = () => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState("");
  const wrapperRef = useRef(null);

  const dom =document.getElementById('warp')
  wrapperRef.current=dom

  const options = ["리액트", "자바", "스프링","리액트 네이티브"];

  const handleSelection = (value) => {
    setSelected(value);
    setShow(false);
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShow(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <Dropdown ref={wrapperRef}>
      <DropdownBox onClick={() => setShow(!show)}>
        <div>{selected || options[0]}</div><div>▼</div>
      </DropdownBox>
      {show && createPortal(<DropdownContent show={show}>
        {options.map((option, index) => (
          <DropdownItem key={index} onClick={() => handleSelection(option)}>
            {option}
          </DropdownItem>
        ))}
      </DropdownContent>,document.getElementById('warp'))}
    </Dropdown>
  );
};

export default FlowSelect;

