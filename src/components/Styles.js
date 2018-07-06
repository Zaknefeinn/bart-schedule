import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 80vh;
  margin: 10vh auto;
  width: 90%;
  flex-direction: row;
`;
export const SearchContainer = styled.div`
  height: 100%;
`;
export const Select = styled.select`
  background-color: #777;
  color: white;
  border-radius: 3px;
  height: 30px;
`;
export const ResultsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgba(235, 235, 235, 0.7);
  border-radius: 5px;
`;
export const SearchInfo = styled.div`
  min-height: 110px;
  display: flex;
  justify-content: center;
  h1 {
    font-size: 2.5em;
    letter-spacing: 4px;
  }
`;
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: auto;
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
  display: flex;
  border-bottom: 1px solid rgba(30, 52, 56, 1);
  background-color: rgb(0, 118, 163);
  color: white;
  position: relative;
  margin: 10px;
  padding: 5px;
  border-radius: 4px;
  box-shadow: 5px 5px 5px rgba(30, 52, 56, 0.2);
  @media (max-height: 950px) {
    min-height: 100px;
  }
`;
export const Button = styled.button`
  padding: 8px;
  border-radius: 5px;
  outline: none;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  :hover {
    cursor: pointer;
    transform: translateY(-2px);
  }
  :active {
    transform: translateY(-1px);
  }
`;
export const CardTime = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  div {
    text-align: center;
  }
`;
export const ArrowContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const Arrow = styled.div`
  width: 6px;
  height: 6px;
  border: 3px solid;
  border-color: #ff9933 transparent transparent #ff9933;
  transform: rotate(135deg);
`;
export const SubCard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  h5 {
    margin: 0;
    text-align: center;
    font-size: 1em;
  }
`;
export const SubCardTitle = styled.div`
  height: 30px;
  text-align: center;
  h3 {
    margin: 0;
    letter-spacing: 3px;
  }
`;
export const SubCardContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  height: 100%;
`;

//Style Calendar Input from Node Package
export const Calendar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  div {
    div {
      div {
        input {
          width: 100px;
          background-color: #777;
          color: white;
          border-radius: 5px;
          height: 25px;
          :hover {
            cursor: pointer;
          }
        }
      }
    }
  }
`;
