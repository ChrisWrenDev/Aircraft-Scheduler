# Aircraft-Scheduler

Application to optimise the utilisation of aircrafts across different of routes.

# Notes

- Aircraft base is EGKK which is not any of the flight origin locations. So an assumption was made that the aircraft will be at the origin of the first flight in the rotation.

- Aircraft api uses "ident" and flight api uses "id" as identifiers, although in JSON files supplied both use "id". I didn't standardise these in the application to prevent confusion when looking at api responses.

- Even though only one aircraft is to be considered in the simplification, I provided functionality to display multiple aircraft if needed in the future.

- I implemented functionality to select the aircraft to provide feedback that flights are being assigned to that specific aircraft.

- Prevented flights in rotation from being removed if they would cause the aircraft to teleport. Used an alert to provide the user feedback on why there action was not fulfilled.

- Implemented updates to the UI based on flight eligibility and alerted the user if a non eligible flight is selected.

- I gave flight times more prominence in the final design to align with common UX pattern on flight booking sites Although I am aware that this may be because destinations have already been chosen.

- Provided functionality to scroll multiple dates, but limited to next day keeping within brief simplification.

- Assumption was made that the design did not need to be made responsive. Although responsive values (rem) have been used to provide easier implementation if needed.
