import { createContext } from "react";

const AircraftsContext = createContext({
  aircrafts: [],
  selectedAircraft: "",
  flights: [],
  rotations: [],
  turnoverTime: 0,
});

export default AircraftsContext;
