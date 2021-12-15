export const aircraftReducer = (state, action) => {
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
      selected: [action.aircraft],
    };
  }

  if (action.type === "REMOVE_SELECTED") {
    return {
      ...state,
      selected: [],
    };
  }

  if (action.type === "ADD_FLIGHTS") {
    return {
      ...state,
      flights: [...action.flights],
    };
  }

  if (action.type === "ADD_ROTATION") {
    const rotationsList = state.rotations.concat(action.flight);

    rotationsList.sort((a, b) => a.departuretime - b.departuretime);
    // const utilisation = rotationsList.reduce();

    return {
      ...state,
      rotations: rotationsList,
    };
  }

  if (action.type === "REMOVE_ROTATION") {
    const rotationsList = state.rotations.filter(
      (flight) => flight.id !== action.id
    );
    return {
      ...state,
      rotations: [...rotationsList],
    };
  }

  return state;
};
