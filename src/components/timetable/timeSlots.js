import { useContext, Fragment } from "react";
import styled, { keyframes } from "styled-components";
import AircraftsContext from "../../store/aircraft-context";

const TimeSlots = () => {
  const { aircraftsState } = useContext(AircraftsContext);

  const turnoverDuration = (aircraftsState.turnoverTime / 86400) * 100;

  let chartBarList = [];

  for (let i = 0; i < aircraftsState.rotations.length; i++) {
    const flight = aircraftsState.rotations[i];
    if (i === 0) {
      //1. Add space at beginning of barchart
      const timeBeforeFirstFlight = (flight.departuretime / 86400) * 100;
      chartBarList.push(
        <ChartBar
          key={`S${i}`}
          type="empty"
          width={`${timeBeforeFirstFlight}%`}
        />
      );
    }

    //4. Space between flights bar length (check if a previous flight exists)
    if (aircraftsState.rotations[i - 1]) {
      const gapDuration =
        flight.departuretime -
        (aircraftsState.rotations[i - 1].arrivaltime +
          aircraftsState.turnoverTime);

      const gapPercentage = (gapDuration / 86400) * 100;
      chartBarList.push(
        <ChartBar key={`S${i}`} type="empty" width={`${gapPercentage}%`} />
      );
    }

    //2. Flight time bar length
    const flightDuration =
      ((flight.arrivaltime - flight.departuretime) / 86400) * 100;
    chartBarList.push(
      <ChartBar key={`F${i}`} type="flight" width={`${flightDuration}%`} />
    );

    //3. Turnover time bar length
    chartBarList.push(
      <ChartBar key={`R${i}`} type="turnover" width={`${turnoverDuration}%`} />
    );
  }

  return <Fragment>{chartBarList}</Fragment>;
};

const FadeIn = keyframes`
0%{opacity: 0},
100%{opacity: 1}
`;

const ChartBar = styled.div`
  height: 100%;
  width: ${(props) => props.width};
  background-color: ${(props) =>
    props.type === "flight"
      ? "#5026e1"
      : props.type === "turnover"
      ? "#019c73"
      : "transparent"};
  animation: 0.5s ease-in-out ${FadeIn};
`;

export default TimeSlots;
