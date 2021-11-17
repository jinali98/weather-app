import styled from "styled-components";
export const ForecastPageContainer = styled.div`
  width: 80vw;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 360px) {
    width: 85vw;
  }
`;
