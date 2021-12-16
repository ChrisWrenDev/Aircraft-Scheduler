import styled from "styled-components";

const LoadingCard = (props) => {
  return (
    <Card>
      <SkeletonLoading />
    </Card>
  );
};

const Card = styled.div`
  width: 300px;
  height: 150px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #dddbdd;
  margin-bottom: 15px;
  position: relative;
`;

const SkeletonLoading = styled.div`
  display: inline-block;
  height: 100%;
  width: 100%;
  background: linear-gradient(-90deg, #fff 0%, #dddbdd 50%, #fff 100%);
  background-size: 400% 400%;
  animation: pulse 2s ease-in-out infinite;
  @keyframes pulse {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -150% 0%;
    }
  }
`;

export default LoadingCard;
