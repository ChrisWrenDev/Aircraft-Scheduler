import styled from "styled-components";

const ColumnContainer = (props) => {
  return (
    <Container bgColor={props.bgColor}>
      <Wrapper>{props.children}</Wrapper>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${(props) => props.bgColor};
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export default ColumnContainer;
