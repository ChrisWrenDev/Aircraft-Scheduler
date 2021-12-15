import ColumnContainer from "../layout/columnContainer";
import TitleArea from "../layout/titleArea";
import ScrollItems from "../layout/scrollItems";
import RotationCard from "./rotationCard";
import Timetable from "../timetable/timetable";

const Rotations = () => {
  return (
    <ColumnContainer bgColor="#edf0f8">
      <TitleArea>
        <TitleArea>Rotations ABDC</TitleArea>
      </TitleArea>
      <ScrollItems>
        <RotationCard />
        <RotationCard />
        <RotationCard />
        <RotationCard />
        <RotationCard />
        <RotationCard />
        <RotationCard />
        <RotationCard />
        <RotationCard />
      </ScrollItems>
      <Timetable />
    </ColumnContainer>
  );
};

export default Rotations;
