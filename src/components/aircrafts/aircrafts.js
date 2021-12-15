import { useState, useEffect, useContext } from "react";
import ColumnContainer from "../layout/columnContainer";
import TitleArea from "../layout/titleArea";
import ScrollItems from "../layout/scrollItems";
import AircraftCard from "./aircraftCard";
import StatusCard from "../statusCard";
import useHttp from "../../hooks/use-http";
import AircraftsContext from "../../store/aircraft-context";

const Aircrafts = () => {
  const [loadAircrafts, setLoadAircrafts] = useState(false);

  const { aircraftsState, aircraftsDispatch } = useContext(AircraftsContext);

  const { loadingStatus, error, httpRequest } = useHttp();

  useEffect(() => {
    if (loadAircrafts) return;

    const transformData = (aircrafts) => {
      aircraftsDispatch({ type: "ADD AIRCRAFTS", aircrafts: aircrafts.data });
    };

    httpRequest(
      { url: "https://infinite-dawn-93085.herokuapp.com/aircrafts" },
      transformData
    );

    setLoadAircrafts(true);
  }, [httpRequest, aircraftsDispatch, loadAircrafts]);

  let aircraftList;

  if (error) {
    aircraftList = <StatusCard>{error}</StatusCard>;
  }

  if (loadingStatus) {
    aircraftList = <StatusCard>Loading...</StatusCard>;
  }

  if (aircraftsState.aircrafts.length > 0) {
    aircraftList = aircraftsState.aircrafts.map((aircraft) => (
      <AircraftCard key={aircraft.ident} details={aircraft} />
    ));
  }

  return (
    <ColumnContainer bgColor="#f5f7fb">
      <TitleArea>Aircrafts</TitleArea>
      <ScrollItems>{aircraftList}</ScrollItems>
    </ColumnContainer>
  );
};

export default Aircrafts;
