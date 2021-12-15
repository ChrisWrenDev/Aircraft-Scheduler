import styled from "styled-components";

const StatusCard = (props) => {
  return (
    <Card>
      <Message>{props.children}</Message>
    </Card>
  );
};

const Card = styled.div`
  width: 100%;
  height: 150px;
  border-radius: 4px;
  background-color: #cbcfd8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Message = styled.h3`
  font-size: 18px;
  text-align: center;
  color: #271f33;
  margin: 0;
`;

export default StatusCard;
