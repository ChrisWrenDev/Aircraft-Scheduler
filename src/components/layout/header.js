import styled from "styled-components";
import DateScroller from "../date/dateScoller";

const Header = () => {
  return (
    <HeaderContainer>
      <DateScroller />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  grid-area: 1 / span 3;
  background-color: #fdfdfd;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Header;
