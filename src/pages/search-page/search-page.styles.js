import styled from "styled-components";

export const SearchPageWrapper = styled.div`
  width: 70vw;
  margin: auto;

  @media (max-width: 360px) {
    width: 85vw;
  }
`;

export const SearchContentWrapper = styled.div`
  display: flex;
  gap: 1rem;
  height: 80vh;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
