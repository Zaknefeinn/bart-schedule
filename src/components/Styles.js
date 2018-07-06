import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 80vh;
  margin: 10vh auto;
  width: 90%;
  flex-direction: row;
  border: 1px solid black;
`;
export const SearchContainer = styled.div`
  height: 100%;
  border-right: 1px solid black;
`;
export const ResultsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const SearchInfo = styled.div`
  height: 150px;
  border-bottom: 1px solid black;
`;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
  background-color: #0076a3;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;
export const FormRow = styled.div`
  text-align: center;
  padding: 15px;
`;

export const Card = styled.div`
  flex: 1;
  display: flex;
  border-bottom: 1px solid black;
  background-color: rgba(242, 247, 248, 1);
  position: relative;
`;

export const CardTime = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  div {
    text-align: center;
  }
`;
export const SubCard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
//Style Calendar Input
export const Calendar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  div {
    div {
      div {
        input {
          width: 100px;
          :hover {
            cursor: pointer;
          }
        }
      }
    }
  }
`;
