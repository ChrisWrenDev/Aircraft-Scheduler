import styled, { keyframes } from "styled-components";
import { useContext } from "react";
import AircraftsContext from "../../store/aircraft-context";

const FlightCard = ({ details }) => {
  const { aircraftsState, aircraftsDispatch } = useContext(AircraftsContext);

  const cardSelected = aircraftsState.rotations.some(
    (flight) => flight.id === details.id
  );

  const cardStatusHandler = () => {
    if (!cardSelected) {
      aircraftsDispatch({ type: "ADD_ROTATION", flight: details });
    } else {
      aircraftsDispatch({ type: "REMOVE_ROTATION", flight: details });
    }
  };

  return (
    <Card onClick={cardStatusHandler} selected={cardSelected}>
      <FlightName>{details.id}</FlightName>
      <Departure>
        <Time>{details.readable_departure}</Time>
        <Location>{details.origin}</Location>
      </Departure>

      <Arrival>
        <Time>{details.readable_arrival}</Time>
        <Location>{details.destination}</Location>
      </Arrival>
    </Card>
  );
};

const FadeIn = keyframes`
0%{opacity: 0},
100%{opacity: 1}
`;

const Card = styled.div`
  width: 300px;
  height: 150px;
  border: solid 2px ${(props) => (props.selected ? "#5026e1" : "#fff")};
  border-radius: 4px;
  background-color: #fff;
  box-shadow: ${(props) =>
    props.selected ? "0 0 5px rgba(0, 0, 0, 0.1)" : "none"};
  display: grid;
  grid-template-rows: 1fr 3fr;
  grid-template-columns: repeat(2, 1fr);
  padding: 15px;
  margin-bottom: 15px;
  cursor: pointer;
  animation: 0.1s ease-in ${FadeIn};

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
