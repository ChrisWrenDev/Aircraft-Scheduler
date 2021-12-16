import { useContext } from "react";
import ColumnContainer from "../layout/columnContainer";
import TitleArea from "../layout/titleArea";
import ScrollItems from "../layout/scrollItems";
import RotationCard from "./rotationCard";
import Timetable from "../timetable/timetable";
import StatusCard from "../statusCard";
import AircraftsContext from "../../store/aircraft-context";

const Rotations = () => {
  const { aircraftsState } = useContext(AircraftsContext);

  let rotationList = <StatusCard>Select a flight to add a rotation</StatusCard>;

  if (aircraftsState.rotations.length > 0) {
    rotationList = aircraftsState.rotations.map((rotation) => (
      <RotationCard key={rotation.id} details={rotation} />
    ));
  }

  let aircraftID = aircraftsState.selectedAircraft ?? "";

  return (
    <ColumnContainer bgColor="#edf0f8">
      <TitleArea>
        <TitleArea>{`Rotations ${aircraftID}`}</TitleArea>
      </TitleArea>
      <ScrollItems>{rotationList}</ScrollItems>
      <Timetable />
    </ColumnContainer>
  );
};

export default Rotations;
