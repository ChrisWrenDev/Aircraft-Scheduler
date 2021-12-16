import {
  addFlightToRotations,
  checkFlightConflicts,
  flightRemovalAllowed,
  removeFlightFromRotations,
} from "./flightScheduleConflicts";

export const aircraftReducer = (state, action) => {
  if (action.type === "ADD_ROTATION") {
    //1. Add to rotation if schedule is empty
    if (state.rotations.length === 0) {
      return addFlightToRotations(state, action.flight);
    } else {
      //2. Check for slot in schedule
      return checkFlightConflicts(state, action.flight);
    }
  }

  if (action.type === "REMOVE_ROTATION") {
    if (state.rotations.length <= 2) {
      return removeFlightFromRotations(state, action.flight);
    } else if (flightRemovalAllowed(state, action.flight)) {
      return removeFlightFromRotations(state, action.flight);
    } else {
      return state;
    }
  }

  if (action.type === "ADD_AIRCRAFTS") {
    let aircraftsUtilisation = action.aircrafts.map((aircraft) => {
      return {
        ...aircraft,
        utilisation: 0,
      };
    });

    return {
      ...state,
      aircrafts: [...aircraftsUtilisation],
    };
  }

  if (action.type === "SELECTED_AIRCRAFT") {
    return {
      ...state,
      selectedAircraft: action.aircraft.ident,
    };
  }

  if (action.type === "REMOVE_SELECTED") {
    return {
      ...state,
      selectedAircraft: "",
    };
  }

  if (action.type === "ADD_FLIGHTS") {
    return {
      ...state,
      flights: [...action.flights],
    };
  }

  return state;
};
