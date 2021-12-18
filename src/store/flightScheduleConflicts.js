import { addFlightToRotations } from "./updateFlightRotations";

export const checkStartEndRotations = (rotations, flight, turnoverTime) => {
  if (rotations.length === 0) return false;

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

///////////////////////////////////////////////

// export const checkForAvailableTimeSlot = (rotations, flight, turnoverTime) => {
//   const flightDepartureTime = +flight.departuretime;
//   const flightArrivalTime = +flight.arrivaltime + turnoverTime;
//   const flightDepartureLocation = flight.origin;
//   const flightArrivalLocation = flight.destination;

//   for (let i = 0; i < rotations.length - 1; i++) {
//     let rotationDepartureTime = +rotations[1 + i].departuretime;
//     let rotationArrivalTime = +rotations[i].arrivaltime + turnoverTime;

//     let rotationDepartureLocation = rotations[1 + i].origin;
//     let rotationArrivalLocation = rotations[i].destination;

//     let timesAvailable =
//       flightDepartureTime > rotationArrivalTime &&
//       flightArrivalTime < rotationDepartureTime;

//     let locationsMatch =
//       flightDepartureLocation === rotationArrivalLocation &&
//       flightArrivalLocation === rotationDepartureLocation;

//     if (timesAvailable && locationsMatch) {
//       return true;
//     }
//   }

//   return false;
// };

///////////////////////////////////////////////

export const checkFlightConflicts = (state, flight) => {
  const rotations = state.rotations;
  const turnoverTime = state.turnoverTime;

  //1. Check for available time slot at begining and end of schedule
  if (checkStartEndRotations(rotations, flight, turnoverTime)) {
    return addFlightToRotations(state, flight);
  }
  //2. Check for available time slot inbetween rotations
  // if (checkForAvailableTimeSlot(rotations, flight, turnoverTime)) {
  //   return addFlightToRotations(state, flight);
  // }
  //3. Return state
  return state;
};

///////////////////////////////////////////////////

export const flightRemovalAllowed = (state, flight) => {
  let flightIndex;

  for (let i = 0; i <= state.rotations.length - 1; i++) {
    if (state.rotations[i].id === flight.id) {
      flightIndex = i;
    }
  }

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

///////////////////////////////////////////////////
