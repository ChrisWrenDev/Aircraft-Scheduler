import styled from "styled-components";

const Timetable = () => {
  return (
    <Container>
      <TimeRange>
        <Time>0:00</Time>
        <Time>12:00</Time>
        <Time>24:00</Time>
      </TimeRange>
      <Chart>
        <ChartBar type="arrival" width="10%" />
        <ChartBar width="20%" />
        <ChartBar type="arrival" width="30%" />
        <ChartBar width="20%" />
      </Chart>
    </Container>
  );
};

const Container = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f3f5f9;
`;

const Chart = styled.div`
  width: 600px;
  height: 30px;
  background-color: grey;
  display: flex;
`;

const ChartBar = styled.div`
  height: 100%;
  width: ${(props) => props.width};
  background-color: ${(props) =>
    props.type === "arrival" ? "#5026e1" : "#019c73"};
`;

const TimeRange = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-between;
`;

const Time = styled.p`
  font-size: 14px;
`;

export default Timetable;
