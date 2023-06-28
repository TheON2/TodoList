import styled from "styled-components";

export const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const TodoContainer = styled.div`
  border: 4px solid teal;
  border-radius: 12px;
  padding: 12px 24px 24px;
  width: 270px;
`;

export const ButtonSet = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 24px;
`;

export const GenericButton = styled.button`
  border: none;
  border-radius: 8px;
  cursor: pointer;
  height: 40px;
  width: 50%;
`;

export const DeleteButton = styled(GenericButton)`
  background-color: #fff;
  border: 2px solid red;
`;

export const CompleteButton = styled(GenericButton)`
  background-color: #fff;
  border: 2px solid green;
`;
