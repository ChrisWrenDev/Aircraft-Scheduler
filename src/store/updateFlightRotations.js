import {
  checkStartEndRotations,
  // checkForAvailableTimeSlot,
} from "./flightScheduleConflicts";

const calculateAircraftUtilisation = (flights) => {
  let flightTime = flights.reduce(
    (acc, flight) => acc + (flight.arrivaltime - flight.departuretime),
    0
  );
  let aircraftUtilisation = (flightTime / 86400) * 100; //24 hours in minutes = 86400

  return aircraftUtilisation.toFixed(2);
};

//////////////////////////////////////////////////

export const removeFlightFromRotations = (state, flight) => {
  //1. Sort list of rotations
  const rotationsList = state.rotations.filter(
    (rotation) => rotation.id !== flight.id
  );

  //2. Update remaining flights rotation eligibility
  const updateFlights = updateFlightRotationEligibility(rotationsList, state);

  //3. Recalculate aircraft utilisation
  const utilisation = calculateAircraftUtilisation(rotationsList);

  //4. Assign utilisation to selected aircraft
  const updatedAircrafts = state.aircrafts.map((aircraft) => {
    if (aircraft.ident === state.selectedAircraft) {
      return {
        ...aircraft,
        utilisation,
      };
    }
    return aircraft;
  });

  return {
    ...state,
    aircrafts: updatedAircrafts,
    flights: updateFlights,
    rotations: [...rotationsList],
  };
};

/////////////////////////////////////////////

const updateFlightRotationEligibility = (rotationsList, state) => {
  const updatedFlights = state.flights.map((flight) => {
    //1. No flights in rotation
    if (rotationsList.length === 0)
      return {
        ...flight,
        eligibility: true,
      };

    //2. Check if flight exists in rotation
    let flightInRotations = false;
    rotationsList.forEach((rotationFlight) => {
      if (rotationFlight.id === flight.id) {
        flightInRotations = true;
      }
    });

    if (flightInRotations) {
      return {
        ...flight,
        eligibility: true,
      };
    }

    //3. Check if flight can fit at begining or end (function above)
    if (checkStartEndRotations(rotationsList, flight, state.turnoverTime)) {
      return {
        ...flight,
        eligibility: true,
      };
    }
    //4. check if flight can fit in slot (function above)
    // if (checkForAvailableTimeSlot(rotationsList, flight, state.turnoverTime)) {
    //   return {
    //     ...flight,
    //     eligibility: true,
    //   };
    // }

    return {
      ...flight,
      eligibility: false,
    };
  });

  return updatedFlights;
};

//////////////////////////////////////////////////

export const addFlightToRotations = (state, flight) => {
  //1. Add flight to existing rotations
  const rotationsList = state.rotations.concat(flight);

  //2. Sort list of rotations
  rotationsList.sort((a, b) => a.departuretime - b.departuretime);

  //3. Update remaining flights rotation eligibility
  const updateFlights = updateFlightRotationEligibility(rotationsList, state);

  //4. Recalculate aircraft utilisation
  const utilisation = calculateAircraftUtilisation(rotationsList);

  //5. Assign utilisation to selected aircraft
  const updatedAircrafts = state.aircrafts.map((aircraft) => {
    if (aircraft.ident === state.selectedAircraft) {
      return {
        ...aircraft,
        utilisation,
      };
    }
    return aircraft;
  });

  return {
    ...state,
    aircrafts: updatedAircrafts,
    flights: updateFlights,
    rotations: rotationsList,
  };
};

////////////////////////////////////////////////////
