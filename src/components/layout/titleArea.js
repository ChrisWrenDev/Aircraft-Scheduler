import styled from "styled-components";

const TitleArea = (props) => {
  return (
    <TitleContainer>
      <Title>{props.children}</Title>
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  flex: 1;
  /* margin: 20px 0; */
`;

const Title = styled.h2`
  font-size: 24px;
  text-align: center;
  color: #1d0833;
`;

export default TitleArea;
