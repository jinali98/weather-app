import styled from "styled-components";

export const HomeContentWrapper = styled.div`
  width: 80vw;
  margin: 75px auto 30px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    width: 90vw;
  }
  @media (max-width: 360px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;

    width: 85vw;
  }
`;
