import { useEffect } from "react";
import ColumnContainer from "../layout/columnContainer";
import TitleArea from "../layout/titleArea";
import ScrollItems from "../layout/scrollItems";
import AircraftCard from "./aircraftCard";

const Aircrafts = () => {
  return (
    <ColumnContainer bgColor="#f5f7fb">
      <TitleArea>Aircrafts</TitleArea>
      <ScrollItems>
        <AircraftCard />
      </ScrollItems>
    </ColumnContainer>
  );
};

export default Aircrafts;
