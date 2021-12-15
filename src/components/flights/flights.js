import ColumnContainer from "../layout/columnContainer";
import FlightCard from "./flightCard";
import ScrollItems from "../layout/scrollItems";
import TitleArea from "../layout/titleArea";

const Flights = () => {
  return (
    <ColumnContainer bgColor="#f5f7fb">
      <TitleArea>Flights</TitleArea>
      <ScrollItems>
        <FlightCard />
        <FlightCard selected={true} />
        <FlightCard />
        <FlightCard />
        <FlightCard />
        <FlightCard />
        <FlightCard />
        <FlightCard />
        <FlightCard />
        <FlightCard />
        <FlightCard />
        <FlightCard />
      </ScrollItems>
    </ColumnContainer>
  );
};

export default Flights;
