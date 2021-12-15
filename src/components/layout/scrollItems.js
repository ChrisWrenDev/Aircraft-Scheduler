import styled from "styled-components";

const ScrollItems = (props) => {
  return (
    <ScrollContainer>
      <ScrollContent>{props.children}</ScrollContent>
    </ScrollContainer>
  );
};

const ScrollContainer = styled.div`
  width: 100%;
  flex: 10;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0px 15px;
`;

const ScrollContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default ScrollItems;
