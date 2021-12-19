// import { useState } from "react";
import styled from "styled-components";
import { IoChevronForward, IoChevronBack } from "react-icons/io5";

const nth = (day) => {
  if (day > 3 && day < 21) return "th";
  switch (day % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

const formatDate = (date) => {
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let day = date.getUTCDate();
  let month = monthNames[date.getUTCMonth()];
  let year = date.getUTCFullYear();

  return `${day}${nth(day)} ${month} ${year}`;
};

function incrementDate(date, increment) {
  let newDate = new Date(date);
  newDate.setDate(date.getUTCDate() + increment);

  return newDate;
}

const DateScroller = () => {
  // const [increment, setIncrement] = useState(1);

  let todaysDate = new Date();

  let displayDate = incrementDate(todaysDate, 1);

  // const increaseHandler = () => {
  //   setIncrement((currentIncrement) => (currentIncrement += 1));
  // };

  // const decreaseHandler = () => {
  //   setIncrement((currentIncrement) => (currentIncrement -= 1));
  // };
  return (
    <DateContainer>
      <Button>
        <Previous />
      </Button>
      <DateText>{formatDate(displayDate)}</DateText>
      <Button>
        <Next />
      </Button>
    </DateContainer>
  );
};

const DateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #f5f7fb;
  }
`;

const DateText = styled.p`
  font-size: 2rem;
  font-weight: 500;
  margin: 0 2rem;
`;

const Previous = styled(IoChevronBack)`
  font-size: 2rem;
`;

const Next = styled(IoChevronForward)`
  font-size: 2rem;
`;

export default DateScroller;
