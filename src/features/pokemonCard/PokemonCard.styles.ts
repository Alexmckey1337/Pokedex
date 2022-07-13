import styled from "styled-components";

export const StyledPokemonCard = styled.div`
  position: relative;
  margin: 8px;
  width: 160px;
  height: 160px;
  border: 1px solid grey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
    & svg {
      transition: all 0.5s ease-in;
      visibility: visible;
      opacity: 1;
    }
  }

  & img {
    height: 100px;
  }

  & svg {
    transition: all 0.5s ease-in-out;
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 5px;
    right: 5px;
  }
`;
