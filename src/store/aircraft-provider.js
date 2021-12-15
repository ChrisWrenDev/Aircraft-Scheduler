import { useReducer } from "react";
import { aircraftReducer } from "./aircraft-reducers";
import AircraftsContext from "./aircraft-context";

const AircraftsProvider = (props) => {
  const aircraftsInitialState = {
    aircrafts: [],
    selected: [],
    flights: [],
    rotations: [],
  };

  const [aircraftsState, aircraftsDispatch] = useReducer(
    aircraftReducer,
    aircraftsInitialState
  );

  return (
    <AircraftsContext.Provider value={{ aircraftsState, aircraftsDispatch }}>
      {props.children}
    </AircraftsContext.Provider>
  );
};

export default AircraftsProvider;
