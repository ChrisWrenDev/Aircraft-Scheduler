import { createContext } from "react";

const AircraftsContext = createContext({
  aircrafts: [],
  selected: [],
  flights: [],
  rotations: [],
});

export default AircraftsContext;
