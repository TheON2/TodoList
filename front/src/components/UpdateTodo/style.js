import styled from "styled-components";

export const Container2 = styled.div`
  background-color: white;
  border-radius: 12px;
  justify-content: space-between;
  margin: 0 auto;
  padding: 30px;
  display: flex;
  gap: 20px;
  width: 400%;
  height: 50%;
`;

export const TitleContainer = styled.div`
  align-items: center;
  display: flex;
  height: 50px;
  justify-content: space-between;
  padding: 0 20px;
`;

export const DoneContainer = styled.div`
  align-items: center;
  border: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  background-color: ${props => props.done ? 'green' : 'red'};
`;

export const TextArea = styled.textarea`
  align-items: center;
  border: 1px #ddd;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  width: 300%;
  resize: none;
`;
