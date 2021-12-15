export const aircraftReducer = (state, action) => {
  if (action.type === "ADD AIRCRAFTS") {
    let aircraftsUtilisation = action.aircrafts.map((aircraft) => {
      return {
        ...aircraft,
        utilisation: 0,
      };
    });

    console.log(aircraftsUtilisation);

    return {
      ...state,
      aircrafts: [...aircraftsUtilisation],
    };
  }

  if (action.type === "SELECTED AIRCRAFT") {
    return {
      ...state,
      selected: [action.aircraft],
    };
  }

  if (action.type === "REMOVE SELECTED") {
    return {
      ...state,
      selected: [],
    };
  }

  return state;
};
