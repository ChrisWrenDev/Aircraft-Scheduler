import styled from "styled-components";

const FlightCard = () => {
  return (
    <Card>
      <FlightName>AS1001</FlightName>
      <Departure>
        <Time>15:30</Time>
        <Location>LDN</Location>
      </Departure>

      <Arrival>
        <Time>19:00</Time>
        <Location>SGN</Location>
      </Arrival>
    </Card>
  );
};

const Card = styled.div`
  width: 300px;
  height: 150px;
  border-radius: 4px;
  background-color: #fff;

  display: grid;
  grid-template-rows: 1fr 3fr;
  grid-template-columns: repeat(2, 1fr);
  padding: 15px;
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const FlightName = styled.h3`
  grid-area: 1 / span 2;
  align-self: end;

  font-size: 24px;
  text-align: center;
  color: #b1aaba;
  margin: 0;
`;

const Arrival = styled.div`
  grid: 2 / 1 /3/ 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Departure = styled.div`
  grid: 2 /2 / 3 /3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Time = styled.p`
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  color: #1d0833;
  margin: 0;
`;

const Location = styled.p`
  font-size: 16px;
  text-align: center;
  color: #b1aaba;
  margin: 0;
`;

export default FlightCard;
