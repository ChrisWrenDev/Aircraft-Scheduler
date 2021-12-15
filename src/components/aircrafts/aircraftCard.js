import styled from "styled-components";
import { useState, useContext } from "react";
import AircraftsContext from "../../store/aircraft-context";

const AircraftCard = (props) => {
  const [cardSelected, setCardSelected] = useState(false);

  const { aircraftsDispatch } = useContext(AircraftsContext);

  const cardStatusHandler = () => {
    setCardSelected((prev) => !prev);

    if (!cardSelected) {
      aircraftsDispatch({ type: "SELECTED_AIRCRAFT", aircraft: props.details });
    } else {
      aircraftsDispatch({ type: "REMOVE_SELECTED" });
    }
  };

  return (
    <Card onClick={cardStatusHandler} selected={cardSelected}>
      <AircraftName selected={cardSelected}>{props.details.ident}</AircraftName>
      <AircraftUtilisation>{`${props.details.utilisation}%`}</AircraftUtilisation>
    </Card>
  );
};

const Card = styled.div`
  width: 300px;
  height: 150px;
  border: solid 2px ${(props) => (props.selected ? "#5026e1" : "#fff")};
  border-radius: 4px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  cursor: pointer;
`;

const AircraftName = styled.h3`
  font-size: 24px;
  text-align: center;
  color: #1d0833;
  margin: 0 0 10px 0;
`;

const AircraftUtilisation = styled.p`
  font-size: 20px;
  text-align: center;
  color: #b1aaba;
  margin: 0;
`;

export default AircraftCard;
