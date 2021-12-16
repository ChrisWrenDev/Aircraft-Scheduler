// const calculateAircraftUtilisation = (flights) => {
//   let flightTime = flights.reduce(
//     (acc, flight) => acc + (flight.arrivaltime - flight.departuretime),
//     0
//   );
//   let aircraftUtilisation = (flightTime / 86400) * 100; //24 hours in minutes = 86400

//   return aircraftUtilisation.toFixed;
// };

export const addFlightToRotations = (state, flight) => {
  //1. Add flight to existing rotations
  const rotationsList = state.rotations.concat(flight);

  //2. Sort list of rotations
  rotationsList.sort((a, b) => a.departuretime - b.departuretime);

  //3. Recalculate aircraft utilisation
  // const utilisation = calculateAircraftUtilisation(rotationsList);

  //4. Assign utilisation to selected aircraft
  // const aircraftIndex = state.aircrafts.indexOf(aircraft => )
  // const updatedAircrafts = state.aircrafts[0]

  return {
    ...state,
    // aircrafts: updatedAircrafts,
    rotations: rotationsList,
  };
};

/////////////////////////////////////////////////

const checkStartEndRotations = (rotations, flight, turnoverTime) => {
  const flightDepartureTime = +flight.departuretime;
  const flightArrivalTime = +flight.arrivaltime + turnoverTime;
  const flightDepartureLocation = flight.origin;
  const flightArrivalLocation = flight.destination;

  const rotationDepartureTime = rotations[0].departuretime;
  const rotationArrivalTime =
    +rotations[rotations.length - 1].arrivaltime + turnoverTime;
  const rotationDepartureLocation = rotations[0].origin;
  const rotationArrivalLocation = rotations[rotations.length - 1].destination;

  //1. Check departure time or location conflicts
  let departureConflict =
    flightDepartureTime > rotationArrivalTime &&
    flightDepartureLocation === rotationArrivalLocation;

  //2. Check arrival time or location conflicts
  let arrivalConflict =
    flightArrivalTime < rotationDepartureTime &&
    flightArrivalLocation === rotationDepartureLocation;

  return departureConflict || arrivalConflict;
};

////////////////////////////////////////////////

const checkForAvailableTimeSlot = (rotations, flight, turnoverTime) => {
  const flightDepartureTime = +flight.departuretime;
  const flightArrivalTime = +flight.arrivaltime + turnoverTime;
  const flightDepartureLocation = flight.origin;
  const flightArrivalLocation = flight.destination;

  for (let i = 0; i < rotations.length - 1; i++) {
    let rotationDepartureTime = +rotations[1 + i].departuretime;
    let rotationArrivalTime = +rotations[i].arrivaltime + turnoverTime;

    let rotationDepartureLocation = rotations[1 + i].origin;
    let rotationArrivalLocation = rotations[i].destination;

    let timesAvailable =
      flightDepartureTime > rotationArrivalTime &&
      flightArrivalTime < rotationDepartureTime;

    let locationsMatch =
      flightDepartureLocation === rotationArrivalLocation &&
      flightArrivalLocation === rotationDepartureLocation;

    if (timesAvailable && locationsMatch) {
      return true;
    }
  }

  return false;
};

///////////////////////////////////////////////

export const checkFlightConflicts = (state, flight) => {
  const rotations = state.rotations;
  const turnoverTime = state.turnoverTime;

  //1. Check for available time slot at begining and end of schedule
  if (checkStartEndRotations(rotations, flight, turnoverTime)) {
    return addFlightToRotations(state, flight);
  }
  //2. Check for available time slot inbetween rotations
  else if (checkForAvailableTimeSlot(rotations, flight, turnoverTime)) {
    return addFlightToRotations(state, flight);
  } else {
    //3. Return state
    return state;
  }
};

////////////////////////////////////////////////

export const flightRemovalAllowed = (state, flight) => {
  const flightIndex = state.rotations.indexOf(flight);

  if (flightIndex === 0 || flightIndex === state.rotations.length - 1) {
    return true;
  }

  const flightBefore = state.rotations[flightIndex - 1];
  const flightAfter = state.rotations[flightIndex + 1];

  const flightTimeConflict =
    flightBefore.arrivaltime + state.turnoverTime < flightAfter.departuretime;
  const flightLocationConflict =
    flightBefore.destination === flightAfter.origin;

  return flightTimeConflict && flightLocationConflict;
};

////////////////////////////////////////////

export const removeFlightFromRotations = (state, flight) => {
  const rotationsList = state.rotations.filter(
    (rotation) => rotation.id !== flight.id
  );

  return {
    ...state,
    rotations: [...rotationsList],
  };
};

/////////////////////////////////////////////
