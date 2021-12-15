import { useState, useEffect, useContext } from "react";
import ColumnContainer from "../layout/columnContainer";
import FlightCard from "./flightCard";
import ScrollItems from "../layout/scrollItems";
import TitleArea from "../layout/titleArea";
import StatusCard from "../statusCard";
import useHttp from "../../hooks/use-http";
import AircraftsContext from "../../store/aircraft-context";

const Flights = () => {
  const [loadFlights, setLoadFlights] = useState(false);

  const { aircraftsState, aircraftsDispatch } = useContext(AircraftsContext);

  const { loadingStatus, error, httpRequest } = useHttp();

  useEffect(() => {
    if (loadFlights) return;

    const transformData = (flights) => {
      aircraftsDispatch({ type: "ADD_FLIGHTS", flights: flights.data });
    };

    httpRequest(
      { url: "https://infinite-dawn-93085.herokuapp.com/flights" },
      transformData
    );

    setLoadFlights(true);
  }, [httpRequest, aircraftsDispatch, loadFlights]);

  let flightList;

  if (error) {
    flightList = <StatusCard>{error}</StatusCard>;
  }

  if (loadingStatus) {
    flightList = <StatusCard>Loading...</StatusCard>;
  }

  if (aircraftsState.flights.length > 0) {
    flightList = aircraftsState.flights.map((flight) => (
      <FlightCard key={flight.id} details={flight} />
    ));
  }

  return (
    <ColumnContainer bgColor="#f5f7fb">
      <TitleArea>Flights</TitleArea>
      <ScrollItems>{flightList}</ScrollItems>
    </ColumnContainer>
  );
};

export default Flights;
