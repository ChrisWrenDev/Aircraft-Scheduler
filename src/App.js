import styled from "styled-components";
import Header from "./components/layout/header";
import Aircrafts from "./components/aircrafts/aircrafts";
import Rotations from "./components/rotations/rotations";
import Flights from "./components/flights/flights";

function App() {
  return (
    <Container>
      <Header />
      <Aircrafts />
      <Rotations />
      <Flights />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 100px 1fr;
  grid-template-columns: 1fr 2fr 1fr;
  overflow: hidden;
`;

export default App;
