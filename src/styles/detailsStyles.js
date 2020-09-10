import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  min-height: 100vh;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Section = styled.div`
  min-height: 100%;
  min-height: 100vh;
  padding: 20px;

  @media (max-width: 768px) {
    width: 100vw;
    min-height: auto;
  }
`;

export const LeftBox = styled(Section)`
  width: 30vw;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    order: 3;
  }
`;

export const MiddleBox= styled(Section)`
  width: 40vw;

  @media (max-width: 768px) {
    order: 1;
  }
`;

export const RightBox = styled(Section)`
    width: 30vw;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
      order: 2;
    }
`;

export const Table = styled.table`
  width:100%;
  padding: 0;
  margin: 0;
  text-align: left;
  text-transform: uppercase;
`;

export const Th = styled.th`
  padding: 12px;
  background-color: yellow;
`;

export const Td = styled.td`
  background-color: #f4f4f4;
  padding: 12px;

  &:last-child {
    text-align: center;
  }
`;

export const Name = styled.div`
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  font-size: 3vw;
  margin-top: 20px;
  font-weight: bold;
`;

export const Description = styled.div`
  width: 100%;
  font-size: 1.9vh;
`;
