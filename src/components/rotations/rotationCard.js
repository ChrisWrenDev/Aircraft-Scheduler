import styled from "styled-components";

const RotationCard = ({ details }) => {
  return (
    <Card>
      <FlightName>{details.id}</FlightName>
      <Departure>
        <Time>{details.readable_departure}</Time>
        <Location>{details.origin}</Location>
      </Departure>
      <TravelDirection>
        <HorizontalLine />
      </TravelDirection>
      <Arrival>
        <Time>{details.readable_arrival}</Time>
        <Location>{details.destination}</Location>
      </Arrival>
    </Card>
  );
};

const Card = styled.div`
  width: 600px;
  height: 150px;
  border-radius: 4px;
  background-color: #fff;

  display: grid;
  grid-template-rows: 1fr 3fr;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "head head head" "departure icon arrival";
  padding: 15px;
  margin-bottom: 15px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const FlightName = styled.h3`
  grid-area: head;
  align-self: end;

  font-size: 24px;
  text-align: center;
  color: #b1aaba;
  margin: 0;
`;

const Arrival = styled.div`
  grid-area: arrival;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Departure = styled.div`
  grid-area: departure;
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

const TravelDirection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HorizontalLine = styled.hr`
  width: 100%;
  border-top: 1px solid #aeb1bb;
  border-radius: 5px;
`;

export default RotationCard;
