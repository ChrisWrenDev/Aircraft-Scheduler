import styled from "styled-components";

const AircraftCard = () => {
  return (
    <Card>
      <AircraftName>ABCDE</AircraftName>
      <AircraftUtilisation>40%</AircraftUtilisation>
    </Card>
  );
};

const Card = styled.div`
  width: 300px;
  height: 150px;
  border-radius: 4px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

const AircraftName = styled.h3`
  font-size: 24px;
  text-align: center;
  color: #1d0833;
  margin: 0;
`;

const AircraftUtilisation = styled.p`
  font-size: 16px;
  text-align: center;
  color: #b1aaba;
  margin: 0;
`;

export default AircraftCard;
